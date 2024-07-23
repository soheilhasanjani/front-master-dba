import axiosInstance from "@/configs/axios";

export const postLogin = async (params: any) => {
  const { data }: any = await axiosInstance({
    method: "post",
    url: "/login",
    data: params,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
  return data;
};
