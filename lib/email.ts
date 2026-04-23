import { Resend } from "resend";
import type { EnquiryInput } from "./validators";

/**
 * Resend client factory. We construct lazily so that a missing API key
 * fails loudly only on the path that needs it (the server action) rather
 * than at module-load time for every import.
 */
function getClient() {
  const key = process.env.RESEND_API_KEY;
  if (!key) {
    throw new Error(
      "RESEND_API_KEY is not set. Add it to .env.local (see .env.example).",
    );
  }
  return new Resend(key);
}

export async function sendEnquiryEmail(input: EnquiryInput) {
  const to = process.env.ENQUIRY_INBOX;
  const from = process.env.ENQUIRY_FROM;
  if (!to || !from) {
    throw new Error(
      "ENQUIRY_INBOX and ENQUIRY_FROM must be set in the environment.",
    );
  }

  const client = getClient();

  const subject = `New partnership enquiry — ${input.businessName}`;
  const text = [
    "A new partnership enquiry has been submitted on vitracosmetics.ch.",
    "",
    `Business:   ${input.businessName}`,
    `Contact:    ${input.contactName}`,
    `Role:       ${input.role}`,
    `Email:      ${input.email}`,
    `Phone:      ${input.phone || "—"}`,
    `Canton:     ${input.canton}`,
    "",
    "Message:",
    input.message || "—",
  ].join("\n");

  const html = `
    <div style="font-family: Inter, -apple-system, Segoe UI, sans-serif; color: #0F1520; max-width: 560px;">
      <h2 style="font-family: Georgia, serif; font-weight: 300; letter-spacing: -0.015em; margin: 0 0 16px;">New partnership enquiry</h2>
      <p style="color:#4A5567; margin: 0 0 24px;">Submitted via vitracosmetics.ch</p>
      <table style="border-collapse: collapse; width: 100%; font-size: 14px;">
        <tbody>
          ${[
            ["Business", input.businessName],
            ["Contact", input.contactName],
            ["Role", input.role],
            ["Email", `<a href="mailto:${escapeHtml(input.email)}" style="color:#0F1520;">${escapeHtml(input.email)}</a>`],
            ["Phone", input.phone || "—"],
            ["Canton", input.canton],
          ]
            .map(
              ([k, v]) => `
              <tr>
                <td style="padding: 8px 12px 8px 0; color:#8692A6; vertical-align:top; width: 90px; text-transform: uppercase; font-size: 11px; letter-spacing: 0.14em;">${k}</td>
                <td style="padding: 8px 0;">${v}</td>
              </tr>`,
            )
            .join("")}
        </tbody>
      </table>
      ${
        input.message
          ? `<div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #E3E7ED;">
              <div style="text-transform: uppercase; font-size: 11px; letter-spacing: 0.14em; color:#8692A6; margin-bottom: 8px;">Message</div>
              <div style="white-space: pre-wrap; line-height: 1.6;">${escapeHtml(input.message)}</div>
            </div>`
          : ""
      }
    </div>
  `;

  const result = await client.emails.send({
    from,
    to: [to],
    replyTo: input.email,
    subject,
    text,
    html,
  });

  if (result.error) {
    throw new Error(result.error.message ?? "Email send failed");
  }

  return result.data;
}

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
