import { cn } from "@/utils/cn";
import React from "react";

type SectionProps = React.ComponentProps<"div">;

const Section = ({ children, className, ...props }: SectionProps) => {
  return (
    <div className={cn("rounded bg-[#f8f9fa] p-4", className)} {...props}>
      {children}
    </div>
  );
};

export default Section;
