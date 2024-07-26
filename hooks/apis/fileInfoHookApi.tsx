import * as fileInfoApi from "@/apis/fileInfoApi";
import { useMutation } from "@tanstack/react-query";

export const usePostFileInfoSaveSingleFile = () => {
  return useMutation({
    mutationFn: fileInfoApi.postFileInfoSaveSingleFile,
  });
};

export const usePostFileInfoGetRelativeUrl = () => {
  return useMutation({
    mutationFn: fileInfoApi.postFileInfoGetRelativeUrl,
  });
};
