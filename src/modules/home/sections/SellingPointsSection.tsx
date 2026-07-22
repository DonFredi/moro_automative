import { ContentIcon } from "@/shared/components/shared/ContentIcon";
import { sellingPoints } from "../content/home-content";

export function SellingPointsSection() {
  return (
    <section className="border-y border-border py-14">
      <div className="section-wrapper flex flex-wrap items-stretch justify-between gap-y-7">
        {sellingPoints.map((point, i) => (
          <div
            key={point.title}
            className={`relative flex-1 basis-1/2 px-5 text-center sm:basis-auto ${
              i !== sellingPoints.length - 1
                ? "after:absolute after:right-0 after:top-2 after:bottom-2 after:hidden after:border-r-[1.5px] after:border-dashed after:border-border sm:after:block"
                : ""
            }`}
          >
            <div className="mx-auto mb-4 flex h-[66px] w-[66px] items-center justify-center rounded-full border-[2.5px] border-dashed border-accent text-primary">
              <ContentIcon name={point.icon} className="h-6 w-6" />
            </div>
            <h3 className="text-[15.5px] font-body font-extrabold">{point.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
