"use client";

import React, { FC } from "react";
import Swiper from "@/components/core/Swiper";
import { SwiperSlide } from "swiper/react";
import Image from "next/image";

interface HeroSwiper {
  data: Array<any>;
}

const HeroSwiper: FC<HeroSwiper> = ({ data }) => {
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
