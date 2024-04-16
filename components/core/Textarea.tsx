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
        "block w-full px-2.5 border rounded text-sm py-2",
        className
      )}
      {...props}
    />
  );
};

export default forwardRef(Textarea);
