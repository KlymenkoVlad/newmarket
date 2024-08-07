import React from "react";
import Image from "next/image";
import {
  MdDeliveryDining,
  MdOutlineHeadphones,
  MdOutlineShield,
} from "react-icons/md";
import AnimationItem from "../Common/AnimationItem";

interface IconProps {
  title: string;
  desc: string;
  Icon: React.ComponentType<{ className?: string }>; // Updated type to accept className
}

const Icon = ({ title, desc, Icon }: IconProps) => {
  return (
    <AnimationItem>
      <div className="flex flex-col items-center justify-center">
        <div className="mb-4 flex h-[70px] w-[70px] items-center justify-around rounded-[100%] bg-gray-500">
          <div className="flex h-[58px] w-[58px] items-center justify-around rounded-[100%] bg-black">
            <Icon className="inline-block text-4xl text-white" />
          </div>
        </div>
        <p className="font-bold">{title}</p>
        <p className="text-center">{desc}</p>
      </div>
    </AnimationItem>
  );
};

const Benefits = () => {
  return (
    <div className="mx-auto flex flex-wrap items-center justify-around gap-6 px-6">
      <Icon
        title="FREE AND FAST DELIVERY"
        desc="Free delivery for all orders"
        Icon={MdDeliveryDining}
      />

      <Icon
        title="24/7 CUSTOMER SERVICE"
        desc="Friendly 24/7 customer support"
        Icon={MdOutlineHeadphones}
      />

      <Icon
        title="MONEY BACK GUARANTEE"
        desc="Return within 30 days"
        Icon={MdOutlineShield}
      />
    </div>
  );
};

export default Benefits;
