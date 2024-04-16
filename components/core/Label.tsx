import { cn } from "@/utils/cn";
import React, { LabelHTMLAttributes } from "react";

const Label = ({
  className,
  children,
  ...props
}: LabelHTMLAttributes<HTMLLabelElement>) => {
  return (
    <label className={cn("block mb-1", className)} {...props}>
      {children}
    </label>
  );
};

export default Label;
