import type { Metadata } from "next";
import { Archivo_Black, Manrope } from "next/font/google";

import "@/styles/globals.css";
import { generateSEO } from "@/shared/lib/seo";
import { JsonLd } from "@/shared/components/shared/JsonLd";
import { organizationSchema, websiteSchema } from "@/shared/lib/json-ld/json-ld-data";
import { AppProviders } from "@/shared/providers/AppProviders";

const archivoBlack = Archivo_Black({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-archivo-black",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = generateSEO();

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${archivoBlack.variable} ${manrope.variable}`}>
      <body>
        <JsonLd data={organizationSchema} />
        <JsonLd data={websiteSchema} />
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
