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

export const usePostArticleGetBreadCrumbListOnArticleId = (params: any) => {
  return useQuery({
    queryKey: ["postArticleGetBreadCrumbListOnArticleId", params],
    queryFn: () => articleApi.postArticleGetBreadCrumbListOnArticleId(params),
    enabled: !!params,
  });
};

export const usePostArticleGetAllArticleMenu = () => {
  return useQuery({
    queryKey: ["postArticleGetAllArticleMenu"],
    queryFn: () => articleApi.postArticleGetAllArticleMenu(),
  });
};

export const usePostArticleGetAllArticlesForArchiveWithPaginate = (
  params: any
) => {
  return useQuery({
    queryKey: ["postArticleGetAllArticlesForArchiveWithPaginate", params],
    queryFn: () =>
      articleApi.postArticleGetAllArticlesForArchiveWithPaginate(params),
    enabled: !!params,
  });
};

export const usePostArticleGetAllArticlesOnAuthrId = (params: any) => {
  return useQuery({
    queryKey: ["postArticleGetAllArticlesOnAuthrId", params],
    queryFn: () => articleApi.postArticleGetAllArticlesOnAuthrId(params),
    enabled: !!params,
  });
};

export const usePostArticleGetAllArticlesForDashboard = (params: any) => {
  return useQuery({
    queryKey: ["postArticleGetAllArticlesForDashboard", params],
    queryFn: () => articleApi.postArticleGetAllArticlesForDashboard(params),
    enabled: !!params,
  });
};
