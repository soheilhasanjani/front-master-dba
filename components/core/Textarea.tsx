import { cn } from "@/utils/cn";
import React, { forwardRef, TextareaHTMLAttributes } from "react";

const Textarea: React.ForwardRefRenderFunction<
  HTMLTextAreaElement,
  TextareaHTMLAttributes<HTMLTextAreaElement>
> = ({ className, ...props }, ref) => {
  return (
    <textarea
      ref={ref}
      className={cn(
        "block w-full rounded border px-2.5 py-2 text-sm",
        className,
      )}
      {...props}
    />
  );
};

export default forwardRef(Textarea);
