"use client";

import { usePostPanelCustomValueGetFooterContent } from "@/hooks/apis/panelCustomValueHookApi";
import Link from "next/link";
import React from "react";
import { Mail, Phone } from "react-feather";

const Footer = () => {
  //
  const { data } = usePostPanelCustomValueGetFooterContent();
  //
  return (
    <footer className="border-t border-[#e6e6e6] pt-2">
      <div className="container">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 sm:col-span-6 md:col-span-6">
            <section className="mb-5">
              <header className="mb-5 text-primary text-base leading-5">
                درباره دی بی ای
              </header>
              <p>{data?.FooterAboutUsText}</p>
            </section>
          </div>
          <div className="col-span-12 sm:col-span-6 md:col-span-3">
            <section className="mb-5">
              <header className="mb-5 text-primary text-base leading-5">
                بخش های سایت
              </header>
              <ul>
                {[
                  { id: 0, label: "قوانین و مقررات", href: "" },
                  { id: 1, label: "نویسندگان", href: "/authors" },
                  { id: 2, label: "درباره ما", href: "/aboutUs" },
                  { id: 3, label: "همکاری با ما", href: "/contactus" },
                ].map((item) => (
                  <li key={item.id}>
                    <Link
                      href={item.href}
                      className="block leading-6 py-0.5 ps-3.5 text-sm hover:ps-4 transition-[padding]"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          </div>
          <div className="col-span-12 sm:col-span-6 md:col-span-3">
            <section className="mb-5">
              <header className="mb-5 text-primary text-base leading-5">
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
        <p className="text-center py-1 text-xs">
          کليه حقوق محصولات و محتوای اين سایت متعلق به مستر دی بی ای می باشد و
          هر گونه کپی برداری از محتوا و محصولات سایت غیر مجاز و بدون رضایت ماست
        </p>
      </div>
    </footer>
  );
};

export default Footer;
