import { z } from "zod";

/**
 * Client-safe env vars only. Next.js inlines NEXT_PUBLIC_* vars at build time,
 * which requires each one to be referenced statically (not via a loop/computed key).
 */
const envSchema = z.object({
  NODE_ENV: z.enum(["development", "test", "production"]),
  NEXT_PUBLIC_SITE_URL: z.url(),
});

const parsedEnv = envSchema.safeParse({
  NODE_ENV: process.env.NODE_ENV,
  NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
});

if (!parsedEnv.success) {
  console.error("❌ Invalid client env variables:", parsedEnv.error.flatten().fieldErrors);
  throw new Error("Invalid client env variables");
}

export const clientEnv = parsedEnv.data;
