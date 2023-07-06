"use client";

import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Image from "next/image";

interface SliderProps {
  slides: string[];
}

const SliderItemPage: React.FC<SliderProps> = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // !DONT FORGET TO TURN ON!!!!!!!!----------------------------
  useEffect(() => {
    const timer = setTimeout(() => {
      const isLastSlide = currentIndex === slides.length - 1;
      const newIndex = isLastSlide ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
    }, 5000);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div
      style={{ backgroundImage: `url(${slides[currentIndex]})` }}
      className="mx-auto min-h-[300px] md:max-h-[500px] ms:w-[400px] w-[300px] rounded-xl bg-contain bg-no-repeat bg-center duration-500 md:hidden block relative"
    >
      <div className=" flex py-2 justify-center">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => setCurrentIndex(slideIndex)}
            className={`text-2xl cursor-pointer mx-4 w-[12px] h-[12px] rounded-[100%] border-2  ${
              slideIndex === currentIndex ? "bg-slate-500" : "bg-white"
            }`}
          ></div>
        ))}
      </div>

      {/* Right */}
      <div className=" group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <Image
          onClick={prevSlide}
          width={30}
          height={30}
          src="/icons/arrow-left.svg"
          alt="arrow"
        />
      </div>
      {/* Left */}
      <div className=" group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <Image
          onClick={nextSlide}
          width={30}
          height={30}
          className="rotate-180"
          src="/icons/arrow-left.svg"
          alt="arrow"
        />
      </div>
    </div>
  );
};

export default SliderItemPage;
