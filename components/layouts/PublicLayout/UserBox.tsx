"use client";

import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import Link from "next/link";
import React from "react";
import { Grid, LogIn, LogOut, User, UserCheck } from "react-feather";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/core/Popover";
import { useGetAccountGetUserData } from "@/hooks/apis/accountHookApi";
import { setIsLogin } from "@/redux/authSlice";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useQueryClient } from "@tanstack/react-query";

const UserBox = () => {
  const queryClient = useQueryClient();
  const { push } = useRouter();
  const dispatch = useAppDispatch();
  const { isChecked, isLogin } = useAppSelector((state) => state.auth);
  const { data: user } = useGetAccountGetUserData(isChecked);
  //
  const handleLogout = () => {
    dispatch(setIsLogin(false));
    Cookies.remove("TOKEN");
    queryClient.clear();
    push("/");
  };
  //
  if (!isChecked) return <div></div>;
  //
  if (!isLogin)
    return (
      <div className="flex items-center gap-4">
        <Link
          href="/login"
          className="flex items-center gap-1 hover:text-primary"
        >
          <LogIn className="pe-1" />
          ورود
        </Link>
        |
        <Link href="/register" className="hover:text-primary">
          عضویت
        </Link>
      </div>
    );
  //
  return (
    <div className="loggein">
      <Popover placement="bottom-start" typeInteract="click">
        <PopoverTrigger>
          <div className="flex items-center gap-2">
            <User />
            <Link href="/" className="font-14">
              پروفایل من
            </Link>
          </div>
        </PopoverTrigger>
        <PopoverContent className="z-20 rounded-xl border bg-white p-3">
          <ul className="flex flex-col gap-4">
            <li>{user?.FullName}</li>
            <hr className="dropdown-divider" />
            {user?.IsAdmin && (
              <li className="flex items-center gap-2">
                <Grid />
                <Link href="/dashboard">پنل ادمین</Link>
              </li>
            )}
            <li className="flex items-center gap-2">
              <UserCheck />
              <Link href="#">حساب شخصی من</Link>
            </li>
            <hr />
            <li className="flex items-center gap-2">
              <LogOut />
              <button onClick={handleLogout}>خروج</button>
            </li>
          </ul>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default UserBox;
