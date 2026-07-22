"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Badge } from "./Badge";
import { MobileNav } from "./MobileNav";
import { BookAppointmentButton } from "@/shared/components/shared/BookAppointmentButton";
import { siteConfig } from "@/config/site";
import { cn } from "@/shared/lib/utils";

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-bg">
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
                      "group relative pb-1.5 text-[13.5px] font-semibold uppercase tracking-wide",
                      isActive ? "text-primary" : "text-soft-black"
                    )}
                  >
                    {item.label}
                    <span
                      className={cn(
                        "absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100",
                        isActive && "scale-x-100"
                      )}
                    />
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
