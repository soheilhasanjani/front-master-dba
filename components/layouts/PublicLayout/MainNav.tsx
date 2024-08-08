import React, { Suspense } from "react";
import Link from "next/link";
import LogoSC from "@/components/layouts/PublicLayout/LogoSC";
import Menu from "@/components/layouts/PublicLayout/Menu";
import { ErrorBoundary } from "react-error-boundary";
import Loading from "@/components/shared/loading";

const MainNav = () => {
  return (
    <div className="flex items-center justify-between border-b border-[#e6e6e6] px-3 py-3 xxl:container">
      <Menu />
      <Link href="/" className="block h-[44px] w-[110px]">
        <ErrorBoundary fallback={<div></div>}>
          <Suspense fallback={<Loading />}>
            <LogoSC />
          </Suspense>
        </ErrorBoundary>
      </Link>
    </div>
  );
};

export default MainNav;
