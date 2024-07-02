import OurServices from "@/components/pages/landing/OurServices";
import { postProductGetAllProductsQueryOptions } from "@/hooks/apis/productHookApi";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import React from "react";

const OurServicesServerComponent = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(postProductGetAllProductsQueryOptions);
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <OurServices />
    </HydrationBoundary>
  );
};

export default OurServicesServerComponent;
