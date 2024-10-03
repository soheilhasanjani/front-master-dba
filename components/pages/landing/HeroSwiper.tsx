"use client";

import React, { FC } from "react";
import Swiper from "@/components/core/Swiper";
import { SwiperSlide } from "swiper/react";
import Image from "next/image";
import { IMAGE_BASE_URL } from "@/configs/baseUrl";

interface HeroSwiperProps {
  data: Array<any>;
}

const HeroSwiper: FC<HeroSwiperProps> = ({ data }) => {
  return (
    <Swiper navigation autoplay>
      {data?.map((slide: any) => {
        return (
          <SwiperSlide key={slide.Id} className="aspect-[1325/364] w-full">
            <a href={slide.LinkUrl} target="_blank">
              <Image
                src={IMAGE_BASE_URL + slide.ImageUrl}
                fill
                className="h-full w-full rounded object-cover"
                alt={slide.Name}
              />
            </a>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default HeroSwiper;
