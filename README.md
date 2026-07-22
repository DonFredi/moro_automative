# Moro Automotive

Marketing website for Moro Automotive — a car upholstery and interior specialist business. Built with Next.js (App Router), TypeScript, and Tailwind CSS v4.

## Tech stack

- **Framework:** Next.js 15 (App Router, `src/` directory)
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS v4 (CSS-first config — no `tailwind.config.js`, tokens live in `src/styles/globals.css`)
- **UI primitives:** shadcn-style components (Button, Input, Select, Dialog, Sheet, Skeleton, Carousel) built on Radix UI
- **Forms:** React Hook Form + Zod
- **Animation:** Framer Motion (used sparingly — section-level fade-ins only)
- **Fonts:** Archivo Black (headings) + Manrope (body), self-hosted via `next/font/google`

## Getting started

```bash
npm install
cp .env.example .env   # already present with working local defaults
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

```
src/
├── app/                      # Next.js App Router — routes only, no business logic
│   ├── layout.tsx            # root layout: fonts, global JSON-LD, providers
│   ├── sitemap.ts
│   ├── robots.ts
│   ├── loading.tsx
│   ├── not-found.tsx
│   └── (main)/                # route group sharing Header/Footer/LocationBar
│       ├── layout.tsx
│       ├── page.tsx           # → <HomePage />
│       ├── services/
│       │   ├── page.tsx       # → <ServicesPage />
│       │   └── [slug]/page.tsx # → <ServiceDetailPage />
│       └── contact/page.tsx   # → <ContactPage />
│
├── modules/                  # feature-based composition — all real page logic lives here
│   ├── home/
│   ├── services/
│   ├── contact/
│   └── booking/               # the "Book an appointment" modal, used site-wide
│
├── shared/
│   ├── components/
│   │   ├── layout/            # Header, Footer, LocationBar, PageHero, Badge, MobileNav
│   │   ├── shared/             # PageWrapper, SectionWrapper, SectionHeading, CtaBand, etc.
│   │   └── ui/                 # shadcn primitives (button, input, select, dialog, sheet...)
│   ├── lib/                    # utils, seo.ts, json-ld/
│   └── providers/              # AppProviders (wraps BookingModalProvider)
│
├── config/
│   ├── site.ts                 # single source of truth for all business data
│   ├── client.ts / server.ts    # validated env re-exports — never import env/ directly elsewhere
│   └── env/                    # zod-validated env schemas (clientEnv.ts, serverEnv.ts)
│
└── styles/globals.css          # Tailwind v4 tokens (@theme inline) + small @layer components
```

### Why this structure

- **`app/` stays thin.** Every route file only imports and renders a `<FeaturePage />` from `modules/`. All real composition, layout, and logic lives in the matching module.
- **No data-fetching layers (`repository/service/hooks`) yet.** This site has no database — service data is a fixed, typed content file (`modules/services/content/services-content.ts`). If a CMS or database is introduced later, that's the point to add those layers back.
- **`config/site.ts` is the only place business data lives** — name, phone, WhatsApp number, address, hours, social links, nav items. Every component (Header, Footer, LocationBar, Contact page, JSON-LD) reads from here. Update the business phone number once, it updates everywhere.
- **`generateSEO()`** (`shared/lib/seo.ts`) is called with only the fields that differ per page — never reconstruct the whole `Metadata` object. See any `page.tsx` for the pattern.

## Environment variables

Env vars are never read via `process.env` directly anywhere outside `src/config/env/`. Every other file imports `clientConfig` or `serverConfig` from `src/config/client.ts` / `src/config/server.ts`.

| Variable | Where | Required | Notes |
|---|---|---|---|
| `NODE_ENV` | client + server | yes | standard Next.js env |
| `NEXT_PUBLIC_SITE_URL` | client | yes | used for metadataBase, sitemap, canonical/OG URLs |

Copy `.env.example` to `.env` and update `NEXT_PUBLIC_SITE_URL` to the real production domain before deploying.

## The "Book an appointment" flow

There is no backend contact-form submission. Every "Book an appointment" button site-wide (header, hero, CTA bands, "Book this service" on service detail pages) opens the same modal (`modules/booking`), which renders `<ContactForm />`.

On submit, the form:
1. Validates with Zod (`modules/contact/schemas/inquiry.schema.ts`)
2. Builds a cleanly formatted message (`modules/contact/lib/build-whatsapp-message.ts`)
3. Opens a `wa.me` deep link with the message pre-filled, pointed at the business WhatsApp number in `config/site.ts`

The visitor still has to tap **Send** inside WhatsApp — there is no way to submit a WhatsApp message fully silently without the official WhatsApp Business Platform (Cloud API), which requires Meta business verification and template approval. If that's set up in future, only `build-whatsapp-message.ts` (or a new server action) needs to change — no component upstream needs touching.

There's also a persistent floating WhatsApp button (bottom-right, every page) that opens a direct chat with the business number.

## Editing content

- **Services** (titles, descriptions, images, process steps, gallery): `src/modules/services/content/services-content.ts`. Adding a 7th service is a data change — the services grid, sitemap, and static params for detail pages all read from this array automatically.
- **Homepage copy** (hero, about, selling points, why-choose-us): `src/modules/home/content/home-content.ts`. The About section copy is placeholder — replace with the client's real story.
- **Business info** (phone, WhatsApp, address, hours, socials, nav): `src/config/site.ts`.

## SEO

- `generateSEO()` builds per-page `Metadata` (title, description, OG, Twitter card, canonical) from `site.ts` defaults + page overrides.
- `sitemap.ts` and `robots.ts` are generated dynamically — service routes are mapped from `services-content.ts`, not hardcoded.
- JSON-LD: an `AutoRepair` (LocalBusiness) schema + `WebSite` schema render in the root layout; each service detail page adds its own `Service` + `BreadcrumbList` schema (`shared/lib/json-ld/json-ld-data.ts`).

## Images

All images currently come from Unsplash (free-license) via `next/image` with `remotePatterns` configured in `next.config.ts`. Hero/above-the-fold images use `priority` to preload as LCP; all images show a `Skeleton` placeholder until loaded (`shared/components/shared/ImageWithSkeleton.tsx`). Replace with real client photography by swapping URLs in the content files — no component changes needed.

## Known placeholders to replace before launch

- Business phone, email, and WhatsApp number in `config/site.ts`
- Address coordinates (`geo`) in `config/site.ts` — currently approximate
- Workshop hours in `config/site.ts`
- About-section copy in `modules/home/content/home-content.ts`
- `NEXT_PUBLIC_SITE_URL` — currently a placeholder domain
- Map graphic in `modules/contact/components/MapGraphic.tsx` — swap for a real embedded iframe once ready (isolated in its own file for an easy swap)
- OG image at `public/images/og-image.jpg` (referenced in `site.ts` but not yet added)
