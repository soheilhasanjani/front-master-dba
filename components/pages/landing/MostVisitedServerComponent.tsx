import React from "react";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { postArticleGetAllArticlesForMainPageQueryOptions } from "@/hooks/apis/articleHookApi";
import MostVisited from "@/components/pages/landing/MostVisited";

const MostVisitedServerComponent = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(
    postArticleGetAllArticlesForMainPageQueryOptions,
  );
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <MostVisited />
    </HydrationBoundary>
  );
};

export default MostVisitedServerComponent;
