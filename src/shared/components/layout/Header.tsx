"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Badge } from "./Badge";
import { MobileNav } from "./MobileNav";
import { BookAppointmentButton } from "@/shared/components/shared/BookAppointmentButton";
import { siteConfig } from "@/config/site";
import { cn } from "@/shared/lib/utils";

/**
 * The nav/logo/CTA row only. Positioning (fixed/sticky + hide-on-scroll) is
 * handled by the parent <SiteHeader />, which also renders <LocationBar />
 * above this so both move/hide together as one unit.
 */
export function Header() {
  const pathname = usePathname();

  return (
    <header className="border-b border-border bg-bg">
      <div className="section-wrapper flex items-center justify-between py-5">
        <Badge />

        <nav className="hidden lg:block">
          <ul className="flex gap-10">
            {siteConfig.nav.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "text-[13.5px] font-semibold uppercase tracking-wide",
                      isActive ? "nav-link-active" : "nav-link"
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <BookAppointmentButton size="sm" className="hidden sm:inline-flex" />
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
