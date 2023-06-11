import React from "react";
import PropTypes from "prop-types";
import Item from "./Item";

const Date = () => {
  return (
    <div>
      <p>Days</p>
      <div className="flex">
        <p className="font-semibold text-2xl">03</p>
        <div className="flex flex-col justify-center mx-5">
          <div className="w-[3px] h-[3px] bg-red-500 rounded-[100%] mb-1"></div>
          <div className="w-[3px] h-[3px] bg-red-500 rounded-[100%] "></div>
        </div>
      </div>
    </div>
  );
};

const Todays = (props) => {
  return (
    <div className="mx-24 relative">
      <div className="mb-6">
        <div className="flex items-center mb-6">
          <div className="w-[20px] h-[40px] bg-red-500 rounded-[10%] "></div>
          <p className="text-red-500 font-medium ml-5">Today’s</p>
        </div>
        <div className="flex">
          <h3 className=" font-semibold text-2xl">Flash Sales</h3>
          <div className="flex ml-32">
            {Date()}
            {Date()}
            {Date()}
            {Date()}
          </div>

          <div className="ml-64 flex absolute right-4">
            <div className="w-[46px] h-[46px] bg-gray-200 rounded-[100%] mx-3 flex items-center justify-center ">
              <img
                className="absolute max-w-full max-h-full"
                src="./icons/vector.png"
                alt=""
              />
            </div>
            <div className="w-[46px] h-[46px] bg-gray-200 rounded-[100%] mx-3 flex items-center justify-center">
              <img
                className="absolute max-w-full max-h-full rotate-180"
                src="./icons/vector.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-around mb-8">
        <Item />
        <Item />
        <Item />
        <Item />
      </div>

      <div className="flex justify-center mb-12">
        <button
          type="submit"
          className="w-[234px] h-[56px] rounded-md bg-red-500 text-white"
        >
          View All Products
        </button>
      </div>

      <div className="h-px bg-gray-400 mb-12"></div>
    </div>
  );
};

Todays.propTypes = {};

export default Todays;
