import React from "react";
import RegisterContent from "@/app/(public)/register/register-content";
import { Metadata } from "next";
import { postPanelCustomValueGetWebSiteTitle } from "@/apis/panelCustomValueApi";

export async function generateMetadata(): Promise<Metadata> {
  // fetch data
  // Wait for the promises to resolve
  const [title] = await Promise.all([postPanelCustomValueGetWebSiteTitle()]);

  return {
    title: `عضویت | ${title}`,
  };
}

const RegisterPage = () => {
  return <RegisterContent />;
};

export default RegisterPage;
