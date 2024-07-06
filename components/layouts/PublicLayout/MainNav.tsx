import React from "react";
import Link from "next/link";
import LogoSC from "@/components/layouts/PublicLayout/LogoSC";
import Menu from "@/components/layouts/PublicLayout/Menu";

const MainNav = () => {
  return (
    <nav className="border-b border-[#e6e6e6] py-4">
      <div className="container flex items-center">
        <Menu />
        <Link href="/" className="block h-[53px] w-[110px]">
          <LogoSC />
        </Link>
      </div>
    </nav>
  );
};

export default MainNav;
