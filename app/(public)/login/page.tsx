import React from "react";
import { Metadata } from "next";
import LoginContent from "@/app/(public)/login/login-content";

export const metadata: Metadata = {
  title: "ورود |Database Administrator",
};

const LoginPage = () => {
  return <LoginContent />;
};

export default LoginPage;
