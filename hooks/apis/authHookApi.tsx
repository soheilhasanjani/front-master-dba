import * as authApi from "@/apis/authApi";
import { useMutation } from "@tanstack/react-query";

export const usePostLogin = () => {
  return useMutation({
    mutationFn: authApi.postLogin,
  });
};
