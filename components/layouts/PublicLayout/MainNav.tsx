import React, { Suspense } from "react";
import Link from "next/link";
import LogoSC from "@/components/layouts/PublicLayout/LogoSC";
import Menu from "@/components/layouts/PublicLayout/Menu";

const MainNav = () => {
  return (
    <div className="flex items-center justify-between border-b border-[#e6e6e6] px-3 py-3 xxl:container">
      <Menu />
      <Link href="/" className="block h-[44px] w-[110px]">
        <Suspense fallback={<></>}>
          <LogoSC />
        </Suspense>
      </Link>
    </div>
  );
};

export default MainNav;
