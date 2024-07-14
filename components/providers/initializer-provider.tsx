"use client";

import { useEffect } from "react";
import { useAppDispatch } from "@/hooks/reduxHooks";
import Cookies from "js-cookie";
import { setIsLogin } from "@/redux/authSlice";

const InitializerProvider = () => {
  //
  const dispatch = useAppDispatch();
  //
  useEffect(() => {
    const token = Cookies.get("TOKEN");
    if (token) dispatch(setIsLogin(true));
    else dispatch(setIsLogin(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  //
  return null;
};

export default InitializerProvider;
