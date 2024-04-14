import axiosInstance from "@/configs/axios";
import token from "@/constant/token";

const BASE_URL = "/panelMenu";

export const postPanelMenuGetPanelMenuOnUserRole = async () => {
  const { data }: any = await axiosInstance({
    method: "post",
    url: BASE_URL + "/GetPanelMenuOnUserRole",
    headers: {
      Authorization: `bearer ${token}`,
    },
  });
  return data;
};
