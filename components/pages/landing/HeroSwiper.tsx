"use client";

import React from "react";
import { usePostSliderGetAllSliders } from "@/hooks/apis/sliderHookApi";
import Swiper from "@/components/core/Swiper";
import { SwiperSlide } from "swiper/react";
import Image from "next/image";

const HeroSwiper = () => {
  //
  const { data } = usePostSliderGetAllSliders();
  //
  return (
    <Swiper className="h-[340px]" navigation>
      {data?.map((slide: any) => {
        return (
          <SwiperSlide key={slide.Id} className="h-[340px]">
            <Image
              src={"http://masterdba.ir:8080" + slide.ImageUrl}
              fill
              className="h-full w-full rounded object-cover"
              alt={slide.Name}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default HeroSwiper;
