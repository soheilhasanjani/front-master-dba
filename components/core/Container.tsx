import React from "react";
import { cn } from "@/utils/cn";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {}

const Container: React.FC<ContainerProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div className={cn("px-3 xxl:container", className)} {...props}>
      {children}
    </div>
  );
};

export default Container;
