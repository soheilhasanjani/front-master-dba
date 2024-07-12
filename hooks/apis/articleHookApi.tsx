import * as articleApi from "@/apis/articleApi";
import {
  queryOptions,
  useMutation,
  useQuery,
  useQueryClient,
  useSuspenseQuery,
} from "@tanstack/react-query";

export const postArticleGetAllArticlesForMainPageQueryOptions = queryOptions({
  queryKey: ["postArticleGetAllArticlesForMainPage"],
  queryFn: () => articleApi.postArticleGetAllArticlesForMainPage(),
});

export const usePostArticleGetAllArticlesForMainPage = () => {
  return useSuspenseQuery(postArticleGetAllArticlesForMainPageQueryOptions);
};

export const usePostArticleGetArticleUsingSearch = (params: any) => {
  return useQuery({
    queryKey: ["postArticleGetArticleUsingSearch", params],
    queryFn: () => articleApi.postArticleGetArticleUsingSearch(params),
    enabled: !!params,
    placeholderData: (previousData) => previousData,
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
  params: any,
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

export const usePostArticleSave = () => {
  const QC = useQueryClient();
  return useMutation({
    mutationFn: articleApi.postArticleSave,
    onSuccess: () => {
      QC.invalidateQueries({
        queryKey: ["postArticleGetBreadCrumbListOnArticleId"],
      });
      QC.invalidateQueries({
        queryKey: ["postArticleGetAllArticlesForDashboard"],
      });
    },
  });
};

export const usePostArticleGetAllArticlesForDropdown = (params: any) => {
  return useQuery({
    queryKey: ["postArticleGetAllArticlesForDropdown", params],
    queryFn: () => articleApi.postArticleGetAllArticlesForDropdown(params),
    enabled: !!params,
  });
};

export const usePostArticleGetArticlesForEdit = (params: any) => {
  return useQuery({
    queryKey: ["postArticleGetArticlesForEdit", params],
    queryFn: () => articleApi.postArticleGetArticlesForEdit(params),
    enabled: !!params,
  });
};
