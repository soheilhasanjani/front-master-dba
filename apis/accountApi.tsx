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

export const postAccountGetVerifyCode = async (dto: {
  "checkVerifyCodeViewModel.Username": string;
}) => {
  const { data }: any = await axiosInstance({
    method: "post",
    url: BASE_URL + "/GetVerifyCode",
    params: dto,
  });
  return data;
};

export const postAccountCheckVerifyCode = async (dto: {
  "checkVerifyCodeViewModel.Code": string;
  "checkVerifyCodeViewModel.Username": string;
}) => {
  const { data }: any = await axiosInstance({
    method: "post",
    url: BASE_URL + "/CheckVerifyCode",
    params: dto,
  });
  return data;
};

export const postAccountCheckMobileNumber = async (dto: {
  "checkMobileNumberViewModel.Mobile": string;
}) => {
  const { data } = await axiosInstance({
    method: "post",
    url: BASE_URL + "/CheckMobileNumber",
    params: dto,
  });
  return data;
};

export const postAccountChangePassword = async (dto: {
  Username: string;
  Password: string;
}) => {
  const { data } = await axiosInstance({
    method: "post",
    url: BASE_URL + "/ChangePassword",
    data: dto,
  });
  return data;
};
