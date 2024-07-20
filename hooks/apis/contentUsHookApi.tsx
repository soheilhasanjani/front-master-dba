import * as contentUsApi from "@/apis/contentUsApi";
import { useMutation } from "@tanstack/react-query";

export const usePostContentUsSave = () => {
  return useMutation({
    mutationFn: contentUsApi.postContentUsSave,
  });
};
