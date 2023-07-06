"use client";

import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import { Product } from "@/types/types";
import truncateString from "@/utils/truncateString";
import Link from "next/dist/client/link";

interface SliderProps {
  slideItems: Product[];
}

const Slider: React.FC<SliderProps> = ({ slideItems }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // !DONT FORGET TO TURN ON!!!!!!!!----------------------------
  useEffect(() => {
    const timer = setTimeout(() => {
      const isLastSlide = currentIndex === slideItems.length - 1;
      const newIndex = isLastSlide ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
    }, 5000);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  const prevSlide = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.preventDefault();
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slideItems.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.preventDefault();
    const isLastSlide = currentIndex === slideItems.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <>
      <Link
        href="/product/[id]-[name]"
        as={`/product/${slideItems[currentIndex]._id}-${slideItems[currentIndex].name}`}
        shallow
        className=" z-0"
      >
        <div
          style={{
            backgroundImage: `url(${slideItems[currentIndex].mainPicture})`,
          }}
          className="h-full w-full rounded-xl bg-center bg-cover duration-500"
        >
          <div
            className=" flex py-2 justify-center"
            onClick={(event: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
              event.preventDefault()
            }
          >
            {slideItems.map((slide, slideIndex) => (
              <div
                key={slideIndex}
                onClick={(
                  event: React.MouseEvent<HTMLDivElement, MouseEvent>
                ) => {
                  event.preventDefault();
                  setCurrentIndex(slideIndex);
                }}
                className={` text-2xl cursor-pointer mx-4 w-[20px] h-[20px] rounded-[100%] border-2  ${
                  slideIndex === currentIndex ? "bg-slate-500" : "bg-white"
                }`}
              ></div>
            ))}
          </div>

          {/* Right */}
          <div className=" hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <Image
              onClick={prevSlide}
              width={30}
              height={30}
              src="./icons/arrow-left.svg"
              alt="arrow"
            />
          </div>
          {/* Left */}
          <div className=" hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <Image
              onClick={nextSlide}
              width={30}
              height={30}
              className="rotate-180"
              src="./icons/arrow-left.svg"
              alt="arrow"
            />
          </div>
        </div>
      </Link>
      <p className="text-4xl font-medium text-gray-900  text-center  ">
        {truncateString(slideItems[currentIndex].name, 30)}
      </p>
      <p className="text-4xl font-medium text-gray-900  text-center  ">
        ${slideItems[currentIndex].price}
      </p>
    </>
  );
};

Slider.propTypes = {};

export default Slider;
