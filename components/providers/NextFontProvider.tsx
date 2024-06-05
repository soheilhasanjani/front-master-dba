"use client";

import React from "react";
import { IRANYekanX } from "@/theme/fonts";

const NextFontProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={`${IRANYekanX.variable}`}>
      <style jsx global>{`
        html {
          font-family: ${IRANYekanX.style.fontFamily};
        }
      `}</style>
      {children}
    </div>
  );
};

export default NextFontProvider;
