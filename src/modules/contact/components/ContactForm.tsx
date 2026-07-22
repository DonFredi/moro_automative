"use client";

import { useForm } from "react-hook-form";
import { ArrowRight, AlertCircle } from "lucide-react";

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

const errorInputClass = "border-primary focus:border-primary";

export function ContactForm({ lockedService, onSuccess, className }: ContactFormProps) {
  const {
    register,
    handleSubmit,
    setValue,
    setError,
    clearErrors,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<InquiryFormValues>({
    mode: "onSubmit",
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      service: lockedService ?? "",
      vision: "",
    },
  });

  const service = watch("service");

  // Validated manually with zod's safeParse rather than a resolver package —
  // this keeps full control over error display and avoids any resolver/zod
  // version-compatibility issues silently breaking submission.
  const onSubmit = (data: InquiryFormValues) => {
    clearErrors();
    const result = inquirySchema.safeParse(data);

    if (!result.success) {
      result.error.issues.forEach((issue) => {
        const field = issue.path[0] as keyof InquiryFormValues;
        setError(field, { type: "manual", message: issue.message });
      });
      return;
    }

    try {
      const url = buildWhatsAppUrl(result.data);
      window.open(url, "_blank", "noopener,noreferrer");
      onSuccess?.();
    } catch {
      setError("root", {
        type: "manual",
        message: "Something went wrong preparing your inquiry. Please try again.",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={cn("space-y-5", className)} noValidate>
      {errors.root && (
        <div className="flex items-start gap-2 border border-primary bg-primary/5 p-3 text-sm text-primary">
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
          <span>{errors.root.message}</span>
        </div>
      )}

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="fullName">Full name</Label>
          <Input
            id="fullName"
            placeholder="John Doe"
            aria-invalid={Boolean(errors.fullName)}
            className={cn(errors.fullName && errorInputClass)}
            {...register("fullName")}
          />
          {errors.fullName && (
            <p className="flex items-center gap-1 text-xs text-primary">
              <AlertCircle className="h-3 w-3 shrink-0" />
              {errors.fullName.message}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="email">Email address (optional)</Label>
          <Input
            id="email"
            type="email"
            placeholder="john@example.com"
            aria-invalid={Boolean(errors.email)}
            className={cn(errors.email && errorInputClass)}
            {...register("email")}
          />
          {errors.email && (
            <p className="flex items-center gap-1 text-xs text-primary">
              <AlertCircle className="h-3 w-3 shrink-0" />
              {errors.email.message}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="phone">Phone number</Label>
          <Input
            id="phone"
            type="tel"
            placeholder="+254 700 000 000"
            aria-invalid={Boolean(errors.phone)}
            className={cn(errors.phone && errorInputClass)}
            {...register("phone")}
          />
          {errors.phone && (
            <p className="flex items-center gap-1 text-xs text-primary">
              <AlertCircle className="h-3 w-3 shrink-0" />
              {errors.phone.message}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="service">Desired service</Label>
          <Select
            value={service}
            onValueChange={(value) => setValue("service", value)}
            disabled={Boolean(lockedService)}
          >
            <SelectTrigger id="service" className={cn(errors.service && errorInputClass)}>
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
          {errors.service && (
            <p className="flex items-center gap-1 text-xs text-primary">
              <AlertCircle className="h-3 w-3 shrink-0" />
              {errors.service.message}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-2 sm:col-span-2">
          <Label htmlFor="vision">Your vision</Label>
          <Textarea
            id="vision"
            placeholder="Describe your project details, material preference, and vehicle model..."
            aria-invalid={Boolean(errors.vision)}
            className={cn(errors.vision && errorInputClass)}
            {...register("vision")}
          />
          {errors.vision && (
            <p className="flex items-center gap-1 text-xs text-primary">
              <AlertCircle className="h-3 w-3 shrink-0" />
              {errors.vision.message}
            </p>
          )}
        </div>
      </div>

      <hr className="stitch-divider" />

      <Button type="submit" disabled={isSubmitting} className="uppercase tracking-wide">
        Send inquiry
        <ArrowRight className="h-4 w-4" />
      </Button>
      <p className="text-xs text-text-secondary">
        You&apos;ll be redirected to WhatsApp with your details pre-filled — just hit send.
      </p>
    </form>
  );
}
