import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { generateSEO } from "@/shared/lib/seo";
import { services, getServiceBySlug } from "@/modules/services/content/services-content";
import { ServiceDetailPage } from "@/modules/services/ServiceDetailPage";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return generateSEO();

  return generateSEO({
    title: service.title,
    description: service.metaDescription,
    image: service.heroImage,
    url: `/services/${service.slug}`,
  });
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) notFound();

  return <ServiceDetailPage service={service} />;
}
