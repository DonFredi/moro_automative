"use client";

import { useState } from "react";
import Image, { type ImageProps } from "next/image";

import { cn } from "@/shared/lib/utils";
import { Skeleton } from "@/shared/components/ui/skeleton";

/**
 * Wraps next/image with a Skeleton shown until the image finishes loading.
 * Use `priority` for above-the-fold hero images so Next preloads them as LCP.
 */
export function ImageWithSkeleton({
  className,
  wrapperClassName,
  alt,
  ...props
}: ImageProps & { wrapperClassName?: string }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={cn("relative h-full w-full overflow-hidden", wrapperClassName)}>
      {!loaded && <Skeleton className="absolute inset-0" />}
      <Image
        alt={alt}
        className={cn(
          "h-full w-full object-cover transition-opacity duration-500",
          loaded ? "opacity-100" : "opacity-0",
          className
        )}
        onLoad={() => setLoaded(true)}
        {...props}
      />
    </div>
  );
}
