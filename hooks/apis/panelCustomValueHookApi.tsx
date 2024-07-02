import * as panelCustomValueApi from "@/apis/panelCustomValueApi";
import {
  queryOptions,
  useQuery,
  useSuspenseQuery,
} from "@tanstack/react-query";

export const usePostPanelCustomValueGetLogImage = () => {
  return useSuspenseQuery({
    queryKey: ["postPanelCustomValueGetLogImage"],
    queryFn: () => panelCustomValueApi.postPanelCustomValueGetLogImage(),
  });
};

export const postPanelCustomValueGetFooterContentQueryOptions = queryOptions({
  queryKey: ["postPanelCustomValueGetFooterContent"],
  queryFn: () => panelCustomValueApi.postPanelCustomValueGetFooterContent(),
});

export const usePostPanelCustomValueGetFooterContent = () => {
  return useSuspenseQuery(postPanelCustomValueGetFooterContentQueryOptions);
};

export const usePostPanelCustomValueGetPanelCustomeValue = () => {
  return useQuery({
    queryKey: ["postPanelCustomValueGetPanelCustomeValue"],
    queryFn: () =>
      panelCustomValueApi.postPanelCustomValueGetPanelCustomeValue(),
  });
};

export const usePostPanelCustomValueGetAboutPageAboutUs = () => {
  return useQuery({
    queryKey: ["postPanelCustomValueGetAboutPageAboutUs"],
    queryFn: () =>
      panelCustomValueApi.postPanelCustomValueGetAboutPageAboutUs(),
  });
};
