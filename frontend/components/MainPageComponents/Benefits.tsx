import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";

const Benefits = (props) => {
  return (
    <div className="flex justify-around items-center w-[1500px] mx-auto mb-40">
      <div className="flex justify-center flex-col items-center">
        <div className="w-[80px] h-[80px] bg-gray-500 rounded-[100%] flex justify-around items-center mb-4">
          <div className="w-[58px] h-[58px] bg-black rounded-[100%] flex justify-around items-center">
            <Image
              src="/icons/icon-delivery.png"
              alt="delivery"
              width={30}
              height={30}
            />
          </div>
        </div>
        <p className=" font-bold">FREE AND FAST DELIVERY</p>
        <p>Free delivery for all orders over $140</p>
      </div>
      <div className="flex justify-center flex-col items-center">
        <div className="w-[80px] h-[80px] bg-gray-500 rounded-[100%] flex justify-around items-center mb-4">
          <div className="w-[58px] h-[58px] bg-black rounded-[100%] flex justify-around items-center">
            <Image
              src="/icons/Icon-headphones.png"
              alt="delivery"
              width={35}
              height={35}
            />
          </div>
        </div>
        <p className=" font-bold">24/7 CUSTOMER SERVICE</p>
        <p>Friendly 24/7 customer support</p>
      </div>
      <div className="flex justify-center flex-col items-center">
        <div className="w-[80px] h-[80px] bg-gray-500 rounded-[100%] flex justify-around items-center mb-4">
          <div className="w-[58px] h-[58px] bg-black rounded-[100%] flex justify-around items-center">
            <Image
              src="/icons/Icon-shield.png"
              alt="delivery"
              width={30}
              height={30}
            />
          </div>
        </div>
        <p className=" font-bold">MONEY BACK GUARANTEE</p>
        <p>We reurn money within 30 days</p>
      </div>
    </div>
  );
};

Benefits.propTypes = {};

export default Benefits;
