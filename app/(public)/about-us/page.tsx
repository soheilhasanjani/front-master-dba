export const dynamic = "force-dynamic";

import React from "react";
import { HOST_ADDRESS } from "@/configs/baseUrl";
import { Metadata } from "next";
import { postPanelCustomValueGetWebSiteTitle } from "@/apis/panelCustomValueApi";
import Content from "@/app/(public)/about-us/content";

export async function generateMetadata(): Promise<Metadata> {
  // fetch data
  // Wait for the promises to resolve
  const [title] = await Promise.all([postPanelCustomValueGetWebSiteTitle()]);

  return {
    title: `درباره ما | ${title}`,
  };
}

async function getData() {
  const res = await fetch(
    HOST_ADDRESS + "/PanelCustomValue/GetAboutPageAboutUs",
    {
      method: "POST",
      cache: "no-store",
    },
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const AboutUsPage = async () => {
  //
  const data = await getData();
  //
  return (
    <div className="min-h-[60svh] px-3 py-4 xxl:container">
      <Content data={data} />
    </div>
  );
};

export default AboutUsPage;
