import { z } from "zod";
import { ROLES, CANTONS } from "@/content/copy.en";

export const enquirySchema = z.object({
  businessName: z
    .string()
    .trim()
    .min(2, "Please enter your business name.")
    .max(120, "Business name is too long."),
  contactName: z
    .string()
    .trim()
    .min(2, "Please enter your name.")
    .max(120, "Name is too long."),
  role: z.enum(ROLES, {
    error: "Please select your role.",
  }),
  email: z
    .string()
    .trim()
    .email("Please enter a valid email address.")
    .max(200),
  phone: z
    .string()
    .trim()
    .min(5, "Please enter a valid phone number.")
    .max(40, "Phone number is too long."),
  canton: z.enum(CANTONS, {
    error: "Please select your canton.",
  }),
  message: z
    .string()
    .trim()
    .max(4000, "Message is too long.")
    .optional()
    .or(z.literal("")),
  consent: z.literal(true, {
    error: "Please confirm you agree to be contacted.",
  }),

  // Honeypot — must be empty. Bots tend to fill every field.
  website: z
    .string()
    .max(0, "Invalid submission.")
    .optional()
    .or(z.literal("")),

  // Client-side timestamp; we reject sub-2s form fills (bot-speed).
  startedAt: z.coerce.number().optional(),
});

export type EnquiryInput = z.infer<typeof enquirySchema>;
