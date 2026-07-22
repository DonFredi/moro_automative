import { PageWrapper } from "@/shared/components/shared/PageWrapper";
import { PageHero } from "@/shared/components/layout/PageHero";
import { SectionWrapper } from "@/shared/components/shared/SectionWrapper";
import { CtaBand } from "@/shared/components/shared/CtaBand";
import { PricingTable } from "./components/PricingTable";

export function PricingPage() {
  return (
    <PageWrapper>
      <PageHero
        eyebrow="Transparent pricing"
        title="Our price list"
        description="Clear, upfront pricing for every service we offer — no surprises when you pick up your car."
        image="https://images.unsplash.com/photo-1680102143987-c62b572f6276?q=80&fm=webp&fit=crop&w=1600"
        imageAlt="Sports car interior with red leather stitching"
      />

      <section className="py-24">
        <SectionWrapper>
          <PricingTable variant="full" />
          <p className="mt-6 text-center text-[13px] text-text-secondary">
            Prices may vary slightly depending on vehicle model and condition. Get in touch for an exact quote.
          </p>
        </SectionWrapper>
      </section>

      <CtaBand
        heading="Ready to book your service?"
        description="Reach out with your vehicle details and preferred material for an exact quote."
      />
    </PageWrapper>
  );
}
