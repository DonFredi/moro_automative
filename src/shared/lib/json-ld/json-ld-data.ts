import { siteConfig } from "@/config/site";
import type { Service } from "@/modules/services/content/services-content";

const DAY_MAP: Record<string, string[]> = {
  "Mon – Fri": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
  Saturday: ["Saturday"],
  Sunday: ["Sunday"],
};

/** "8:00 AM" -> "08:00" (schema.org expects 24h HH:MM) */
function to24Hour(time: string): string {
  const [raw, meridiem] = time.trim().split(" ");
  const [hourStr, minuteStr] = raw.split(":");
  let hour = parseInt(hourStr, 10);
  if (meridiem?.toUpperCase() === "PM" && hour !== 12) hour += 12;
  if (meridiem?.toUpperCase() === "AM" && hour === 12) hour = 0;
  return `${String(hour).padStart(2, "0")}:${minuteStr}`;
}

function buildOpeningHours() {
  return siteConfig.hours
    .filter((h) => h.time.toLowerCase() !== "closed")
    .flatMap((h) => {
      const days = DAY_MAP[h.day] ?? [h.day];
      const [opens, closes] = h.time.split("–").map((t) => t.trim());
      if (!opens || !closes) return [];
      return [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: days,
          opens: to24Hour(opens),
          closes: to24Hour(closes),
        },
      ];
    });
}

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  name: siteConfig.name,
  description: siteConfig.description,
  url: siteConfig.siteUrl,
  image: `${siteConfig.siteUrl}${siteConfig.ogImage}`,
  telephone: siteConfig.contact.phone.label,
  email: siteConfig.contact.email.label,
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.address.line,
    addressLocality: siteConfig.address.city,
    addressCountry: siteConfig.address.country,
  },
  ...(siteConfig.address.geo && {
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.address.geo.lat,
      longitude: siteConfig.address.geo.lng,
    },
  }),
  openingHoursSpecification: buildOpeningHours(),
  sameAs: Object.values(siteConfig.socialLinks).filter(Boolean),
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.name,
  url: siteConfig.siteUrl,
};

export function buildServiceSchema(service: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.title,
    name: service.title,
    description: service.metaDescription,
    provider: {
      "@type": "AutoRepair",
      name: siteConfig.name,
      url: siteConfig.siteUrl,
    },
    areaServed: {
      "@type": "City",
      name: siteConfig.address.city,
    },
    url: `${siteConfig.siteUrl}/services/${service.slug}`,
  };
}

export function buildBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.siteUrl}${item.url}`,
    })),
  };
}
