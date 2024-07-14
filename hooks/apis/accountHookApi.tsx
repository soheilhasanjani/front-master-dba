import * as accountApi from "@/apis/accountApi";
import { useQuery } from "@tanstack/react-query";

export const useGetAccountGetUserData = (enabled: boolean) => {
  return useQuery({
    queryKey: ["getAccountGetUserData"],
    queryFn: () => accountApi.getAccountGetUserData(),
    enabled: enabled,
  });
};
