"use client";

import Link from "next/link";
import React from "react";
import isEmpty from "lodash.isempty";
import { useGetAccountGetUserData } from "@/hooks/apis/accountHookApi";
import { usePostPanelMenuGetPanelMenuOnUserRole } from "@/hooks/apis/panelMenuHookApi";
import Image from "next/image";

const Sidebar = () => {
  //
  const { data: user } = useGetAccountGetUserData();
  const { data: panelMenu } = usePostPanelMenuGetPanelMenuOnUserRole();
  //
  return (
    <div className="bg-[#f8f9fa] w-56 fixed top-0 start-0 h-screen p-2.5">
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
          <div className="text-gray-400 text-xs">{user?.Username}</div>
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
            <Link href={item.href} className="px-2 py-2 block">
              <span className="ms-0.5 text-xs">{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
