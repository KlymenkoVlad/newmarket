"use client";

import Benefits from "@/components/MainPageComponents/Benefits";
import Image from "next/image";
import Link from "next/link";
import AnimationItem from "@/components/Common/AnimationItem";
import {
  MdAttachMoney,
  MdOutlineCases,
  MdOutlineShoppingBag,
} from "react-icons/md";

const BenefitItem = ({
  paragraph,
  header,
  Icon,
}: {
  paragraph: string;
  header: string;
  Icon: React.ComponentType<{ className?: string }>;
}) => {
  return (
    <AnimationItem>
      <div className="mx-4 mb-4 flex h-[230px] w-[270px] flex-col items-center justify-center border">
        <div className="mb-4 flex h-[80px] w-[80px] items-center justify-around rounded-[100%] bg-gray-500">
          <div className="flex h-[58px] w-[58px] items-center justify-center rounded-full bg-black">
            <Icon className="inline-block text-4xl text-white" />
          </div>
        </div>
        <p className="font-bold">{header}</p>
        <p>{paragraph}</p>
      </div>
    </AnimationItem>
  );
};

interface WorkerProps {
  name: string;
  desc: string;
  img: string;
}

const Worker = ({ name, desc, img }: WorkerProps) => {
  return (
    <div className="mb-4 flex justify-around">
      <div>
        <div className="flex h-[420px] w-[300px] items-end justify-center bg-gray-100 ms:w-[370px]">
          <Image src={img} width={236} height={391} alt="worker" />
        </div>
        <h3 className="text-3xl font-semibold">{name}</h3>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default function About() {
  return (
    <>
      <div className="mb-16 flex w-full justify-center text-3xl">
        <Link
          href="/"
          className="text-red-500 transition-colors hover:text-red-700"
        >
          Home
        </Link>
        <p className="ml-3">/</p>
        <p className="ml-3">About</p>
      </div>
      <div className="mb-20 flex items-center justify-center gap-4 p-6">
        <div>
          <div className="max-w-[700px] text-justify">
            <AnimationItem>
              <h1 className="mb-12 text-center text-5xl font-semibold">
                Our Story
              </h1>
            </AnimationItem>
            <AnimationItem>
              <p className="mb-6 text-base">
                Launced in 2015, New Market is South Asia’s premier online
                shopping makterplace with an active presense in Bangladesh.
                Supported by wide range of tailored marketing, data and service
                solutions, New Market has 10,500 sallers and 300 brands and
                serves 3 millioons customers across the region.
              </p>
            </AnimationItem>
            <AnimationItem>
              <p className="mb-6 text-base">
                New Market has more than 1 Million products to offer, growing at
                a very fast. New Market offers a diverse assotment in categories
                ranging from consumer.
              </p>
            </AnimationItem>
          </div>

          <AnimationItem>
            <Image
              src="/about/About.jpg"
              width={705}
              height={609}
              alt="Our customers"
              className="hidden sm:block"
            />
          </AnimationItem>
        </div>
      </div>
      <div className="mb-20 flex flex-col items-center justify-center lg:flex-row">
        <BenefitItem
          header="10.5k "
          paragraph="Sallers active our site"
          Icon={MdOutlineShoppingBag}
        />
        <BenefitItem
          header="45.5k"
          paragraph="Customer active in our site"
          Icon={MdOutlineCases}
        />
        <BenefitItem
          header="25k"
          paragraph="Anual gross sale in our site"
          Icon={MdAttachMoney}
        />
      </div>
      <div className="mb-24 flex flex-col justify-around xl:flex-row">
        <AnimationItem>
          <Worker
            name="Tom Cruise"
            desc="Founder & Chairman"
            img="/about/human3.png"
          />
        </AnimationItem>
        <AnimationItem>
          <Worker
            name="Emma Watson"
            desc="Managing Director"
            img="/about/human2.png"
          />
        </AnimationItem>
        <AnimationItem>
          <Worker
            name="Will Smith"
            desc="Product Designer"
            img="/about/human1.png"
          />
        </AnimationItem>
      </div>
      <Benefits />
    </>
  );
}
