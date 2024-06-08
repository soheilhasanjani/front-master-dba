import { cn } from "@/utils/cn";
import React, { FC } from "react";
import { ChevronLeft, Home } from "react-feather";

interface Link {
  id: string;
  label: string;
  onClick?: (id: string) => void;
}

interface BreadcrumbsProps {
  className?: string;
  links: Array<Link>;
  onClickHome: () => void;
  isDisabledLastItem?: boolean;
}

const Breadcrumbs: FC<BreadcrumbsProps> = ({
  links,
  onClickHome,
  isDisabledLastItem = true,
}) => {
  return (
    <div className="flex items-center gap-2 pb-2 pt-2.5 text-xs">
      <Home
        onClick={onClickHome}
        size={18}
        strokeWidth={1.5}
        className="mb-1 cursor-pointer"
      />
      {!!links.length && (
        <ChevronLeft size={18} strokeWidth={1.5} className="mb-1" />
      )}
      {links.map((item, i: number) => {
        //
        const isLastItem = links.length === i + 1;
        //
        return (
          <div
            key={item.id}
            className="flex items-center gap-2"
            onClick={() => {
              if (item.onClick) item.onClick(item.id);
            }}
          >
            <div
              className={cn(
                !(isLastItem && isDisabledLastItem)
                  ? "cursor-pointer"
                  : "pointer-events-none",
              )}
            >
              {item.label}
            </div>
            {!isLastItem && (
              <ChevronLeft size={18} strokeWidth={1.5} className="mb-1" />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Breadcrumbs;
