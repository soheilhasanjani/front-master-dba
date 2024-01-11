import axiosInstance from "@/configs/axios";

const BASE_URL = "/PanelCustomValue";

export const postPanelCustomValueGetLogImage = async () => {
  const { data }: any = await axiosInstance({
    method: "post",
    url: BASE_URL + "/GetLogImage",
  });
  return data;
};
