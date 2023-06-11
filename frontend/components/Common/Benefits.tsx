import React from "react";
import PropTypes from "prop-types";

const Benefits = (props) => {
  return (
    <div className="flex justify-around items-center w-[1500px] mx-auto mb-56">
      <div className="flex justify-center flex-col items-center">
        <div className="w-[80px] h-[80px] bg-gray-500 rounded-[100%] flex justify-around items-center ">
          <div className="w-[58px] h-[58px] bg-black rounded-[100%] flex justify-around items-center">
            <img src="./icons/icon-delivery.png" alt="delivery" />
          </div>
        </div>
        <p className=" font-bold">FREE AND FAST DELIVERY</p>
        <p>Free delivery for all orders over $140</p>
      </div>
      <div className="flex justify-center flex-col items-center">
        <div className="w-[80px] h-[80px] bg-gray-500 rounded-[100%] flex justify-around items-center ">
          <div className="w-[58px] h-[58px] bg-black rounded-[100%] flex justify-around items-center">
            <img src="./icons/icon-delivery.png" alt="delivery" />
          </div>
        </div>
        <p className=" font-bold">FREE AND FAST DELIVERY</p>
        <p>Free delivery for all orders over $140</p>
      </div>
      <div className="flex justify-center flex-col items-center">
        <div className="w-[80px] h-[80px] bg-gray-500 rounded-[100%] flex justify-around items-center ">
          <div className="w-[58px] h-[58px] bg-black rounded-[100%] flex justify-around items-center">
            <img src="./icons/icon-delivery.png" alt="delivery" />
          </div>
        </div>
        <p className=" font-bold">FREE AND FAST DELIVERY</p>
        <p>Free delivery for all orders over $140</p>
      </div>
    </div>
  );
};

Benefits.propTypes = {};

export default Benefits;
