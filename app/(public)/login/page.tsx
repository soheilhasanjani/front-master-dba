import React from "react";
import { Metadata } from "next";
import LoginContent from "@/app/(public)/login/login-content";
import { postPanelCustomValueGetWebSiteTitle } from "@/apis/panelCustomValueApi";

export async function generateMetadata(): Promise<Metadata> {
  // fetch data
  // Wait for the promises to resolve
  const [title] = await Promise.all([postPanelCustomValueGetWebSiteTitle()]);

  return {
    title: `ورود | ${title}`,
  };
}

const LoginPage = () => {
  return <LoginContent />;
};

export default LoginPage;
