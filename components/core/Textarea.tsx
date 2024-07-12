import { cn } from "@/utils/cn";
import React, { forwardRef, TextareaHTMLAttributes } from "react";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  isError?: boolean;
}

const Textarea: React.ForwardRefRenderFunction<
  HTMLTextAreaElement,
  TextareaProps
> = ({ className, isError, ...props }, ref) => {
  return (
    <textarea
      ref={ref}
      className={cn(
        "block w-full rounded border px-2.5 py-2 text-sm",
        { "border-red-500": isError },
        className,
      )}
      {...props}
    />
  );
};

export default forwardRef(Textarea);
