import { cn } from "@/shared/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  light?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "mx-auto mb-11 max-w-xl",
        align === "center" ? "text-center" : "text-left mx-0",
        className
      )}
    >
      {eyebrow && (
        <div className={cn("eyebrow mb-2", align === "center" && "justify-center", light && "text-accent")}>
          {eyebrow}
        </div>
      )}
      <h2 className={cn("font-heading text-[34px] leading-tight", light ? "text-white" : "text-soft-black")}>
        {title}
      </h2>
      {description && (
        <p className={cn("mt-2 text-[15px]", light ? "text-white/70" : "text-text-body")}>
          {description}
        </p>
      )}
    </div>
  );
}
