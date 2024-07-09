import React from "react";
import { cn } from "@/utils/cn";

interface GridProps extends React.HTMLAttributes<HTMLDivElement> {}

const Grid: React.FC<GridProps> = ({ children, className, ...props }) => {
  return (
    <div className={cn("grid grid-cols-12", className)} {...props}>
      {children}
    </div>
  );
};

export default Grid;
