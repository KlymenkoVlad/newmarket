"use client";

import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  Zoom,
} from "swiper/modules";
import "swiper/css";

import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/zoom";

interface SliderProps {
  slideItems: string[];
}

const SliderForItem: React.FC<SliderProps> = ({ slideItems }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Zoom, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      autoplay={{
        delay: 4500,
        disableOnInteraction: true,
      }}
      zoom={true}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      {slideItems &&
        slideItems.map((slide, i) => (
          <SwiperSlide key={i} className="p-10">
            <img src={slide} alt="slide" className="mx-auto max-h-80" />
          </SwiperSlide>
        ))}
    </Swiper>
  );
};

export default SliderForItem;
