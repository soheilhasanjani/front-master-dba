import React from "react";
import TopNav from "@/components/layouts/PublicLayout/TopNav";
import MainNav from "@/components/layouts/PublicLayout/MainNav";
import FooterServerComponent from "@/components/layouts/PublicLayout/FooterServerComponent";

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <TopNav />
      <MainNav />
      <main>{children}</main>
      <FooterServerComponent />
    </>
  );
}
