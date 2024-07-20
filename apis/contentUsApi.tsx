import axiosInstance from "@/configs/axios";

const BASE_URL = "/ContentUs";

export const postContentUsSave = async (dto: {
  FullName: string;
  Email: string;
  Subject: string;
  Description: string;
}) => {
  const { data }: any = await axiosInstance({
    method: "post",
    url: BASE_URL + "/Save",
    data: dto,
  });
  return data;
};
