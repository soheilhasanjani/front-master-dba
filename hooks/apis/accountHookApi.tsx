import * as accountApi from "@/apis/accountApi";
import { useQuery } from "@tanstack/react-query";

export const useGetAccountGetUserData = () => {
  return useQuery({
    queryKey: ["getAccountGetUserData"],
    queryFn: () => accountApi.getAccountGetUserData(),
  });
};
