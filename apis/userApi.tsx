import axiosInstance from "@/configs/axios";

const BASE_URL = "/user";

export const postUserGetAllAuthorList = async () => {
  const { data }: any = await axiosInstance({
    method: "post",
    url: BASE_URL + "/GetAllAuthorList",
  });
  return data;
};

export const postUserGetPublisherProfileData = async (params: any) => {
  const { data }: any = await axiosInstance({
    method: "post",
    url: BASE_URL + "/GetPublisherProfileData",
    params,
  });
  return data;
};
