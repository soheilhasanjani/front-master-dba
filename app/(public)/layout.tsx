import React, { Suspense } from "react";
import TopNav from "@/components/layouts/PublicLayout/TopNav";
import MainNav from "@/components/layouts/PublicLayout/MainNav";
import Footer from "@/components/layouts/PublicLayout/Footer";

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
      <Suspense fallback={<></>}>
        <Footer />
      </Suspense>
    </>
  );
}
