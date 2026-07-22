"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight } from "lucide-react";

import { Button } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";
import { Textarea } from "@/shared/components/ui/textarea";
import { Label } from "@/shared/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/components/ui/select";
import { inquirySchema, type InquiryFormValues } from "../schemas/inquiry.schema";
import { buildWhatsAppUrl } from "../lib/build-whatsapp-message";
import { serviceOptions } from "@/modules/services/content/services-content";
import { cn } from "@/shared/lib/utils";

interface ContactFormProps {
  /** When set, the service field is locked to this value (used by the booking modal from a service detail page). */
  lockedService?: string;
  onSuccess?: () => void;
  className?: string;
}

export function ContactForm({ lockedService, onSuccess, className }: ContactFormProps) {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<InquiryFormValues>({
    resolver: zodResolver(inquirySchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      service: lockedService ?? "",
      vision: "",
    },
  });

  const service = watch("service");

  const onSubmit = (values: InquiryFormValues) => {
    const url = buildWhatsAppUrl(values);
    window.open(url, "_blank", "noopener,noreferrer");
    onSuccess?.();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={cn("space-y-5", className)} noValidate>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="fullName">Full name</Label>
          <Input id="fullName" placeholder="John Doe" {...register("fullName")} />
          {errors.fullName && <p className="text-xs text-primary">{errors.fullName.message}</p>}
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="email">Email address (optional)</Label>
          <Input id="email" type="email" placeholder="john@example.com" {...register("email")} />
          {errors.email && <p className="text-xs text-primary">{errors.email.message}</p>}
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="phone">Phone number</Label>
          <Input id="phone" type="tel" placeholder="+254 700 000 000" {...register("phone")} />
          {errors.phone && <p className="text-xs text-primary">{errors.phone.message}</p>}
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="service">Desired service</Label>
          <Select
            value={service}
            onValueChange={(value) => setValue("service", value, { shouldValidate: true })}
            disabled={Boolean(lockedService)}
          >
            <SelectTrigger id="service">
              <SelectValue placeholder="Select a service" />
            </SelectTrigger>
            <SelectContent>
              {serviceOptions.map((option) => (
                <SelectItem key={option.slug} value={option.value}>
                  {option.value}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.service && <p className="text-xs text-primary">{errors.service.message}</p>}
        </div>

        <div className="flex flex-col gap-2 sm:col-span-2">
          <Label htmlFor="vision">Your vision</Label>
          <Textarea
            id="vision"
            placeholder="Describe your project details, material preference, and vehicle model..."
            {...register("vision")}
          />
          {errors.vision && <p className="text-xs text-primary">{errors.vision.message}</p>}
        </div>
      </div>

      <hr className="stitch-divider" />

      <Button type="submit" disabled={isSubmitting} className="uppercase tracking-wide">
        {isSubmitting ? "Preparing..." : "Send inquiry"}
        <ArrowRight className="h-4 w-4" />
      </Button>
      <p className="text-xs text-text-secondary">
        You&apos;ll be redirected to WhatsApp with your details pre-filled — just hit send.
      </p>
    </form>
  );
}
