import { ReactNode } from "react";
import { cn } from "@/shared/lib/utils";

export function SectionWrapper({
  children,
  className,
  as: Tag = "section",
}: {
  children: ReactNode;
  className?: string;
  as?: "section" | "div";
}) {
  return <Tag className={cn("section-wrapper", className)}>{children}</Tag>;
}
