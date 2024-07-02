import LatestArticles from "@/components/pages/landing/LatestArticles";
import { postArticleGetAllArticlesForMainPageQueryOptions } from "@/hooks/apis/articleHookApi";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import React from "react";

const LatestArticlesServerComponent = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(
    postArticleGetAllArticlesForMainPageQueryOptions,
  );
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <LatestArticles />
    </HydrationBoundary>
  );
};

export default LatestArticlesServerComponent;
