import { cn } from "@/utils/cn";
import { InputHTMLAttributes, forwardRef } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  isError?: boolean;
}

const Input: React.ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { className, isError, ...props },
  ref,
) => {
  return (
    <input
      ref={ref}
      className={cn(
        "block h-10 w-full rounded border px-2.5 text-xs",
        { "border-red-500": isError },
        className,
      )}
      {...props}
    />
  );
};

export default forwardRef(Input);
