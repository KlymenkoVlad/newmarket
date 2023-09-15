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
} from "swiper/modules";
import "swiper/css";
import SliderItemMainPage from "./SliderItemMainPage";

import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/zoom";
import { Product } from "@/types/types";

interface SliderProps {
  slideItems: Product[];
}

const Slider: React.FC<SliderProps> = ({ slideItems }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      loop={true}
      navigation
      autoplay={{
        delay: 4500,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      {slideItems &&
        slideItems.map((slide) => (
          <SwiperSlide key={slide._id} className="p-10">
            <SliderItemMainPage product={slide} />
          </SwiperSlide>
        ))}
    </Swiper>
  );
};

export default Slider;
