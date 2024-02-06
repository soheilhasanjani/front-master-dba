import React from "react";
import { usePostSliderGetAllSliders } from "@/hooks/apis/sliderHookApi";
import Swiper from "@/components/core/Swiper";
import { SwiperSlide } from "swiper/react";
import Image from "next/image";

const PromotionalSlider = () => {
  //
  const { data } = usePostSliderGetAllSliders();
  //
  return (
    <div>
      <Swiper className="h-[340px]" navigation>
        {data?.map((slide: any) => {
          return (
            <SwiperSlide key={slide.Id} className="h-[340px]">
              <Image
                src={"http://masterdba.ir:8080" + slide.ImageUrl}
                fill
                className="object-cover w-full h-full rounded"
                alt={slide.Name}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default PromotionalSlider;
