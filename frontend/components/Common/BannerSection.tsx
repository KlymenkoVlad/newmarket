"use client";

import React, { useEffect, useState } from "react";

const BannerSection = () => {
  const slides = [
    {
      url: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80",
    },

    {
      url: "https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2253&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // !DONT FORGET TO TURN ON!!!!!!!!----------------------------
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     const isLastSlide = currentIndex === slides.length - 1;
  //     const newIndex = isLastSlide ? 0 : currentIndex + 1;
  //     setCurrentIndex(newIndex);
  //   }, 5000);
  //   return () => clearTimeout(timer);
  // }, [currentIndex]);

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
    <div className="flex mb-16">
      <div className="flex ml-24">
        <ul className="mr-20">
          <li className="mt-6 mb-8">
            <a href="#">Woman’s Fashion</a>
          </li>
          <li className="mb-8">
            <a href="#">Men’s Fashion</a>
          </li>
          <li className="mb-8">
            <a href="#">Electronics</a>
          </li>
          <li className="mb-8">
            <a href="">Home & Lifestyle</a>
          </li>
          <li className="mb-8">
            <a href="#">Medicine</a>
          </li>
          <li className="mb-8">
            <a href="#">Sports & Outdoor</a>
          </li>
          <li className="mb-8">
            <a href="#">Baby’s & Toys</a>
          </li>
          <li className="mb-8">
            <a href="#">Groceries & Pets</a>
          </li>
          <li className="mb-8">
            <a href="#">Health & Beauty</a>
          </li>
        </ul>
        <div className=" h-[500px] w-px bg-gray-400"></div>
      </div>

      <div className="m-auto h-[500px] w-[892px] py-4 px-4 relative group">
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          className="h-full w-full rounded-xl bg-center bg-cover duration-500"
        >
          <div className=" flex py-2 justify-center">
            {slides.map((slide, slideIndex) => (
              <div
                key={slideIndex}
                onClick={() => setCurrentIndex(slideIndex)}
                className={`text-2xl cursor-pointer mx-4 w-[12px] h-[12px] rounded-[100%] ${
                  slideIndex === currentIndex ? "bg-slate-500" : "bg-white"
                }`}
              ></div>
            ))}
          </div>

          {/* Right */}
          <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <img
              onClick={prevSlide}
              className="w-[30px] h-[30px]"
              src="./icons/arrow-left.svg"
              alt="arrow"
            />
          </div>
          {/* Left */}
          <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <img
              onClick={nextSlide}
              className="rotate-180 w-[30px] h-[30px]"
              src="./icons/arrow-left.svg"
              alt="arrow"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerSection;
