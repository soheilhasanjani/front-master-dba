"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { FileText, Home, Users } from "react-feather";
import { cn } from "@/utils/cn";
import Link from "next/link";

const Menu = () => {
  //
  const pathname = usePathname();
  //
  return (
    <ul className="flex flex-grow items-center justify-center gap-4">
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
  );
};

export default Menu;
