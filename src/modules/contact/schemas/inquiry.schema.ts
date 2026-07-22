import { z } from "zod";

export const inquirySchema = z.object({
  fullName: z.string().min(2, "Please enter your full name"),
  email: z.email("Enter a valid email address").optional().or(z.literal("")),
  phone: z.string().min(7, "Enter a valid phone number"),
  service: z.string().min(1, "Please select a service"),
  vision: z.string().min(10, "Tell us a little more about what you have in mind"),
});

export type InquiryFormValues = z.infer<typeof inquirySchema>;
