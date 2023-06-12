import React from "react";
import PropTypes from "prop-types";
import Item from "../Common/Item";

const BestSelling = (props) => {
  return (
    <div className="mx-24 mb-24">
      <div className="mb-6">
        <div className="flex items-center mb-6">
          <div className="w-[20px] h-[40px] bg-red-500 rounded-[10%] "></div>
          <p className="text-red-500 font-medium ml-5">This Month</p>
        </div>
        <div className="flex">
          <h3 className=" font-semibold text-2xl">Best Selling Products</h3>
        </div>
      </div>

      <div className="flex justify-around mb-8">
        {/* <Item />
        <Item />
        <Item />
        <Item /> */}
      </div>
    </div>
  );
};

BestSelling.propTypes = {};

export default BestSelling;
