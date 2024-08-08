"use client";

import Link from "next/link";
import React from "react";
import isEmpty from "lodash.isempty";
import { useGetAccountGetUserData } from "@/hooks/apis/accountHookApi";
import { usePostPanelMenuGetPanelMenuOnUserRole } from "@/hooks/apis/panelMenuHookApi";
import Image from "next/image";
import { cn } from "@/utils/cn";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  //
  const pathname = usePathname();
  const { data: user } = useGetAccountGetUserData(true);
  const { data: panelMenu } = usePostPanelMenuGetPanelMenuOnUserRole();
  //
  return (
    <div className="fixed start-0 top-0 h-screen w-56 bg-[#f8f9fa] p-2.5">
      <div className="flex items-center gap-2">
        <Image
          className="rounded-full border-2"
          width={50}
          height={50}
          src={
            !isEmpty(user?.ImageUrl)
              ? "http://masterdba.ir:8080" + user.ImageUrl
              : "/images/dashboard-user-profile-placeholder.jpg"
          }
          alt="user-profile"
        />
        <div className="flex flex-col gap-1">
          <div className="text-xs">{user?.FullName}</div>
          <div className="text-xs text-gray-400">{user?.Username}</div>
        </div>
      </div>
      <hr className="my-2.5" />
      <ul>
        {[
          {
            id: 0,
            label: "صفحه اصلی",
            href: "/",
          },
          ...(panelMenu && Array.isArray(panelMenu)
            ? panelMenu.map((item) => ({
                id: item.Id,
                label: item.Name,
                href: item.NavigateUrl,
              }))
            : []),
        ].map((item, i) => (
          <li key={i}>
            <Link
              prefetch={false}
              href={item.href}
              className={cn("block px-2 py-2", {
                "text-primary":
                  (item.href === "/dashboard" && pathname === "/dashboard") ||
                  (item.href !== "/dashboard" &&
                    pathname.startsWith(item.href)),
                "!text-[#414141]": item.href === "/",
              })}
            >
              <span className="ms-0.5 text-xs">{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
