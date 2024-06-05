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
        "block w-full h-10 px-2.5 border rounded text-xs",
        className
      )}
      {...props}
    />
  );
};

export default forwardRef(Input);
