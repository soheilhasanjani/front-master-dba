import axiosInstance from "@/configs/axios";

const BASE_URL = "/slider";

export const postSliderGetAllSliders = async () => {
  const { data }: any = await axiosInstance({
    method: "post",
    url: BASE_URL + "/GetAllSliders",
  });
  return data;
};
