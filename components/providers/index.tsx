"use client";

import React from "react";
import ReactQueryProvider from "@/components/providers/ReactQueryProvider";
import NextFontProvider from "@/components/providers/NextFontProvider";
import ReduxProvider from "@/components/providers/ReduxProvider";
import ReactToastifyProvider from "@/components/providers/ReactToastifyProvider";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ReactQueryProvider>
      <NextFontProvider>
        <ReduxProvider>
          {children}
          <ReactToastifyProvider />
        </ReduxProvider>
      </NextFontProvider>
    </ReactQueryProvider>
  );
};

export default Providers;
