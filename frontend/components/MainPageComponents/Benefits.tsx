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
    <div className="flex flex-col items-center justify-center">
      <div className="mb-4 flex h-[70px] w-[70px] items-center justify-around rounded-[100%] bg-gray-500">
        <div className="flex h-[58px] w-[58px] items-center justify-around rounded-[100%] bg-black">
          <Image src={img} alt={alt} width={30} height={30} />
        </div>
      </div>
      <p className="font-bold">{title}</p>
      <p className="text-center">{desc}</p>
    </div>
  );
};

const Benefits = () => {
  return (
    <div className="mx-auto grid items-center gap-2 sm:grid-cols-1 md:grid-cols-3">
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
