import React from "react";
import Link from "next/link";
import SearchBox from "@/components/layouts/PublicLayout/SearchBox";
import { Grid, LogIn, LogOut, User, UserCheck } from "react-feather";

const TopNav = () => {
  return (
    <div className="container">
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
            {false ? (
              <div className="loggein">
                <span className="dropdown" style={{ display: "inline-block" }}>
                  <a
                    className="nav-link dropdown-toggle"
                    id="navbarScrollingDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {" "}
                    <User />
                  </a>
                  <ul
                    className="p-2 dropdown-menu"
                    aria-labelledby="navbarScrollingDropdown"
                  >
                    <li className="pb-1 text-center d-block">
                      {"user.FullName"}
                    </li>
                    <li className="pb-1 d-block">
                      <hr className="dropdown-divider" />
                    </li>
                    {10 > 0 ? (
                      <li className="pb-1 d-block">
                        <Grid className="pe-1" />
                        <Link
                          href="/dashboard"
                          className="dropdown-item d-inline"
                          // activeClassName="main-color"
                        >
                          {" "}
                          پنل ادمین{" "}
                        </Link>
                      </li>
                    ) : null}
                    <li className="pb-1 d-block">
                      <UserCheck className="pe-1" />
                      <Link
                        href="/userProfile"
                        className="dropdown-item d-inline"
                      >
                        حساب شخصی من
                      </Link>
                    </li>
                    <li className="pb-1 d-block">
                      <hr className="dropdown-divider" />
                    </li>
                    <li className="d-block">
                      <LogOut className="pe-1" />
                      <Link href="/logout" className="dropdown-item d-inline">
                        خروج
                      </Link>
                    </li>
                  </ul>
                </span>
                <Link href="/" className="font-14">
                  پروفایل من
                </Link>
              </div>
            ) : (
              <div className="flex items-center gap-4">
                <Link
                  href="/login"
                  className="flex items-center gap-1 hover:text-primary"
                >
                  <LogIn className="pe-1" />
                  ورود
                </Link>
                |
                <Link href="/register" className="hover:text-primary">
                  عضویت
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default TopNav;
