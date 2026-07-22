import { SectionWrapper } from "@/shared/components/shared/SectionWrapper";
import { ImageWithSkeleton } from "@/shared/components/shared/ImageWithSkeleton";
import { BookAppointmentButton } from "@/shared/components/shared/BookAppointmentButton";
import { FadeIn } from "@/shared/components/shared/FadeIn";
import type { Service } from "../content/services-content";

export function ServiceOverviewSection({ service }: { service: Service }) {
  return (
    <section className="pb-10 pt-24">
      <SectionWrapper>
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          <FadeIn>
            <h2 className="mb-4 font-heading text-[30px] leading-tight">{service.overviewHeading}</h2>
            {service.overviewParagraphs.map((paragraph) => (
              <p key={paragraph} className="mb-4 max-w-lg text-[15.5px] text-text-body">
                {paragraph}
              </p>
            ))}
            <BookAppointmentButton lockedService={service.title} className="mt-2">
              Book this service
            </BookAppointmentButton>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="relative">
              <div className="relative aspect-[4/3] border border-border">
                <ImageWithSkeleton
                  src={service.overviewImages.main}
                  alt={`${service.title} — finished result`}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
              </div>
              <div className="relative ml-auto mt-4 aspect-video w-[62%] border border-border">
                <ImageWithSkeleton
                  src={service.overviewImages.secondary}
                  alt={`${service.title} — detail close-up`}
                  fill
                  sizes="(min-width: 768px) 30vw, 60vw"
                />
              </div>
            </div>
          </FadeIn>
        </div>
      </SectionWrapper>
    </section>
  );
}
