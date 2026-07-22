"use client";

import { ReactNode } from "react";
import { BookingModalProvider } from "@/modules/booking/BookingModalContext";
import { BookingModal } from "@/modules/booking/BookingModal";

export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <BookingModalProvider>
      {children}
      <BookingModal />
    </BookingModalProvider>
  );
}
