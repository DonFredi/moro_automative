import { ImageWithSkeleton } from "@/shared/components/shared/ImageWithSkeleton";
import { FadeIn } from "@/shared/components/shared/FadeIn";
import { aboutContent } from "../content/home-content";

export function AboutSection() {
  return (
    <section className="py-24">
      <div className="section-wrapper grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <FadeIn>
          <div className="relative aspect-[4/3] border border-border">
            <ImageWithSkeleton
              src={aboutContent.image}
              alt={aboutContent.imageAlt}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="eyebrow mb-2">{aboutContent.eyebrow}</div>
          <h2 className="mb-5 font-heading text-[30px] leading-tight">{aboutContent.heading}</h2>
          {aboutContent.paragraphs.map((paragraph) => (
            <p key={paragraph} className="mb-4 max-w-lg text-[15.5px] text-text-body">
              {paragraph}
            </p>
          ))}

          <div className="mt-8 flex gap-10 border-t border-dashed border-border pt-6">
            {aboutContent.stats.map((stat) => (
              <div key={stat.label}>
                <div className="font-heading text-3xl text-primary">{stat.value}</div>
                <div className="text-[13px] text-text-secondary">{stat.label}</div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
