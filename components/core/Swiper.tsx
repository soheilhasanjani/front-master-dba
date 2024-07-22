import React from "react";
import { Swiper as SwiperJs } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { SwiperOptions } from "swiper/types";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

const Swiper = ({
  children,
  ...config
}: { children: React.ReactNode; className?: string } & SwiperOptions) => {
  return (
    <SwiperJs modules={[Navigation, Autoplay]} {...config}>
      {children}
    </SwiperJs>
  );
};

export default Swiper;
