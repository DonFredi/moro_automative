import { SectionWrapper } from "@/shared/components/shared/SectionWrapper";
import { SectionHeading } from "@/shared/components/shared/SectionHeading";
import { FadeIn } from "@/shared/components/shared/FadeIn";
import { ServiceCard } from "@/modules/services/components/ServiceCard";
import { services } from "@/modules/services/content/services-content";

export function ServicesPreviewSection() {
  return (
    <section id="services" className="py-24">
      <SectionWrapper>
        <SectionHeading
          eyebrow="What we do"
          title="Our services"
          description="From seats to steering wheels, every surface inside your car, restored or reimagined."
        />
        <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <FadeIn key={service.slug} delay={i * 0.05}>
              <ServiceCard service={service} />
            </FadeIn>
          ))}
        </div>
      </SectionWrapper>
    </section>
  );
}
