import { cn } from "@/utils/cn";
import React from "react";

type SectionProps = React.ComponentProps<"div">;

const Section = ({ children, className, ...props }: SectionProps) => {
  return (
    <div className={cn("bg-[#f8f9fa] p-4 rounded", className)} {...props}>
      {children}
    </div>
  );
};

export default Section;
