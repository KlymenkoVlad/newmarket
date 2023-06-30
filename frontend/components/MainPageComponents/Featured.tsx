import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import Link from "next/link";

const Featured = (props) => {
  return (
    <div className="ms:mx-24 mx-6 relative sm:mb-32 mb-16">
      <div className="mb-6">
        <div className="flex items-center mb-6">
          <div className="w-[20px] h-[40px] bg-red-500 rounded-[10%] "></div>
          <p className="text-red-500 font-medium ml-5">Featured</p>
        </div>
        <div className="flex">
          <h3 className=" font-semibold text-2xl">New Arrival</h3>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-8  text-white">
        <div className=" bg-gradient-to-r from-slate-800 to-zinc-900 sm:h-[600px] ms:h-[500px] xs:h-[450px] row-span-3 md:col-span-2 col-span-4 flex justify-center items-end relative">
          <Image src="/banners/ps5.png" alt="item" width={511} height={511} />
          <div className="absolute left-11 bottom-11">
            <p className=" font-semibold text-2xl mb-1">PlayStation</p>
            <p className="mb-4">
              Black and White version of the PS5 coming out on sale.
            </p>
            <Link href="#" className="underline underline-offset-4 flex">
              Shop Now
              <Image
                className="ml-2"
                src="/icons/arrow-right.png"
                alt="link"
                width={16}
                height={14}
              />
            </Link>
          </div>
        </div>

        <div className=" bg-gradient-to-r from-neutral-800 to-slate-400 w-[1fr] h-[284px] md:flex hidden  col-span-2  justify-center items-end relative">
          <Image src="/banners/woman.png" alt="item" width={432} height={286} />
          <div className="absolute left-11 bottom-11">
            <p className=" font-semibold text-2xl mb-1">Women’s Collections</p>
            <p className="mb-4">
              Featured woman collections that <br /> give you another vibe.{" "}
            </p>
            <Link href="#" className="underline underline-offset-4 flex">
              Shop Now
              <Image
                className="ml-2"
                src="/icons/arrow-right.png"
                alt="link"
                width={16}
                height={14}
              />
            </Link>
          </div>
        </div>

        <div className=" bg-gradient-to-r from-stone-800 to-slate-800  h-[284px] md:flex hidden col-span-2 lg:col-span-1  justify-center items-end relative">
          <Image
            src="/banners/speaker.png"
            alt="item"
            width={210}
            height={222}
          />
          <div className="absolute left-11 bottom-11">
            <p className=" font-semibold text-2xl mb-1">Speakers</p>
            <p className="mb-4">Amazon wireless speakers </p>
            <Link href="#" className="underline underline-offset-4 flex">
              Shop Now
              <Image
                className="ml-2"
                src="/icons/arrow-right.png"
                alt="link"
                width={16}
                height={14}
              />
            </Link>
          </div>
        </div>

        <div className=" bg-gradient-to-r from-neutral-800 to-gray-900 w-[1fr] h-[284px] hidden lg:flex  justify-center items-end relative">
          <Image
            src="/banners/perfume.png"
            alt="item"
            className="w-[210px] h-[222px]"
            width={210}
            height={220}
          />
          <div className="absolute left-11 bottom-11">
            <p className=" font-semibold text-2xl mb-1">Perfume</p>
            <p className="mb-4">GUCCI INTENSE OUD EDP </p>
            <Link href="#" className="underline underline-offset-4 flex">
              Shop Now
              <Image
                className="ml-2"
                src="/icons/arrow-right.png"
                alt="link"
                width={16}
                height={14}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

Featured.propTypes = {};

export default Featured;
