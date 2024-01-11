import * as sliderApi from "@/apis/sliderApi";
import { useQuery } from "@tanstack/react-query";

export const usePostSliderGetAllSliders = () => {
  return useQuery({
    queryKey: ["postSliderGetAllSliders"],
    queryFn: () => sliderApi.postSliderGetAllSliders(),
  });
};
