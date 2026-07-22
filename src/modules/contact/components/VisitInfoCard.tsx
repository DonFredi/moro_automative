import { MapPin, Phone, Clock } from "lucide-react";
import { siteConfig } from "@/config/site";
import { MapGraphic } from "./MapGraphic";

export function VisitInfoCard() {
  return (
    <div className="border border-border bg-white p-8 sm:p-10">
      <h2 className="mb-[18px] text-[22px] font-bold">Visit us</h2>
      <hr className="stitch-divider mb-7" />

      <div className="flex gap-3.5">
        <MapPin className="mt-0.5 h-[18px] w-[18px] shrink-0 text-primary" />
        <div>
          <div className="mb-1 text-[11.5px] font-bold uppercase tracking-wide text-text-secondary">
            Location
          </div>
          <div className="text-[14.5px] leading-relaxed">
            {siteConfig.address.line}
            <br />
            {siteConfig.address.city}, {siteConfig.address.country}
          </div>
        </div>
      </div>

      <div className="mt-[18px] flex gap-3.5 border-t border-dashed border-border pt-[18px]">
        <Phone className="mt-0.5 h-[18px] w-[18px] shrink-0 text-primary" />
        <div>
          <div className="mb-1 text-[11.5px] font-bold uppercase tracking-wide text-text-secondary">
            Direct line
          </div>
          <div className="text-[14.5px]">{siteConfig.contact.phone.label}</div>
        </div>
      </div>

      <div className="mt-[18px] flex gap-3.5 border-t border-dashed border-border pt-[18px]">
        <Clock className="mt-0.5 h-[18px] w-[18px] shrink-0 text-primary" />
        <div className="flex-1">
          <div className="mb-1 text-[11.5px] font-bold uppercase tracking-wide text-text-secondary">
            Workshop hours
          </div>
          {siteConfig.hours.map((h) => (
            <div key={h.day} className="flex justify-between gap-3 py-0.5 text-sm">
              <span className="text-text-body">{h.day}</span>
              <span className="font-semibold">{h.time}</span>
            </div>
          ))}
        </div>
      </div>

      <MapGraphic />
    </div>
  );
}
