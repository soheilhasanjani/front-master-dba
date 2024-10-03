"use client";

import React, { FC } from "react";
import { Users } from "react-feather";
import Swiper from "@/components/core/Swiper";
import { SwiperSlide } from "swiper/react";
import Link from "next/link";
import Image from "next/image";
import { IMAGE_BASE_URL } from "@/configs/baseUrl";

interface OurServicesProps {
  data: any;
}

const OurServices: FC<OurServicesProps> = ({ data }) => {
  return (
    <div className="rounded bg-[rgb(237,237,237)] p-4">
      <div className="mb-4 flex w-full flex-col items-center justify-center">
        <Users size={60} className="mb-2 inline-block text-[gray]" />
        <h4 className="border-b border-[#ccc] text-2xl text-primary">
          خدمات ما
        </h4>
      </div>
      <Swiper
        navigation
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          720: {
            slidesPerView: 2,
          },
          992: {
            slidesPerView: 3,
          },
          1400: {
            slidesPerView: 4,
          },
        }}
      >
        {data?.map((slide: any) => {
          return (
            <SwiperSlide key={slide.Id}>
              <div className="flex flex-col items-center gap-4 rounded border border-[rgb(0,0,0,.27)] px-4 py-4 hover:border-primary">
                <Image
                  src={IMAGE_BASE_URL + slide.ImageUrl}
                  className="size-[130px] flex-shrink-0 rounded-full object-cover"
                  width={130}
                  height={130}
                  alt={slide.Title}
                />
                <h5 className="text-xl">{slide.Title}</h5>
                <p className="line-clamp-4 h-24 text-center leading-6">
                  {slide.Description}
                </p>
                <Link
                  href="/contact-us"
                  prefetch={false}
                  className="inline-block rounded bg-primary px-3 py-1.5 text-white"
                >
                  درخواست دمو
                </Link>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default OurServices;
