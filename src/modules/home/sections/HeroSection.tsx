import Image from "next/image";
import { Star } from "lucide-react";

import { BookAppointmentButton } from "@/shared/components/shared/BookAppointmentButton";
import { Button } from "@/shared/components/ui/button";
import { heroContent } from "../content/home-content";

export function HeroSection() {
  return (
    <section className="relative flex min-h-[520px] items-center overflow-hidden md:min-h-[640px]">
      <div className="absolute inset-0">
        <Image
          src={heroContent.image}
          alt={heroContent.imageAlt}
          fill
          sizes="100vw"
          priority
          className="object-cover"
        />
      </div>
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(100deg, rgba(22,33,62,0.85) 0%, rgba(22,33,62,0.60) 40%, rgba(22,33,62,0.22) 68%, rgba(22,33,62,0.06) 100%)",
        }}
      />

      <div className="section-wrapper relative z-10 py-12">
        <div className="max-w-xl text-left">
          <div className="eyebrow mb-4 text-accent">{heroContent.eyebrow}</div>
          <h1 className="mb-5 font-heading text-[38px] leading-[1.08] text-white md:text-[54px]">
            {heroContent.heading[0]}
            <br />
            <span className="text-accent">{heroContent.heading[1]}</span>
          </h1>
          <p className="mb-8 max-w-md text-base text-white/85 md:text-lg">{heroContent.lede}</p>

          <div className="mb-10 flex flex-col gap-4 sm:flex-row">
            <BookAppointmentButton className="w-full sm:w-auto" />
            <Button asChild variant="secondary" className="w-full border-white/55 text-white hover:border-white sm:w-auto">
              <a href="#services">View our work</a>
            </Button>
          </div>

          <div className="flex items-center gap-3.5">
            <span className="flex gap-0.5 text-accent">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5" fill="currentColor" strokeWidth={0} />
              ))}
            </span>
            <span className="text-[13px] text-white/70">{heroContent.trustLabel}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
