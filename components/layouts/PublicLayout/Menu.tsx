"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { FileText, Home, Users, Menu as MenuIcon } from "react-feather";
import { cn } from "@/utils/cn";
import Link from "next/link";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/core/Popover";

const Menu = () => {
  //
  const pathname = usePathname();
  //
  return (
    <>
      <Popover placement="bottom-start" typeInteract="click">
        <PopoverTrigger>
          <MenuIcon size={36} className="md:hidden" />
        </PopoverTrigger>
        <PopoverContent className="z-20 p-3 bg-white border rounded-xl">
          <div className="flex flex-col gap-4">تست نمونه</div>
        </PopoverContent>
      </Popover>

      <ul className="items-center flex-grow hidden gap-4 md:flex md:justify-center">
        {[
          {
            id: 0,
            icon: Home,
            label: "صفحه اصلی",
            href: "/",
            ariaLabel: "Website homepage link",
          },
          {
            id: 1,
            icon: FileText,
            label: "مقالات",
            href: "/archive",
            ariaLabel:
              "The page link that shows the list of articles and articles",
          },
          {
            id: 2,
            icon: Users,
            label: "نویسندگان",
            href: "/authors",
            ariaLabel: "The link to the page that shows the list of authors",
          },
        ].map((item) => {
          return (
            <li
              key={item.id}
              className={cn("hover:text-primary", {
                "text-primary": item.href === pathname,
              })}
            >
              <Link
                href={item.href}
                className="flex items-center gap-1"
                aria-label={item.ariaLabel}
              >
                <item.icon />
                <span>{item.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Menu;
