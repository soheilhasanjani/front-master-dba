import axiosInstance from "@/configs/axios";

const BASE_URL = "/account";

export const getAccountGetUserData = async () => {
  const { data }: any = await axiosInstance({
    method: "get",
    url: BASE_URL + "/GetUserData",
  });
  return data;
};
