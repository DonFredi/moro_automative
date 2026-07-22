"use client";

import { useBookingModal } from "@/modules/booking/useBookingModal";
import { Button, type ButtonProps } from "@/shared/components/ui/button";

interface BookAppointmentButtonProps extends ButtonProps {
  /** If set, opens the modal with this service pre-selected and locked. */
  lockedService?: string;
}

export function BookAppointmentButton({
  lockedService,
  children,
  onClick,
  ...props
}: BookAppointmentButtonProps) {
  const { openModal } = useBookingModal();

  return (
    <Button
      type="button"
      onClick={(event) => {
        openModal(lockedService);
        onClick?.(event);
      }}
      {...props}
    >
      {children ?? "Book an appointment"}
    </Button>
  );
}
