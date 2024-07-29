import React from "react";
import { Metadata } from "next";
import ContactUsContent from "@/app/(public)/contact-us/contact-us-content";
import { postPanelCustomValueGetWebSiteTitle } from "@/apis/panelCustomValueApi";

export async function generateMetadata(): Promise<Metadata> {
  // fetch data
  // Wait for the promises to resolve
  const [title] = await Promise.all([postPanelCustomValueGetWebSiteTitle()]);

  return {
    title: `تماس با ما | ${title}`,
  };
}

const ContactUsPage = () => {
  return <ContactUsContent />;
};

export default ContactUsPage;
