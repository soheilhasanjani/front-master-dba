import { cn } from "@/utils/cn";
import { InputHTMLAttributes, forwardRef } from "react";

interface InputFileWithPreviewProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  isError?: boolean;
}

const InputFileWithPreview: React.ForwardRefRenderFunction<
  HTMLInputElement,
  InputFileWithPreviewProps
> = ({ className, isError, ...props }, ref) => {
  return (
    <div className="flex items-center gap-2">
      <input
        ref={ref}
        type="file"
        className={cn(
          "block h-10 w-full rounded border px-2.5 text-xs",
          { "border-red-500": isError },
          className,
        )}
        {...props}
      />
    </div>
  );
};

export default forwardRef(InputFileWithPreview);
