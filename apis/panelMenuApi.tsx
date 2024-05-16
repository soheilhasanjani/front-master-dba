import axiosInstance from "@/configs/axios";

const BASE_URL = "/panelMenu";

export const postPanelMenuGetPanelMenuOnUserRole = async () => {
  const { data }: any = await axiosInstance({
    method: "post",
    url: BASE_URL + "/GetPanelMenuOnUserRole",
  });
  return data;
};
