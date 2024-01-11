"use client";

import React from "react";
import { BYekan } from "@/theme/fonts";

const NextFontProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={`${BYekan.variable}`}>
      <style jsx global>{`
        html {
          font-family: ${BYekan.style.fontFamily};
        }
      `}</style>
      {children}
    </div>
  );
};

export default NextFontProvider;
