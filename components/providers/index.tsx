"use client";

import React from "react";
import ReactQueryProvider from "@/components/providers/ReactQueryProvider";
import NextFontProvider from "@/components/providers/NextFontProvider";
import ReduxProvider from "@/components/providers/ReduxProvider";
import ReactToastifyProvider from "@/components/providers/ReactToastifyProvider";
import InitializerProvider from "@/components/providers/initializer-provider";
import SearchBoxProvider from "@/components/providers/SearchBoxProvider";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ReactQueryProvider>
      <NextFontProvider>
        <ReduxProvider>
          <SearchBoxProvider>
            {children}
            <InitializerProvider />
            <ReactToastifyProvider />
          </SearchBoxProvider>
        </ReduxProvider>
      </NextFontProvider>
    </ReactQueryProvider>
  );
};

export default Providers;
