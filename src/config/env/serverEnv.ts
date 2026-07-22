import { z } from "zod";

/**
 * Server-only env vars. Safe to parse the whole process.env object here since
 * this module must never be imported from a "use client" file.
 *
 * Currently minimal: the WhatsApp hand-off is a client-side wa.me redirect, so
 * no server secrets are required for it. This file exists so that adding a
 * server-only integration later (e.g. the official WhatsApp Business Platform
 * API, analytics, etc.) is a matter of extending the schema below — nothing
 * elsewhere in the app should ever read process.env directly.
 */
const envSchema = z.object({
  NODE_ENV: z.enum(["development", "test", "production"]),
});

const parsedEnv = envSchema.safeParse(process.env);

if (!parsedEnv.success) {
  console.error("❌ Invalid server env variables:", parsedEnv.error.flatten().fieldErrors);
  process.exit(1);
}

export const serverEnv = parsedEnv.data;
