import React from "react";
import { Metadata } from "next";
import ForgetPasswordContent from "@/app/(public)/forget-password/[mobile]/forget-password-content";
import { postPanelCustomValueGetWebSiteTitle } from "@/apis/panelCustomValueApi";

export async function generateMetadata(): Promise<Metadata> {
  // fetch data
  // Wait for the promises to resolve
  const [title] = await Promise.all([postPanelCustomValueGetWebSiteTitle()]);

  return {
    title: `فراموشی رمز | ${title}`,
  };
}

const ForgetPasswordPage = ({ params }: { params: { mobile: string } }) => {
  return <ForgetPasswordContent mobile={params.mobile} />;
};

export default ForgetPasswordPage;
