import axiosInstance from "@/configs/axios";

const BASE_URL = "/FileInfo";

export const postFileInfoSaveSingleFile = async (dto: any) => {
  const { data }: any = await axiosInstance({
    method: "post",
    url: BASE_URL + "/SaveSingleFile",
    data: dto,
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return data;
};

export const postFileInfoGetRelativeUrl = async (dto: any) => {
  const { data }: any = await axiosInstance({
    method: "post",
    url: BASE_URL + "/GetRelativeUrl",
    data: dto,
  });
  return data;
};
