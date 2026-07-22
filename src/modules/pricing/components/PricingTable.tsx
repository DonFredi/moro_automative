import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { seatPricing, pricingLineItems, formatKsh } from "../content/pricing-content";

interface PricingTableProps {
  /** "full" shows everything. "preview" shows the 5 Seater group + first 3 line items, then a link to the full page. */
  variant?: "full" | "preview";
}

export function PricingTable({ variant = "full" }: PricingTableProps) {
  const seatGroups = variant === "preview" ? seatPricing.slice(0, 1) : seatPricing;
  const lineItems = variant === "preview" ? pricingLineItems.slice(0, 3) : pricingLineItems;

  return (
    <div className="border border-border bg-white max-w-4xl mx-auto">
      <div className="grid grid-cols-[1fr_auto] bg-secondary px-6 py-4 sm:px-8">
        <span className="text-xs font-bold uppercase tracking-wide text-white sm:text-[13px]">Item / Service</span>
        <span className="text-xs font-bold uppercase tracking-wide text-white sm:text-[13px]">Price (KSh)</span>
      </div>

      <div>
        {seatGroups.map((group) => (
          <div key={group.label} className="border-t border-dashed border-border">
            <div className="bg-bg px-6 py-3 sm:px-8">
              <span className="text-sm font-bold uppercase tracking-wide text-soft-black">
                {group.label} <span className="font-normal text-text-secondary">(by material)</span>
              </span>
            </div>
            {group.tiers.map((tier) => (
              <div
                key={tier.material}
                className="grid grid-cols-[1fr_auto] items-center gap-4 border-t border-dashed border-border px-6 py-3 sm:px-8 sm:pl-12"
              >
                <span className="text-[14.5px] text-text-body">{tier.material}</span>
                <span className="font-extrabold text-base text-primary">{formatKsh(tier.price)}</span>
              </div>
            ))}
          </div>
        ))}

        {lineItems.map((item) => (
          <div
            key={item.label}
            className="grid grid-cols-[1fr_auto] items-center gap-4 border-t border-dashed border-border px-6 py-3.5 sm:px-8"
          >
            <span className="text-[14.5px] font-medium text-soft-black">{item.label}</span>
            <span className="text-base font-extrabold text-primary">{formatKsh(item.price)}</span>
          </div>
        ))}
      </div>

      {variant === "preview" && (
        <div className="flex items-center justify-between border-t border-dashed border-border bg-bg px-6 py-5 sm:px-8">
          <span className="text-sm text-text-body">See the full price list, every service.</span>
          <Link
            href="/pricing"
            className="inline-flex shrink-0 items-center gap-1.5 text-[13px] font-bold text-primary"
          >
            View full pricing
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      )}
    </div>
  );
}
