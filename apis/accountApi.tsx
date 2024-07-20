import axiosInstance from "@/configs/axios";

const BASE_URL = "/Account";

export const getAccountGetUserData = async () => {
  const { data }: any = await axiosInstance({
    method: "get",
    url: BASE_URL + "/GetUserData",
  });
  return data;
};

export const postAccountVerifyCaptchaResponse = async (dto: {
  CaptchaToken: string;
}) => {
  const { data }: any = await axiosInstance({
    method: "post",
    url: BASE_URL + "/VerifyCaptchaResponse",
    data: dto,
  });
  return data;
};

export const postAccountRegister = async (dto: any) => {
  const { data }: any = await axiosInstance({
    method: "post",
    url: BASE_URL + "/Register",
    data: dto,
  });
  return data;
};
