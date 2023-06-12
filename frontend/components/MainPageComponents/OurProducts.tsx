import React from "react";
import PropTypes from "prop-types";
import Item from "../Common/Item";

const OurProducts = () => {
  return (
    <div className="mx-24 relative mb-32">
      <div className="mb-6">
        <div className="flex items-center mb-6">
          <div className="w-[20px] h-[40px] bg-red-500 rounded-[10%] "></div>
          <p className="text-red-500 font-medium ml-5">Our Products</p>
        </div>
        <div className="flex">
          <h3 className=" font-semibold text-2xl">Explore Our Products</h3>

          <div className="ml-64 flex absolute right-6">
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

      <div className="grid grid-cols-4 gap-8">
        {/* <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item /> */}
      </div>

      <div className="flex justify-center mt-14">
        <button
          type="submit"
          className="w-[234px] h-[56px] rounded-md bg-red-500 text-white"
        >
          View All Products
        </button>
      </div>
    </div>
  );
};

OurProducts.propTypes = {};

export default OurProducts;
