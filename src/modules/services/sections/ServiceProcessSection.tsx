import { SectionWrapper } from "@/shared/components/shared/SectionWrapper";
import { SectionHeading } from "@/shared/components/shared/SectionHeading";
import type { Service } from "../content/services-content";

export function ServiceProcessSection({ service }: { service: Service }) {
  return (
    <section className="bg-secondary py-24 mesh mesh-accent">
      <SectionWrapper>
        <SectionHeading
          eyebrow="How it works"
          title="Our process"
          description="A straightforward path from first look to finished result."
          light
        />
        <div className="mx-auto max-w-2xl">
          {service.process.map((step, index) => (
            <div
              key={step.title}
              className={`flex gap-5 border-t border-dashed border-accent/35 py-5 ${
                index === service.process.length - 1 ? "border-b" : ""
              }`}
            >
              <div className="w-10 shrink-0 font-heading text-xl text-accent">{String(index + 1).padStart(2, "0")}</div>
              <div>
                <h3 className="mb-1.5 text-base font-body font-extrabold sm:font-heading text-white">{step.title}</h3>
                <p className="text-sm text-[#aab2c4]">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>
    </section>
  );
}
