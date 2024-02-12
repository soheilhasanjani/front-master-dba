import axiosInstance from "@/configs/axios";

const BASE_URL = "/Article";

export const postArticleGetAllArticlesForMainPage = async () => {
  const { data }: any = await axiosInstance({
    method: "post",
    url: BASE_URL + "/GetAllArticlesForMainPage",
  });
  return data;
};

export const postArticleGetArticleUsingSearch = async (params: any) => {
  const { data }: any = await axiosInstance({
    method: "post",
    url: BASE_URL + "/GetArticleUsingSearch",
    params,
  });
  return data;
};

export const postArticleGetArticleDetail = async (params: any) => {
  const { data }: any = await axiosInstance({
    method: "post",
    url: BASE_URL + "/GetArticleDetail",
    params,
  });
  return data;
};
