import { MapPin } from "lucide-react";
import { siteConfig } from "@/config/site";

export function LocationBar() {
  return (
    <div className="bg-primary py-0.5">
      <div className="section-wrapper flex items-center justify-start gap-1.5">
        <MapPin className="h-3 w-3 shrink-0 text-white" strokeWidth={2} />
        <span className="text-[13px] font-medium leading-relaxed text-white">
          {siteConfig.address.line}
        </span>
      </div>
    </div>
  );
}
