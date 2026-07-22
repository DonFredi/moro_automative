"use client";

import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";

import { ImageWithSkeleton } from "@/shared/components/shared/ImageWithSkeleton";
import { Dialog, DialogContent, DialogTitle, DialogClose } from "@/shared/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/shared/components/ui/carousel";

export function ServiceGallery({ images, title }: { images: string[]; title: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {images.map((src, index) => (
          <button
            key={src}
            type="button"
            onClick={() => setOpenIndex(index)}
            className="group relative aspect-[4/3] overflow-hidden border border-border text-left"
            aria-label={`View image ${index + 1} of ${title} full size`}
          >
            <ImageWithSkeleton
              src={src}
              alt={`${title} — photo ${index + 1}`}
              fill
              sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
              className="transition-transform duration-500 group-hover:scale-105"
            />
          </button>
        ))}
      </div>

      <Dialog open={openIndex !== null} onOpenChange={(open) => !open && setOpenIndex(null)}>
        <DialogContent
          hideClose
          className="max-h-none w-[calc(100%-1.5rem)] max-w-4xl overflow-visible border-none bg-transparent p-0 shadow-none"
        >
          <DialogTitle className="sr-only">{title} gallery</DialogTitle>

          {openIndex !== null && (
            <div className="relative">
              {/* Close button sits above the image itself, on its own solid
                  background, so it's always visible regardless of what's
                  behind it in the photo. */}
              <div className="mb-3 flex justify-end">
                <DialogClose className="flex h-10 w-10 items-center justify-center border border-border bg-soft-black text-white transition-colors hover:bg-primary">
                  <X className="h-5 w-5" />
                  <span className="sr-only">Close</span>
                </DialogClose>
              </div>

              <Carousel startIndex={openIndex} className="w-full">
                <CarouselContent>
                  {images.map((src, index) => (
                    <CarouselItem key={src}>
                      <div className="relative flex h-[70vh] w-full items-center justify-center bg-soft-black">
                        <Image
                          src={src}
                          alt={`${title} — photo ${index + 1}`}
                          fill
                          sizes="90vw"
                          className="object-contain"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="mt-4 flex justify-center gap-3">
                  <CarouselPrevious className="static translate-y-0" />
                  <CarouselNext className="static translate-y-0" />
                </div>
              </Carousel>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
