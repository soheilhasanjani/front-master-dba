import React, { Suspense } from "react";
import TopNav from "@/components/layouts/PublicLayout/TopNav";
import MainNav from "@/components/layouts/PublicLayout/MainNav";
import FooterSC from "@/components/layouts/PublicLayout/FooterSC";
import { ErrorBoundary } from "react-error-boundary";
import LoadingComponent from "@/components/shared/loading-component";

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
      <ErrorBoundary fallback={<div></div>}>
        <Suspense fallback={<LoadingComponent />}>
          <FooterSC />
        </Suspense>
      </ErrorBoundary>
    </>
  );
}
