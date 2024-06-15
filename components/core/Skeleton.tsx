import { cn } from "@/utils/cn";
import { ComponentProps, FC } from "react";

const Skeleton: FC<ComponentProps<"div">> = ({ className, ...props }) => {
  return (
    <div
      className={cn("animate-pulse rounded bg-[#f4f4f5]", className)}
      {...props}
    />
  );
};

export default Skeleton;
