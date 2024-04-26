import * as panelCustomValueApi from "@/apis/panelCustomValueApi";
import { useQuery, useSuspenseQuery } from "@tanstack/react-query";

export const usePostPanelCustomValueGetLogImage = () => {
  return useSuspenseQuery({
    queryKey: ["postPanelCustomValueGetLogImage"],
    queryFn: () => panelCustomValueApi.postPanelCustomValueGetLogImage(),
  });
};

export const usePostPanelCustomValueGetFooterContent = () => {
  return useSuspenseQuery({
    queryKey: ["postPanelCustomValueGetFooterContent"],
    queryFn: () => panelCustomValueApi.postPanelCustomValueGetFooterContent(),
  });
};

export const usePostPanelCustomValueGetPanelCustomeValue = () => {
  return useQuery({
    queryKey: ["postPanelCustomValueGetPanelCustomeValue"],
    queryFn: () =>
      panelCustomValueApi.postPanelCustomValueGetPanelCustomeValue(),
  });
};
