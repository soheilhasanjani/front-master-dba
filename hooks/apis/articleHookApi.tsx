import * as articleApi from "@/apis/articleApi";
import { useQuery } from "@tanstack/react-query";

export const usePostArticleGetAllArticlesForMainPage = () => {
  return useQuery({
    queryKey: ["postArticleGetAllArticlesForMainPage"],
    queryFn: () => articleApi.postArticleGetAllArticlesForMainPage(),
  });
};

export const usePostArticleGetArticleUsingSearch = (params: any) => {
  return useQuery({
    queryKey: ["postArticleGetArticleUsingSearch", params],
    queryFn: () => articleApi.postArticleGetArticleUsingSearch(params),
    enabled: !!params,
  });
};

export const usePostArticleGetArticleDetail = (params: any) => {
  return useQuery({
    queryKey: ["postArticleGetArticleDetail", params],
    queryFn: () => articleApi.postArticleGetArticleDetail(params),
    enabled: !!params,
  });
};
