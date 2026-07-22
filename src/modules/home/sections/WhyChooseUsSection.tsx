import { SectionWrapper } from "@/shared/components/shared/SectionWrapper";
import { SectionHeading } from "@/shared/components/shared/SectionHeading";
import { ContentIcon } from "@/shared/components/shared/ContentIcon";
import { whyChooseUs } from "../content/home-content";

export function WhyChooseUsSection() {
  return (
    <section className="relative overflow-hidden bg-secondary py-24 mesh mesh-accent">
      <SectionWrapper>
        <SectionHeading
          eyebrow="Why choose us"
          title="Craft that holds up to daily life"
          description="We treat every interior like it's going into our own car."
          light
        />
        <div className="relative z-10 grid grid-cols-1 gap-9 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
          {whyChooseUs.map((item, i) => (
            <div
              key={item.title}
              className={`relative flex flex-col items-center px-4 text-center ${
                i !== whyChooseUs.length - 1
                  ? "lg:after:absolute lg:after:right-0 lg:after:top-1.5 lg:after:bottom-1.5 lg:after:border-r-[1.5px] lg:after:border-dashed lg:after:border-accent/35"
                  : ""
              }`}
            >
              <div className="mb-[18px] flex h-[70px] w-[70px] items-center justify-center rounded-full border-[2.5px] border-dashed border-accent text-accent">
                <ContentIcon name={item.icon} className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-base font-body font-extrabold sm:font-heading text-white">{item.title}</h3>
              <p className="text-[13.5px] leading-relaxed text-[#aab2c4]">{item.description}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>
    </section>
  );
}
