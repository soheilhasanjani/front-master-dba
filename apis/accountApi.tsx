import axiosInstance from "@/configs/axios";
import token from "@/constant/token";

const BASE_URL = "/account";

export const getAccountGetUserData = async () => {
  const { data }: any = await axiosInstance({
    method: "get",
    url: BASE_URL + "/GetUserData",
    headers: {
      Authorization: `bearer ${token}`,
    },
  });
  return data;
};
