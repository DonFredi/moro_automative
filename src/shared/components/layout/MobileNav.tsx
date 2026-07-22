"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";

import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/shared/components/ui/sheet";
import { BookAppointmentButton } from "@/shared/components/shared/BookAppointmentButton";
import { siteConfig } from "@/config/site";
import { cn } from "@/shared/lib/utils";

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
      <SheetContent side="right">
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <nav className="mt-6 flex flex-col gap-1">
          {siteConfig.nav.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "border-b border-border py-4 text-sm font-semibold uppercase tracking-wide",
                  isActive ? "text-primary" : "text-soft-black"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <BookAppointmentButton className="mt-6 w-full" onClick={() => setOpen(false)} />
      </SheetContent>
    </Sheet>
  );
}
