import React from "react";
import { Swiper as SwiperJs } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { SwiperOptions } from "swiper/types";
import "swiper/css";
import "swiper/css/navigation";

const Swiper = ({
  children,
  ...config
}: { children: React.ReactNode; className?: string } & SwiperOptions) => {
  return (
    <SwiperJs modules={[Navigation, Pagination, Scrollbar, A11y]} {...config}>
      {children}
    </SwiperJs>
  );
};

export default Swiper;
