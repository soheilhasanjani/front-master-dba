import * as panelMenuApi from "@/apis/panelMenuApi";
import { useQuery } from "@tanstack/react-query";

export const usePostPanelMenuGetPanelMenuOnUserRole = () => {
  return useQuery({
    queryKey: ["postPanelMenuGetPanelMenuOnUserRole"],
    queryFn: () => panelMenuApi.postPanelMenuGetPanelMenuOnUserRole(),
  });
};
