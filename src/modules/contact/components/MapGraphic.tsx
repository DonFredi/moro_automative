import { siteConfig } from "@/config/site";

/**
 * Static styled map graphic. Isolated as its own component so it can be
 * swapped for a real embedded iframe (e.g. Google Maps) later without
 * touching anything in VisitInfoCard or ContactPage.
 */
export function MapGraphic() {
  return (
    <div className="relative mt-6 aspect-[4/3] overflow-hidden border border-border bg-[#e9e9e6]">
      <iframe
        src={siteConfig.address.googleMapsEmbedUrl}
        className="absolute inset-0 h-full w-full border-0"
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
        title="Location map"
      />
      {/* ) : (
        <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
          <rect width="400" height="300" fill="#eceae6" />
          <circle cx="200" cy="140" r="7" fill="#A8121F" />
          <path
            d="M200,120 c-12,0 -20,8 -20,19 c0,14 20,34 20,34 s20,-20 20,-34 c0,-11 -8,-19 -20,-19z"
            fill="#A8121F"
          />
          <circle cx="200" cy="139" r="6" fill="#fff" />
        </svg>
      )} */}
      {/* <div className="absolute bottom-3 left-3 bg-white/90 px-2.5 py-1.5 text-xs font-bold text-soft-black">
        {siteConfig.address.mapLabel}
      </div> */}
    </div>
  );
}
