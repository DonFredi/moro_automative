"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/shared/components/ui/dialog";
import { ContactForm } from "@/modules/contact/components/ContactForm";
import { useBookingModal } from "./useBookingModal";

export function BookingModal() {
  const { isOpen, lockedService, closeModal } = useBookingModal();

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && closeModal()}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{lockedService ? `Book ${lockedService}` : "Book an appointment"}</DialogTitle>
          <DialogDescription>
            Fill in your details and we&apos;ll pick it up on WhatsApp.
          </DialogDescription>
        </DialogHeader>
        <ContactForm lockedService={lockedService} onSuccess={closeModal} />
      </DialogContent>
    </Dialog>
  );
}
