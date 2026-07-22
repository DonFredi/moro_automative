import { PageWrapper } from "@/shared/components/shared/PageWrapper";
import { HeroSection } from "./sections/HeroSection";
import { SellingPointsSection } from "./sections/SellingPointsSection";
import { AboutSection } from "./sections/AboutSection";
import { ServicesPreviewSection } from "./sections/ServicesPreviewSection";
import { WhyChooseUsSection } from "./sections/WhyChooseUsSection";
import { CtaSection } from "./sections/CtaSection";
import { PricingPreviewSection } from "../pricing/sections/PricingPreviewSection";

export function HomePage() {
  return (
    <PageWrapper>
      <HeroSection />
      <SellingPointsSection />
      <AboutSection />
      <ServicesPreviewSection />
      <PricingPreviewSection />
      <WhyChooseUsSection />
      <CtaSection />
    </PageWrapper>
  );
}
