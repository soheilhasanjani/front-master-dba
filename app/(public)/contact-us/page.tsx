import React from "react";
import { Metadata } from "next";
import ContactUsContent from "@/app/(public)/contact-us/contact-us-content";

export const metadata: Metadata = {
  title: "تماس با ما |  Database Administrator",
};

const ContactUsPage = () => {
  return <ContactUsContent />;
};

export default ContactUsPage;
