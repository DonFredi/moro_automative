"use client";

import { createContext, useCallback, useMemo, useState, type ReactNode } from "react";

export interface BookingModalContextValue {
  isOpen: boolean;
  lockedService?: string;
  openModal: (lockedService?: string) => void;
  closeModal: () => void;
}

export const BookingModalContext = createContext<BookingModalContextValue | null>(null);

export function BookingModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [lockedService, setLockedService] = useState<string | undefined>(undefined);

  const openModal = useCallback((service?: string) => {
    setLockedService(service);
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => setIsOpen(false), []);

  const value = useMemo(
    () => ({ isOpen, lockedService, openModal, closeModal }),
    [isOpen, lockedService, openModal, closeModal]
  );

  return <BookingModalContext.Provider value={value}>{children}</BookingModalContext.Provider>;
}
