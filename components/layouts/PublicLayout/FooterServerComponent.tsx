import React from "react";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { postPanelCustomValueGetFooterContentQueryOptions } from "@/hooks/apis/panelCustomValueHookApi";
import Footer from "@/components/layouts/PublicLayout/Footer";

const FooterServerComponent = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(
    postPanelCustomValueGetFooterContentQueryOptions,
  );

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Footer />
    </HydrationBoundary>
  );
};

export default FooterServerComponent;
