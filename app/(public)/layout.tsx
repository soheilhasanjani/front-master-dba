import React from "react";
import TopNav from "@/components/layouts/PublicLayout/TopNav";
import MainNav from "@/components/layouts/PublicLayout/MainNav";
import Footer from "@/components/layouts/PublicLayout/Footer";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <TopNav />
      <MainNav />
      <main>{children}</main>
      <Footer />
    </>
  );
}
