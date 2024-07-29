import React from "react";
import Sidebar from "@/components/layouts/DashboardLayout/Sidebar";
import { Metadata } from "next";
import { postPanelCustomValueGetWebSiteTitle } from "@/apis/panelCustomValueApi";

export async function generateMetadata(): Promise<Metadata> {
  // fetch data
  // Wait for the promises to resolve
  const [title] = await Promise.all([postPanelCustomValueGetWebSiteTitle()]);

  return {
    title: `داشبورد | ${title}`,
  };
}

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Sidebar />
      <main className="ps-56">{children}</main>
    </>
  );
};

export default DashboardLayout;
