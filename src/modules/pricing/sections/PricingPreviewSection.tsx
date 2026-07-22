import { SectionWrapper } from "@/shared/components/shared/SectionWrapper";
import { SectionHeading } from "@/shared/components/shared/SectionHeading";
import { FadeIn } from "@/shared/components/shared/FadeIn";
import { PricingTable } from "../components/PricingTable";

export function PricingPreviewSection() {
  return (
    <section className="border-t border-border py-24">
      <SectionWrapper>
        <SectionHeading
          eyebrow="Transparent pricing"
          title="Our price list"
          description="Clear, upfront pricing — pick your material, know the cost before you book."
        />
        <FadeIn>
          <PricingTable variant="preview" />
        </FadeIn>
      </SectionWrapper>
    </section>
  );
}
