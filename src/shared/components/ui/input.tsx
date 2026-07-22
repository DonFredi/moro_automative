import * as React from "react";

import { cn } from "@/shared/lib/utils";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      ref={ref}
      className={cn(
        "w-full border-0 border-b-[1.5px] border-border bg-transparent px-0.5 py-2 text-[15px] text-soft-black outline-none transition-colors placeholder:text-text-secondary focus:border-primary disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    />
  );
});
Input.displayName = "Input";

export { Input };
