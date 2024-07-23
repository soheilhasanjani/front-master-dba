"use client";

import React, { useState } from "react";
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
  const [open, setOpen] = useState(false);
  //
  const list = [
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
      ariaLabel: "The page link that shows the list of articles and articles",
    },
    {
      id: 2,
      icon: Users,
      label: "نویسندگان",
      href: "/authors",
      ariaLabel: "The link to the page that shows the list of authors",
    },
  ];
  //
  return (
    <>
      <Popover
        placement="bottom-start"
        typeInteract="click"
        open={open}
        onOpenChange={setOpen}
      >
        <PopoverTrigger>
          <MenuIcon
            size={36}
            className="md:hidden"
            onClick={() => setOpen(true)}
          />
        </PopoverTrigger>

        <PopoverContent className="z-20 rounded-xl border bg-white p-3">
          <div className="flex flex-col gap-4">
            {list.map((item) => {
              return (
                <div
                  key={item.id}
                  className={cn("hover:text-primary", {
                    "text-primary":
                      item.href === "/"
                        ? pathname === "/"
                        : pathname.startsWith(item.href),
                  })}
                >
                  <Link
                    href={item.href}
                    className="flex min-w-32 items-center gap-2"
                    aria-label={item.ariaLabel}
                    onClick={() => setOpen(false)}
                  >
                    <item.icon size={18} />
                    <span>{item.label}</span>
                  </Link>
                </div>
              );
            })}
          </div>
        </PopoverContent>
      </Popover>

      <ul className="hidden flex-grow items-center gap-4 md:flex md:justify-center">
        {list.map((item) => {
          return (
            <li
              key={item.id}
              className={cn("hover:text-primary", {
                "text-primary":
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href),
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
