import * as articleApi from "@/apis/articleApi";
import { useQuery } from "@tanstack/react-query";

export const usePostArticleGetAllArticlesForMainPage = () => {
  return useQuery({
    queryKey: ["postArticleGetAllArticlesForMainPage"],
    queryFn: () => articleApi.postArticleGetAllArticlesForMainPage(),
  });
};
