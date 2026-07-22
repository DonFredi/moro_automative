import { SectionWrapper } from "@/shared/components/shared/SectionWrapper";
import { SectionHeading } from "@/shared/components/shared/SectionHeading";
import { ServiceGallery } from "../components/ServiceGallery";
import type { Service } from "../content/services-content";

export function ServiceGallerySection({ service }: { service: Service }) {
  return (
    <section className="py-24">
      <SectionWrapper>
        <SectionHeading
          eyebrow="Our work"
          title={`Recent ${service.title.toLowerCase()}`}
          description="A look at the materials and finishes we work with. Click any photo to view it larger."
        />
        <ServiceGallery images={service.gallery} title={service.title} />
      </SectionWrapper>
    </section>
  );
}
