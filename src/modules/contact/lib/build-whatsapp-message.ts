import { siteConfig } from "@/config/site";
import type { InquiryFormValues } from "../schemas/inquiry.schema";

/**
 * Builds a wa.me deep link with a pre-filled, cleanly formatted inquiry
 * message. The visitor still has to tap "send" inside WhatsApp — there is
 * no way to submit a WhatsApp message fully silently without the official
 * Business Platform API.
 */
export function buildWhatsAppUrl(values: InquiryFormValues): string {
  const lines = [
    "Hello Moro Automotive, I'd like to request a service.",
    "",
    `*Name:* ${values.fullName}`,
    `*Phone:* ${values.phone}`,
    values.email ? `*Email:* ${values.email}` : null,
    `*Service:* ${values.service}`,
    "",
    `*Details:*`,
    values.vision,
  ].filter((line): line is string => line !== null);

  const text = lines.join("\n");

  return `${siteConfig.contact.whatsapp.link}?text=${encodeURIComponent(text)}`;
}
