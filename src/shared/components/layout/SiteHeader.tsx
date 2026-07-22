"use client";

import { useEffect, useRef, useState } from "react";

import { LocationBar } from "./LocationBar";
import { Header } from "./Header";
import { cn } from "@/shared/lib/utils";

const REAPPEAR_THRESHOLD_PX = 150;

/**
 * Wraps LocationBar + Header as a single fixed unit that hides while
 * scrolling down (once past its own height) and reappears once the user
 * has scrolled back up by REAPPEAR_THRESHOLD_PX. A spacer with the wrapper's
 * measured height keeps page content from jumping when it goes fixed.
 */
export function SiteHeader() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
  const [hidden, setHidden] = useState(false);

  const lastY = useRef(0);
  const upwardAccum = useRef(0);

  useEffect(() => {
    if (wrapperRef.current) setHeight(wrapperRef.current.offsetHeight);
  }, []);

  useEffect(() => {
    function handleScroll() {
      const y = window.scrollY;
      const diff = y - lastY.current;

      if (y <= 4) {
        // Always show once back at the very top.
        setHidden(false);
        upwardAccum.current = 0;
      } else if (diff > 0) {
        // Scrolling down
        upwardAccum.current = 0;
        if (y > height) setHidden(true);
      } else if (diff < 0) {
        // Scrolling up — accumulate distance before reappearing, so a tiny
        // upward wobble doesn't flash the header back in.
        upwardAccum.current += Math.abs(diff);
        if (upwardAccum.current > REAPPEAR_THRESHOLD_PX) {
          setHidden(false);
        }
      }

      lastY.current = y;
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [height]);

  return (
    <>
      <div style={{ height }} aria-hidden="true" />
      <div
        ref={wrapperRef}
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-transform duration-300 ease-in-out",
          hidden ? "-translate-y-full" : "translate-y-0"
        )}
      >
        <LocationBar />
        <Header />
      </div>
    </>
  );
}
