import { SectionWrapper } from "@/shared/components/shared/SectionWrapper";
import { ContentIcon, type ContentIconName } from "@/shared/components/shared/ContentIcon";
import type { Service, ServiceOption } from "../content/services-content";

const ICON_MAP: Record<ServiceOption["icon"], ContentIconName> = {
  diamond: "diamond",
  scissors: "scissors",
  star: "star",
};

export function ServiceOptionsSection({ service }: { service: Service }) {
  if (!service.options || service.options.length === 0) return null;

  return (
    <section className="pb-24 pt-10">
      <SectionWrapper>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {service.options.map((option) => (
            <div key={option.title} className="border border-border bg-white p-7">
              <div className="mb-[18px] flex h-[54px] w-[54px] items-center justify-center rounded-full border-2 border-dashed border-accent text-primary">
                <ContentIcon name={ICON_MAP[option.icon]} className="h-5 w-5" />
              </div>
              <h3 className="mb-2 text-[17px] font-bold">{option.title}</h3>
              <p className="text-sm text-text-body">{option.description}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>
    </section>
  );
}
