import React from "react";
import RegisterContent from "@/app/(public)/register/register-content";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "عضویت |  Database Administrator ",
};

const RegisterPage = () => {
  return <RegisterContent />;
};

export default RegisterPage;
