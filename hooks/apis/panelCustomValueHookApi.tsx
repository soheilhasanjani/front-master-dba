import * as panelCustomValueApi from "@/apis/panelCustomValueApi";
import { useQuery } from "@tanstack/react-query";

export const usePostPanelCustomValueGetLogImage = () => {
  return useQuery({
    queryKey: ["postPanelCustomValueGetLogImage"],
    queryFn: () => panelCustomValueApi.postPanelCustomValueGetLogImage(),
  });
};
