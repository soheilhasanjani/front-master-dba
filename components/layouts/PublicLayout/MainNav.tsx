"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FileText, Home, Users } from "react-feather";
import { usePostPanelCustomValueGetLogImage } from "@/hooks/apis/panelCustomValueHookApi";
import staticFileUrl from "@/utils/staticFileUrl";
import { usePathname } from "next/navigation";
import { cn } from "@/utils/cn";

const MainNav = () => {
  //
  const pathname = usePathname();
  //
  const { data: logoSrc } = usePostPanelCustomValueGetLogImage();
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
            },
            {
              id: 1,
              icon: FileText,
              label: "مقالات",
              href: "/archive",
            },
            {
              id: 2,
              icon: Users,
              label: "نویسندگان",
              href: "/authors",
            },
          ].map((item) => {
            return (
              <li
                key={item.id}
                className={cn("hover:text-primary", {
                  "text-primary": item.href === pathname,
                })}
              >
                <Link href={item.href} className="flex items-center gap-1">
                  <item.icon />
                  <span>{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
        <Link href="/" className="block w-[110px] h-[53px]">
          {logoSrc && (
            <Image
              width={110}
              height={53}
              src={staticFileUrl(logoSrc)}
              alt="logo"
            />
          )}
        </Link>
      </div>
    </nav>
  );
};

export default MainNav;
