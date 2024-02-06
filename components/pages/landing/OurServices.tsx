import React from "react";
import { usePostProductGetAllProducts } from "@/hooks/apis/productHookApi";
import { Users } from "react-feather";
import Swiper from "@/components/core/Swiper";
import { SwiperSlide } from "swiper/react";
import Link from "next/link";
import Image from "next/image";

const OurServices = () => {
  //
  const { data } = usePostProductGetAllProducts();
  //
  return (
    <div className="rounded bg-[rgb(237,237,237)] p-4">
      <div className="flex flex-col justify-center items-center w-full mb-4">
        <Users size={60} className="mb-2 inline-block text-[gray]" />
        <h4 className="border-b border-[#ccc] text-primary text-2xl">
          خدمات ما
        </h4>
      </div>
      <Swiper navigation spaceBetween={20} slidesPerView={3}>
        {data?.map((slide: any) => {
          return (
            <SwiperSlide key={slide.Id}>
              <div className="border border-[rgb(0,0,0,.27)] rounded hover:border-primary flex flex-col py-4 items-center gap-4 px-4">
                <Image
                  src={"http://masterdba.ir:8080" + slide.ImageUrl}
                  className="rounded-full"
                  width={130}
                  height={130}
                  alt={slide.Title}
                />
                <h5 className="text-xl">{slide.Title}</h5>
                <p className="leading-6 text-center h-24 line-clamp-4">
                  {slide.Description}
                </p>
                <Link
                  href="/productdemoform"
                  className="bg-primary rounded text-white py-1.5 px-3 inline-block"
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
