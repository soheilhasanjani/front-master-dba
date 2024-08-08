"use client";

import Link from "next/link";
import React, { FC } from "react";
import { Mail, Phone } from "react-feather";

interface FooterProps {
  data: any;
}

const Footer: FC<FooterProps> = ({ data }) => {
  return (
    <footer className="border-t border-[#e6e6e6] pt-2">
      <div className="px-3 xxl:container">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-6">
            <section className="mb-5">
              <header className="mb-5 text-base leading-5 text-primary">
                درباره دی بی ای
              </header>
              <p>{data?.FooterAboutUsText}</p>
            </section>
          </div>
          <div className="col-span-12 sm:col-span-6 lg:col-span-2">
            <section className="mb-5">
              <header className="mb-5 text-base leading-5 text-primary">
                بخش های سایت
              </header>
              <ul>
                {[
                  { id: 0, label: "قوانین و مقررات", href: "" },
                  { id: 1, label: "نویسندگان", href: "/authors" },
                  { id: 2, label: "درباره ما", href: "/about-us" },
                  { id: 3, label: "همکاری با ما", href: "/contact-us" },
                ].map((item) => (
                  <li key={item.id}>
                    <Link
                      prefetch={false}
                      href={item.href}
                      className="block py-0.5 ps-3.5 text-sm leading-6 transition-[padding] hover:ps-4"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          </div>
          <div className="col-span-12 sm:col-span-6 lg:col-span-4">
            <section className="mb-5">
              <header className="mb-5 text-base leading-5 text-primary">
                ارتباط با ما
              </header>
              <p className="mb-4">
                شما میتوانید با استفاده از یکی از راه‌های زیر با ما ارتباط
                برقرار کنید
              </p>
              <ul>
                <li className="flex items-center gap-2">
                  <Mail className="text-primary" />
                  <span>{data?.Fax}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="text-primary" />
                  <span>{data?.Tel}</span>
                </li>
              </ul>
            </section>
          </div>
        </div>
        <p className="py-3 text-center text-xs">
          کليه حقوق محصولات و محتوای اين سایت متعلق به مستر دی بی ای می باشد و
          هر گونه کپی برداری از محتوا و محصولات سایت غیر مجاز و بدون رضایت ماست
        </p>
      </div>
    </footer>
  );
};

export default Footer;
