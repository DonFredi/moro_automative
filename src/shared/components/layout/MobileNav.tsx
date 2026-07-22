"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";

import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/shared/components/ui/sheet";
import { BookAppointmentButton } from "@/shared/components/shared/BookAppointmentButton";
import { siteConfig } from "@/config/site";
import { cn } from "@/shared/lib/utils";
import { socialLinks } from "./Footer";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        className="flex h-10 w-10 items-center justify-center border border-border lg:hidden"
        aria-label="Open menu"
      >
        <Menu className="h-5 w-5" />
      </SheetTrigger>
      <SheetContent side="right" className="flex flex-col gap-4 justify-between pb-2">
        <SheetHeader>
          <SheetTitle className="sr-only">Menu</SheetTitle>
        </SheetHeader>
        <div className="">
          <nav className="flex flex-col gap-1">
            {siteConfig.nav.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "border-b border-border py-4 text-sm font-extrabold uppercase tracking-wide",
                    isActive ? "text-primary" : "text-soft-black",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <BookAppointmentButton className="mt-6 w-full" onClick={() => setOpen(false)} />
        </div>
        <div className="flex flex-col items-center gap-3">
          {socialLinks.length > 0 && (
            <div className="mt-5 flex gap-4">
              {socialLinks.map(({ href, label, Icon }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-[#9a9a9c] transition-colors hover:text-accent"
                >
                  <Icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          )}
          <small className="text-text-secondary text-center mt-auto">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </small>
        </div>
      </SheetContent>
    </Sheet>
  );
}
