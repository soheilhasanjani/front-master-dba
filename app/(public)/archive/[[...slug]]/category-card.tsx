import React, { FC } from "react";
import Link from "next/link";
import { FileText } from "react-feather";

interface CategoryCardProps {
  hrefPathname: string;
  name: string;
  latinName: string;
  numberOfChild: number;
}

const CategoryCard: FC<CategoryCardProps> = ({
  hrefPathname,
  name,
  latinName,
  numberOfChild,
}) => {
  return (
    <Link
      className="block h-full"
      href={{
        pathname: hrefPathname,
      }}
      prefetch={false}
    >
      <div className="flex h-full flex-col items-center justify-center gap-4 rounded bg-[#0f70b7] p-8 shadow-[0_5px_10px_0_rgba(0,0,0,0.22)]">
        <h2 className="text-center text-lg font-medium text-white">{name}</h2>
        <h2>{latinName}</h2>
        <span className="flex items-center gap-2 rounded bg-[brown] p-2 text-white">
          {numberOfChild} <FileText />
        </span>
      </div>
    </Link>
  );
};

export default CategoryCard;
