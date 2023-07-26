"use client";

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/dist/client/link";

import Benefits from "@/components/MainPageComponents/Benefits";

interface WorkerProps {
  name: string;
  desc: string;
  img: string;
}

const Worker = ({ name, desc, img }: WorkerProps) => {
  return (
    <div className="flex justify-around mb-4">
      <div>
        <div className="ms:w-[370px] w-[300px] h-[420px] bg-gray-100 flex justify-center items-end">
          <Image src={img} width={236} height={391} alt="worker" />
        </div>
        <h3 className="text-3xl font-semibold">{name}</h3>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default function Page() {
  return (
    <div className="ms:mx-24 mx-12 lg:mt-40 mt-32 ">
      <div className="flex mb-16">
        <Link href="/" className="text-gray-500">
          Home
        </Link>
        <p className="ml-3 ">/</p>
        <p className="ml-3">Contact</p>
      </div>
      <div className="flex md:flex-row flex-col justify-around my-20 ">
        <div className="mb-8 mx-4">
          <div className="flex items-center mb-5">
            <div className="rounded-full w-[40px] h-[40px] bg-red-500 flex justify-center items-center">
              <Image
                src="/icons/call.svg"
                width={20}
                height={20}
                alt="call icon"
              />
            </div>
            <p className="ml-4 font-medium text-lg">Call to us</p>
          </div>
          <p className="mb-5">We are available 24/7, 7 days a week.</p>
          <p>Phone: +8801611112222</p>
        </div>

        <div className="mx-4">
          <div className="flex items-center mb-5 ">
            <div className="rounded-full w-[40px] h-[40px] bg-red-500 flex justify-center items-center">
              <Image
                src="/icons/call.svg"
                width={20}
                height={20}
                alt="call icon"
              />
            </div>
            <p className="ml-4 font-medium text-lg">Write To US</p>
          </div>
          <p className="mb-5">
            Fill out our form and we will contact you within 24 hours.
          </p>
          <p>
            Emails:{"     "}
            <a href="mailto:klymenvlad@gmail.com">klymenvlad@gmail.com</a>
          </p>
        </div>
      </div>

      <div className="flex xl:flex-row flex-col justify-around mb-24">
        <Worker
          name="Tom Cruise"
          desc="Founder & Chairman"
          img="/about/human3.png"
        />
        <Worker
          name="Emma Watson"
          desc="Managing Director"
          img="/about/human2.png"
        />
        <Worker
          name="Will Smith"
          desc="Product Designer"
          img="/about/human1.png"
        />
      </div>

      <Benefits />
    </div>
  );
}
