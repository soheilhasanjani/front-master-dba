import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import HeroSwiper from "@/components/pages/landing/HeroSwiper";
import { postSliderGetAllSlidersQueryOptions } from "@/hooks/apis/sliderHookApi";

const HeroSwiperServerComponent = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(postSliderGetAllSlidersQueryOptions);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <HeroSwiper />
    </HydrationBoundary>
  );
};

export default HeroSwiperServerComponent;
