import React from "react";
import { Metadata } from "next";
import ForgetPasswordContent from "@/app/(public)/forget-password/[mobile]/forget-password-content";

export const metadata: Metadata = {
  title: "فراموشی رمز |Database Administrator",
};

const ForgetPasswordPage = ({ params }: { params: { mobile: string } }) => {
  return <ForgetPasswordContent mobile={params.mobile} />;
};

export default ForgetPasswordPage;
