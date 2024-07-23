import React from "react";
import SearchBox from "@/components/layouts/PublicLayout/SearchBox";
import UserBox from "@/components/layouts/PublicLayout/UserBox";
import MainLink from "@/components/layouts/PublicLayout/MainLink";

const TopNav = () => {
  return (
    <nav className="px-3 xxl:container">
      <div className="flex flex-wrap items-center justify-between gap-3 pt-3">
        <MainLink />
        <div className="order-1 w-full lg:order-none lg:max-w-lg">
          <SearchBox />
        </div>
        <div className="order-0 leading-[0]">
          <UserBox />
        </div>
      </div>
    </nav>
  );
};

export default TopNav;
