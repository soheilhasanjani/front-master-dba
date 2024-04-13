import * as userApi from "@/apis/userApi";
import { useQuery } from "@tanstack/react-query";

export const usePostUserGetAllAuthorList = () => {
  return useQuery({
    queryKey: ["postUserGetAllAuthorList"],
    queryFn: () => userApi.postUserGetAllAuthorList(),
  });
};

export const usePostUserGetPublisherProfileData = (params: any) => {
  return useQuery({
    queryKey: ["postUserGetPublisherProfileData", params],
    queryFn: () => userApi.postUserGetPublisherProfileData(params),
    enabled: !!params,
  });
};
