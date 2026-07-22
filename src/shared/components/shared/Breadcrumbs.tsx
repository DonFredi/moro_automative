"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment } from "react";

/**
 * Auto-generated from the current pathname — no per-page hardcoding needed.
 * Pass `labels` to override how a specific segment renders (e.g. a slug
 * should show the service's real title, not the raw slug).
 */
export function Breadcrumbs({ labels = {}, light = false }: { labels?: Record<string, string>; light?: boolean }) {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  const toLabel = (segment: string) =>
    labels[segment] ?? segment.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

  let href = "";

  return (
    <div
      className={`mb-3.5 flex flex-wrap items-center gap-1.5 text-[13px] ${light ? "text-white/65" : "text-text-body"}`}
    >
      <Link href="/" className={light ? "hover:text-white" : "hover:text-soft-black"}>
        Home
      </Link>
      {segments.map((segment, i) => {
        href += `/${segment}`;
        const isLast = i === segments.length - 1;
        return (
          <Fragment key={href}>
            <span aria-hidden="true">{">"}</span>
            {isLast ? (
              <span className={light ? "text-white" : "text-soft-black"}>{toLabel(segment)}</span>
            ) : (
              <Link href={href} className={light ? "hover:text-white" : "hover:text-soft-black"}>
                {toLabel(segment)}
              </Link>
            )}
          </Fragment>
        );
      })}
    </div>
  );
}
