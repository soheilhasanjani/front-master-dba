import axiosInstance from "@/configs/axios";

const BASE_URL = "/Article";

export const postArticleGetAllArticlesForMainPage = async () => {
  const { data }: any = await axiosInstance({
    method: "post",
    url: BASE_URL + "/GetAllArticlesForMainPage",
  });
  return data;
};
