"use server";

import { headers } from "next/headers";
import { enquirySchema } from "@/lib/validators";
import { sendEnquiryEmail } from "@/lib/email";
import { rateLimit } from "@/lib/rate-limit";

export type EnquiryActionResult =
  | { status: "ok" }
  | { status: "error"; fieldErrors?: Record<string, string>; formError?: string };

export async function submitEnquiry(
  _prevState: EnquiryActionResult | null,
  formData: FormData,
): Promise<EnquiryActionResult> {
  // --- Rate limit -----------------------------------------------------------
  const h = await headers();
  const ip =
    h.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    h.get("x-real-ip") ||
    "unknown";
  const limit = rateLimit(`enquiry:${ip}`);
  if (!limit.ok) {
    return {
      status: "error",
      formError:
        "Too many enquiries from this network. Please wait a few minutes and try again.",
    };
  }

  // --- Parse ---------------------------------------------------------------
  const raw = {
    businessName: formData.get("businessName"),
    contactName: formData.get("contactName"),
    role: formData.get("role"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    canton: formData.get("canton"),
    message: formData.get("message"),
    consent: formData.get("consent") === "on" ? true : false,
    website: formData.get("website") ?? "",
    startedAt: formData.get("startedAt"),
  };

  const parsed = enquirySchema.safeParse(raw);
  if (!parsed.success) {
    const fieldErrors: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path[0];
      if (typeof key === "string" && !fieldErrors[key]) {
        fieldErrors[key] = issue.message;
      }
    }
    return { status: "error", fieldErrors };
  }

  // --- Honeypot + time-trap ------------------------------------------------
  if (parsed.data.website) {
    // Pretend success to the bot; do nothing.
    return { status: "ok" };
  }
  if (
    parsed.data.startedAt &&
    Date.now() - Number(parsed.data.startedAt) < 2_000
  ) {
    return { status: "ok" };
  }

  // --- Send ----------------------------------------------------------------
  try {
    await sendEnquiryEmail(parsed.data);
    return { status: "ok" };
  } catch (err) {
    console.error("enquiry: email send failed", err);
    return {
      status: "error",
      formError:
        "We could not send your enquiry. Please try again in a moment, or email us directly.",
    };
  }
}
