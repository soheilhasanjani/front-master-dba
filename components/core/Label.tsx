import { cn } from "@/utils/cn";
import React, { LabelHTMLAttributes } from "react";

const Label = ({
  className,
  children,
  ...props
}: LabelHTMLAttributes<HTMLLabelElement>) => {
  return (
    <label
      className={cn("mb-1 block whitespace-nowrap text-xs", className)}
      {...props}
    >
      {children}
    </label>
  );
};

export default Label;
