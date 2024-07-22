"use client";

import React, { FC } from "react";
import Swiper from "@/components/core/Swiper";
import { SwiperSlide } from "swiper/react";
import Image from "next/image";

interface HeroSwiperProps {
  data: Array<any>;
}

const HeroSwiper: FC<HeroSwiperProps> = ({ data }) => {
  return (
    <Swiper navigation autoplay>
      {data?.map((slide: any) => {
        return (
          <SwiperSlide key={slide.Id} className="aspect-[1325/364] w-full">
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
