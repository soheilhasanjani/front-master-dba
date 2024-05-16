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
