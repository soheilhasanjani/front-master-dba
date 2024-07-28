import axiosInstance from "@/configs/axios";

const BASE_URL = "/PanelCustomValue";

export const postPanelCustomValueGetLogImage = async () => {
  const { data }: any = await axiosInstance({
    method: "post",
    url: BASE_URL + "/GetLogImage",
  });
  return data;
};

export const postPanelCustomValueGetFooterContent = async () => {
  const { data }: any = await axiosInstance({
    method: "post",
    url: BASE_URL + "/GetFooterContent",
  });
  return data;
};

export const postPanelCustomValueGetPanelCustomeValue = async () => {
  const { data }: any = await axiosInstance({
    method: "post",
    url: BASE_URL + "/GetPanelCustomeValue",
  });
  return data;
};

export const postPanelCustomValueGetAboutPageAboutUs = async () => {
  const { data }: any = await axiosInstance({
    method: "post",
    url: BASE_URL + "/GetAboutPageAboutUs",
  });
  return data;
};

export const postPanelCustomValueSave = async (dto: any) => {
  const { data }: any = await axiosInstance({
    method: "post",
    url: BASE_URL + "/Save",
    data: dto,
    headers: { "Content-Type": "multipart/form-data" },
  });
  return data;
};

export const postPanelCustomValueGetWebSiteTitle = async () => {
  const { data }: any = await axiosInstance({
    method: "post",
    url: BASE_URL + "/GetWebSiteTitle",
  });
  return data;
};

export const postPanelCustomValueGetMainPageKeyWord = async () => {
  const { data }: any = await axiosInstance({
    method: "post",
    url: BASE_URL + "/GetMainPageKeyWord",
  });
  return data;
};
