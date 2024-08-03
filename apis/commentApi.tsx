import axiosInstance from "@/configs/axios";

const BASE_URL = "/Comment";

export const postCommentGetArticleComment = async (dto?: {
  ArticleId: number;
  perSection: number;
  currentSection: number;
}) => {
  const { data }: any = await axiosInstance({
    method: "post",
    url: BASE_URL + "/GetArticleComment",
    data: dto,
  });
  return data;
};

export const postCommentSaveComment = async (
  dto:
    | {
        ArticleId: number;
        Description: string;
      }
    | any,
) => {
  const { data }: any = await axiosInstance({
    method: "post",
    url: BASE_URL + "/SaveComment",
    data: dto,
  });
  return data;
};

export const postCommentDeleteComment = async (dto: {
  "CommentViewModel.Id": string;
}) => {
  const { data }: any = await axiosInstance({
    method: "post",
    url: BASE_URL + "/DeleteComment",
    params: dto,
  });
  return data;
};
