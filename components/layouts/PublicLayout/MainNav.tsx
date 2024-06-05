"use client";

import React, { Suspense } from "react";
import Link from "next/link";
import { FileText, Home, Users } from "react-feather";
import { usePathname } from "next/navigation";
import { cn } from "@/utils/cn";
import Logo from "@/components/layouts/PublicLayout/Logo";

const MainNav = () => {
  //
  const pathname = usePathname();
  //
  return (
    <nav className="border-b border-[#e6e6e6] py-4">
      <div className="container flex items-center">
        <ul className="flex items-center gap-4 flex-grow justify-center">
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
        <Link href="/" className="block w-[110px] h-[53px]">
          <Suspense fallback={<div></div>}>
            <Logo />
          </Suspense>
        </Link>
      </div>
    </nav>
  );
};

export default MainNav;
