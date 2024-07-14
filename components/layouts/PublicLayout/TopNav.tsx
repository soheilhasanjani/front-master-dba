import React from "react";
import Link from "next/link";
import SearchBox from "@/components/layouts/PublicLayout/SearchBox";
import UserBox from "@/components/layouts/PublicLayout/UserBox";

const TopNav = () => {
  return (
    <div className="px-3 xxl:container">
      <nav className="py-2">
        <div className="flex flex-wrap items-center justify-between gap-6 py-4">
          <ul className="flex items-center gap-4">
            <li>
              <Link href="/about-us" className="hover:text-primary">
                درباره ما
              </Link>
            </li>
            <li>
              <Link href="/contact-us" className="hover:text-primary">
                تماس با ما
              </Link>
            </li>
          </ul>
          <div className="order-1 w-full lg:order-none lg:max-w-lg">
            <SearchBox />
          </div>
          <div className="order-0">
            <UserBox />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default TopNav;
