import { SectionWrapper } from "@/shared/components/shared/SectionWrapper";
import { FadeIn } from "@/shared/components/shared/FadeIn";
import { ServiceCard } from "../components/ServiceCard";
import { services } from "../content/services-content";

export function ServicesGridSection() {
  return (
    <section className="py-24">
      <SectionWrapper>
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
