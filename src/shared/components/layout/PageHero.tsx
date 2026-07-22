import Image from "next/image";
import { Breadcrumbs } from "@/shared/components/shared/Breadcrumbs";

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  breadcrumbLabels,
}: {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  breadcrumbLabels?: Record<string, string>;
}) {
  return (
    <section className="relative flex min-h-[320px] items-center overflow-hidden md:min-h-[380px]">
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
      </div>
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(100deg, rgba(22,33,62,0.85) 0%, rgba(22,33,62,0.60) 45%, rgba(22,33,62,0.25) 75%, rgba(22,33,62,0.08) 100%)",
        }}
      />
      <div className="section-wrapper relative z-10 py-12">
        <Breadcrumbs labels={breadcrumbLabels} light />
        <div className="eyebrow mb-2.5 text-accent">{eyebrow}</div>
        <h1 className="mb-3.5 font-heading text-[32px] leading-tight text-white md:text-[46px]">
          {title}
        </h1>
        <p className="max-w-lg text-base text-white/85">{description}</p>
      </div>
    </section>
  );
}
