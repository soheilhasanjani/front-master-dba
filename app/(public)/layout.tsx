import React from "react";
import TopNav from "@/components/layouts/PublicLayout/TopNav";
import MainNav from "@/components/layouts/PublicLayout/MainNav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <TopNav />
      <MainNav />
      <main>{children}</main>
    </>
  );
}
