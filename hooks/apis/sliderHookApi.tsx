import * as sliderApi from "@/apis/sliderApi";
import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";

export const postSliderGetAllSlidersQueryOptions = queryOptions({
  queryKey: ["postSliderGetAllSliders"],
  queryFn: () => sliderApi.postSliderGetAllSliders(),
});

export const usePostSliderGetAllSliders = () => {
  return useSuspenseQuery(postSliderGetAllSlidersQueryOptions);
};
