import * as sliderApi from "@/apis/sliderApi";
import { useSuspenseQuery } from "@tanstack/react-query";

export const usePostSliderGetAllSliders = () => {
  return useSuspenseQuery({
    queryKey: ["postSliderGetAllSliders"],
    queryFn: () => sliderApi.postSliderGetAllSliders(),
  });
};
