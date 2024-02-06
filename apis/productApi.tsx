import axiosInstance from "@/configs/axios";

const BASE_URL = "/Product";

export const postProductGetAllProducts = async () => {
  const { data }: any = await axiosInstance({
    method: "post",
    url: BASE_URL + "/GetAllProducts",
  });
  return data;
};
