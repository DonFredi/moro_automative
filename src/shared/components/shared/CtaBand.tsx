import { SectionWrapper } from "./SectionWrapper";
import { BookAppointmentButton } from "./BookAppointmentButton";

export function CtaBand({
  heading,
  description,
  lockedService,
}: {
  heading: string;
  description: string;
  lockedService?: string;
}) {
  return (
    <div className="bg-bg py-24">
      <SectionWrapper>
        <div className="relative flex flex-col items-center gap-8 overflow-hidden border-[1.5px] border-dashed border-black/20 bg-white p-8 text-center shadow-[0_20px_50px_rgba(22,33,62,0.12)] sm:flex-row sm:justify-between sm:p-14 sm:text-left">
          <div className="relative z-10">
            <h2 className="mb-2.5 font-heading text-[26px] sm:text-[28px]">{heading}</h2>
            <p className="text-[14.5px] text-text-body">{description}</p>
          </div>
          <BookAppointmentButton lockedService={lockedService} className="relative z-10 shrink-0" />

          <div className="corner-mesh corner-mesh--tl corner-mesh--accent" />
          <div className="corner-mesh corner-mesh--br corner-mesh--base" />
        </div>
      </SectionWrapper>
    </div>
  );
}
