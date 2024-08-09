export const dynamic = "force-dynamic";

import React from "react";
import { HOST_ADDRESS } from "@/configs/baseUrl";
import { Metadata } from "next";
import { postPanelCustomValueGetWebSiteTitle } from "@/apis/panelCustomValueApi";
import Content from "@/app/(public)/about-us/content";
import axios from "axios";
import axiosRetry from 'axios-retry';

export async function generateMetadata(): Promise<Metadata> {
  // fetch data
  // Wait for the promises to resolve
  const [title] = await Promise.all([postPanelCustomValueGetWebSiteTitle()]);

  return {
    title: `درباره ما | ${title}`,
  };
}

// Create an Axios instance with a timeout and retry logic
const axiosInstance = axios.create({
  timeout: 50000, // 10 seconds timeout
});

// Apply retry logic to the Axios instance
axiosRetry(axiosInstance, { retries: 3 });

async function getData() {
  try {
    const res = await axiosInstance.post(
      HOST_ADDRESS + "/PanelCustomValue/GetAboutPageAboutUs",
    );
    return res.data;
  } catch (error) {
    console.log(error)
    throw new Error("Failed to fetch data");
  }
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
