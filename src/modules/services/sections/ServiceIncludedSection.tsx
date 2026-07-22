import { SectionWrapper } from "@/shared/components/shared/SectionWrapper";
import { ContentIcon, type ContentIconName } from "@/shared/components/shared/ContentIcon";
import type { Service, ServiceIncluded } from "../content/services-content";

const ICON_MAP: Record<ServiceIncluded["icon"], ContentIconName> = {
  check: "check",
  diamond: "diamond",
  star: "star",
  clock: "clock",
};

export function ServiceIncludedSection({ service }: { service: Service }) {
  return (
    <section className="pb-24">
      <SectionWrapper>
        <div className="flex flex-wrap items-stretch justify-between gap-y-7">
          {service.included.map((item) => (
            <div key={item.title} className="flex-1 basis-1/2 px-5 text-center md:basis-auto">
              <div className="mx-auto mb-4 flex h-[60px] w-[60px] items-center justify-center rounded-full border-[2.5px] border-dashed border-accent text-primary">
                <ContentIcon name={ICON_MAP[item.icon]} className="h-5 w-5" />
              </div>
              <h3 className="text-[15px] font-bold">{item.title}</h3>
            </div>
          ))}
        </div>
      </SectionWrapper>
    </section>
  );
}
