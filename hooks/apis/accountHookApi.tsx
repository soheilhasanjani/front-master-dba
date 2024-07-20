import * as accountApi from "@/apis/accountApi";
import { useMutation, useQuery } from "@tanstack/react-query";

export const useGetAccountGetUserData = (enabled: boolean) => {
  return useQuery({
    queryKey: ["getAccountGetUserData"],
    queryFn: () => accountApi.getAccountGetUserData(),
    enabled: enabled,
  });
};

export const usePostAccountRegister = () => {
  return useMutation({
    mutationFn: accountApi.postAccountRegister,
  });
};

export const usePostAccountGetVerifyCode = () => {
  return useMutation({
    mutationFn: accountApi.postAccountGetVerifyCode,
  });
};

export const usePostAccountCheckVerifyCode = () => {
  return useMutation({
    mutationFn: accountApi.postAccountCheckVerifyCode,
  });
};
