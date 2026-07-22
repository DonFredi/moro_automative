import Link from "next/link";
import { cn } from "@/shared/lib/utils";
import { siteConfig } from "@/config/site";
import Image from "next/image";

/**
 * Placeholder logomark — a dashed square carrying the brand initial.
 * Reused in both the Header and Footer. Swap the contents here once a
 * real logo file exists; every usage site updates automatically.
 */
export function Badge({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label={siteConfig.name}
      //   className={cn(
      //     "flex h-10 w-10 shrink-0 items-center justify-center border-[1.5px] border-dashed border-primary font-heading text-base text-primary",
      //     className,
      //   )}
    >
      {/* {siteConfig.logoText} */}

      <Image
        src={siteConfig.logo.src}
        width={siteConfig.logo.width}
        height={siteConfig.logo.height}
        alt={siteConfig.logo.alt}
        priority
      />
    </Link>
  );
}
