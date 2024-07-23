"use client";

import { cn } from "@/utils/cn";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const MainLink = () => {
  //
  const pathname = usePathname();
  //
  return (
    <ul className="flex items-center gap-4">
      <li>
        <Link
          href="/about-us"
          className={cn("hover:text-primary", {
            "text-primary": pathname.startsWith("/about-us"),
          })}
        >
          درباره ما
        </Link>
      </li>
      <li>
        <Link
          href="/contact-us"
          className={cn("hover:text-primary", {
            "text-primary": pathname.startsWith("/contact-us"),
          })}
        >
          تماس با ما
        </Link>
      </li>
    </ul>
  );
};

export default MainLink;
