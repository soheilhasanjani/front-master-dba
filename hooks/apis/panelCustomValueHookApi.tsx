import * as panelCustomValueApi from "@/apis/panelCustomValueApi";
import { useQuery } from "@tanstack/react-query";

export const usePostPanelCustomValueGetLogImage = () => {
  return useQuery({
    queryKey: ["postPanelCustomValueGetLogImage"],
    queryFn: () => panelCustomValueApi.postPanelCustomValueGetLogImage(),
  });
};

export const usePostPanelCustomValueGetFooterContent = () => {
  return useQuery({
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
