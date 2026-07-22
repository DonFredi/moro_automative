import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { ImageWithSkeleton } from "@/shared/components/shared/ImageWithSkeleton";
import type { Service } from "../content/services-content";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group relative block overflow-hidden border border-border bg-white transition-all hover:-translate-y-1 hover:border-accent"
    >
      <div className="relative aspect-4/3">
        <ImageWithSkeleton
          src={service.cardImage}
          alt={service.title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
        />
      </div>
      <div className="p-6">
        <h3 className="mb-2 text-lg font-bold">{service.title}</h3>
        <p className="mb-4 text-[14.5px] text-text-body">{service.shortDescription}</p>
        <span className="inline-flex items-center gap-1.5 text-[13px] font-bold text-primary">
          Learn more
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
        </span>
      </div>

      {/* corner-mesh hover accent: charcoal -> primary */}
      <div className="corner-mesh corner-mesh--br corner-mesh--base" />
      <div className="corner-mesh corner-mesh--br corner-mesh--hover" />
    </Link>
  );
}
