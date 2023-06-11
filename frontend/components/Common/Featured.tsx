import React from "react";
import PropTypes from "prop-types";

const Featured = (props) => {
  return (
    <div className="mx-24 relative mb-32">
      <div className="mb-6">
        <div className="flex items-center mb-6">
          <div className="w-[20px] h-[40px] bg-red-500 rounded-[10%] "></div>
          <p className="text-red-500 font-medium ml-5">Featured</p>
        </div>
        <div className="flex">
          <h3 className=" font-semibold text-2xl">New Arrival</h3>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-8  text-white">
        <div className=" bg-gradient-to-r from-slate-800 to-zinc-900 w-[1fr] h-[600px] row-span-3 col-span-2 flex justify-center items-end relative">
          <img
            src="./banners/ps5.png"
            alt="item"
            className="w-[511px] h-[511px]"
          />
          <div className="absolute left-11 bottom-11">
            <p className=" font-semibold text-2xl mb-1">PlayStation</p>
            <p className="mb-4">
              Black and White version of the PS5 coming out on sale.
            </p>
            <a href="#" className="underline underline-offset-4 flex">
              Shop Now
              <img className="ml-2" src="./icons/arrow-right.png" alt="link" />
            </a>
          </div>
        </div>
        <div className=" bg-gradient-to-r from-neutral-800 to-slate-400 w-[1fr] h-[284px] col-span-2 flex justify-center items-end relative">
          <img
            src="./banners/woman.png"
            alt="item"
            className="w-[432px] h-[286px]"
          />
          <div className="absolute left-11 bottom-11">
            <p className=" font-semibold text-2xl mb-1">Women’s Collections</p>
            <p className="mb-4">
              Featured woman collections that <br /> give you another vibe.{" "}
            </p>
            <a href="#" className="underline underline-offset-4 flex">
              Shop Now
              <img className="ml-2" src="./icons/arrow-right.png" alt="link" />
            </a>
          </div>
        </div>
        <div className=" bg-gradient-to-r from-stone-800 to-slate-800 w-[1fr] h-[284px] flex justify-center items-end relative">
          <img
            src="./banners/speaker.png"
            alt="item"
            className="w-[210px] h-[222px]"
          />
          <div className="absolute left-11 bottom-11">
            <p className=" font-semibold text-2xl mb-1">Speakers</p>
            <p className="mb-4">Amazon wireless speakers </p>
            <a href="#" className="underline underline-offset-4 flex">
              Shop Now
              <img className="ml-2" src="./icons/arrow-right.png" alt="link" />
            </a>
          </div>
        </div>
        <div className=" bg-gradient-to-r from-neutral-800 to-gray-900 w-[1fr] h-[284px] flex justify-center items-end relative">
          <img
            src="./banners/perfume.png"
            alt="item"
            className="w-[210px] h-[222px]"
          />
          <div className="absolute left-11 bottom-11">
            <p className=" font-semibold text-2xl mb-1">Perfume</p>
            <p className="mb-4">GUCCI INTENSE OUD EDP </p>
            <a href="#" className="underline underline-offset-4 flex">
              Shop Now
              <img className="ml-2" src="./icons/arrow-right.png" alt="link" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

Featured.propTypes = {};

export default Featured;
