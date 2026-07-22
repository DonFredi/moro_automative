import { PageWrapper } from "@/shared/components/shared/PageWrapper";
import { PageHero } from "@/shared/components/layout/PageHero";
import { CtaBand } from "@/shared/components/shared/CtaBand";
import { JsonLd } from "@/shared/components/shared/JsonLd";
import { buildServiceSchema, buildBreadcrumbSchema } from "@/shared/lib/json-ld/json-ld-data";
import { ServiceOverviewSection } from "./sections/ServiceOverviewSection";
import { ServiceOptionsSection } from "./sections/ServiceOptionsSection";
import { ServiceProcessSection } from "./sections/ServiceProcessSection";
import { ServiceGallerySection } from "./sections/ServiceGallerySection";
import { ServiceIncludedSection } from "./sections/ServiceIncludedSection";
import type { Service } from "./content/services-content";

export function ServiceDetailPage({ service }: { service: Service }) {
  const serviceSchema = buildServiceSchema(service);
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
    { name: service.title, url: `/services/${service.slug}` },
  ]);

  return (
    <PageWrapper>
      <JsonLd data={serviceSchema} />
      <JsonLd data={breadcrumbSchema} />

      <PageHero
        eyebrow={service.title}
        title={service.title}
        description={service.shortDescription}
        image={service.heroImage}
        imageAlt={service.title}
        breadcrumbLabels={{ services: "Services", [service.slug]: service.title }}
      />
      <ServiceOverviewSection service={service} />
      <ServiceOptionsSection service={service} />
      <ServiceProcessSection service={service} />
      <ServiceGallerySection service={service} />
      <ServiceIncludedSection service={service} />
      <CtaBand
        heading="Ready to upgrade your interior?"
        description="Book an appointment or reach out for a free quote."
        lockedService={service.title}
      />
    </PageWrapper>
  );
}
