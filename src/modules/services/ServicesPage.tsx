import { PageWrapper } from "@/shared/components/shared/PageWrapper";
import { PageHero } from "@/shared/components/layout/PageHero";
import { CtaBand } from "@/shared/components/shared/CtaBand";
import { ServicesGridSection } from "./sections/ServicesGridSection";

export function ServicesPage() {
  return (
    <PageWrapper>
      <PageHero
        eyebrow="What we do"
        title="Our services"
        description="From seats to steering wheels, every surface inside your car, restored or reimagined by hand."
        image="https://images.unsplash.com/photo-1680102143987-c62b572f6276?q=80&fm=webp&fit=crop&w=1600"
        imageAlt="Sports car interior with red leather stitching"
      />
      <ServicesGridSection />
      <CtaBand
        heading="Ready to give your interior a new lease of life?"
        description="Book an appointment or reach out for a free quote."
      />
    </PageWrapper>
  );
}
