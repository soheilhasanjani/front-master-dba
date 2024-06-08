import { cn } from "@/utils/cn";
import { InputHTMLAttributes, forwardRef } from "react";

const Input: React.ForwardRefRenderFunction<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement>
> = ({ className, ...props }, ref) => {
  return (
    <input
      ref={ref}
      className={cn(
        "block h-10 w-full rounded border px-2.5 text-xs",
        className,
      )}
      {...props}
    />
  );
};

export default forwardRef(Input);
