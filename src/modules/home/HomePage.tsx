import { PageWrapper } from "@/shared/components/shared/PageWrapper";
import { HeroSection } from "./sections/HeroSection";
import { SellingPointsSection } from "./sections/SellingPointsSection";
import { AboutSection } from "./sections/AboutSection";
import { ServicesPreviewSection } from "./sections/ServicesPreviewSection";
import { WhyChooseUsSection } from "./sections/WhyChooseUsSection";
import { CtaSection } from "./sections/CtaSection";

export function HomePage() {
  return (
    <PageWrapper>
      <HeroSection />
      <SellingPointsSection />
      <AboutSection />
      <ServicesPreviewSection />
      <WhyChooseUsSection />
      <CtaSection />
    </PageWrapper>
  );
}
