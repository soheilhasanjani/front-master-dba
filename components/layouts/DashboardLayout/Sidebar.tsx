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
      <div className="flex items-center flex-col">
        {!isEmpty(user?.ImageUrl) ? (
          <Image
            className="rounded-full mb-2"
            width={200}
            height={200}
            src={"http://masterdba.ir:8080" + user.ImageUrl}
            alt="user-profile"
          />
        ) : (
          <Image
            className="rounded-full mb-2"
            width={200}
            height={200}
            src={"/images/dashboard-user-profile-placeholder.jpg"}
            alt="user-profile"
          />
        )}
        <div className="text-center">{user?.FullName}</div>
      </div>
      <hr className="my-6" />
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
            <Link href={item.href} className="px-4 py-2 block">
              <span className="ms-2">{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
