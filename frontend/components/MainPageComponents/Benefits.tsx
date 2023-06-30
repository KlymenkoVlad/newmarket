import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";

interface IconProps {
  title: string;
  desc: string;
  img: string;
  alt: string;
}

const Icon = ({ title, desc, img, alt }: IconProps) => {
  return (
    <div className="flex justify-center flex-col items-center">
      <div className="w-[70px] h-[70px] bg-gray-500 rounded-[100%] flex justify-around items-center mb-4">
        <div className="w-[58px] h-[58px] bg-black rounded-[100%] flex justify-around items-center">
          <Image src={img} alt={alt} width={30} height={30} />
        </div>
      </div>
      <p className=" font-bold">{title}</p>
      <p className="text-center">{desc}</p>
    </div>
  );
};

const Benefits = () => {
  return (
    <div className="grid gap-2 md:grid-cols-3 sm:grid-cols-1 items-center mx-auto md:mb-40 mb-16">
      <Icon
        title="FREE AND FAST DELIVERY"
        desc="Free delivery for all orders"
        img="/icons/icon-delivery.png"
        alt="delivery for you"
      />

      <Icon
        title="24/7 CUSTOMER SERVICE"
        desc="Friendly 24/7 customer support"
        img="/icons/Icon-headphones.png"
        alt="Support for you"
      />

      <Icon
        title="MONEY BACK GUARANTEE"
        desc="Return within 30 days"
        img="/icons/Icon-shield.png"
        alt="Money back for you"
      />
    </div>
  );
};

export default Benefits;
