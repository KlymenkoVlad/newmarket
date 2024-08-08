import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import Link from "next/link";
import { MdArrowForward } from "react-icons/md";

const Featured = () => {
  return (
    <div className="relative mx-6 mb-16 ms:mx-24 sm:mb-32">
      <div className="mb-6">
        <div className="mb-6 flex items-center">
          <div className="h-[40px] w-[20px] rounded-[10%] bg-red-500"></div>
          <p className="ml-5 font-medium text-red-500">Featured</p>
        </div>
        <div className="flex">
          <h3 className="text-2xl font-semibold">New Arrival</h3>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-8 text-white">
        <div className="relative col-span-4 row-span-3 flex items-end justify-center bg-gradient-to-r from-slate-800 to-zinc-900 xs:h-[450px] ms:h-[500px] sm:h-[600px] md:col-span-2">
          <Image src="/banners/ps5.png" alt="item" width={511} height={511} />
          <div className="absolute bottom-11 left-11">
            <p className="mb-1 text-2xl font-semibold">PlayStation</p>
            <p className="mb-4">
              Black and White version of the PS5 coming out on sale.
            </p>
            <Link
              href="/product/64a01f7c5904d6a0b0773e84-Playstation%205"
              className="flex items-center underline underline-offset-4 transition-colors hover:text-red-500"
            >
              <p>Shop Now</p> <MdArrowForward />
            </Link>
          </div>
        </div>

        <div className="relative col-span-2 hidden h-[284px] w-[1fr] items-end justify-center bg-gradient-to-r from-neutral-800 to-slate-400 md:flex">
          <Image src="/banners/woman.png" alt="item" width={432} height={286} />
          <div className="absolute bottom-11 left-11">
            <p className="mb-1 text-2xl font-semibold">Women’s Collections</p>
            <p className="mb-4">
              Featured woman collections that <br /> give you another vibe.{" "}
            </p>
            <Link
              href="/product/649215cd1df9c54e0b387814-Blazer"
              className="flex items-center underline underline-offset-4 transition-colors hover:text-red-500"
            >
              <p>Shop Now</p> <MdArrowForward />
            </Link>
          </div>
        </div>

        <div className="relative col-span-2 hidden h-[284px] items-end justify-center bg-gradient-to-r from-stone-800 to-slate-800 md:flex lg:col-span-1">
          <Image
            src="/banners/speaker.png"
            alt="item"
            width={210}
            height={222}
          />
          <div className="absolute bottom-11 left-11">
            <p className="mb-1 text-2xl font-semibold">Speakers</p>
            <p className="mb-4">Wireless speakers </p>
            <Link
              href="/product/64a01e675904d6a0b0773e65-Jbl"
              className="flex items-center underline underline-offset-4 transition-colors hover:text-red-500"
            >
              <p>Shop Now</p> <MdArrowForward />
            </Link>
          </div>
        </div>

        <div className="relative hidden h-[284px] w-[1fr] items-end justify-center bg-gradient-to-r from-neutral-800 to-gray-900 lg:flex">
          <Image
            src="/banners/perfume.png"
            alt="item"
            className="h-[222px] w-[210px]"
            width={210}
            height={220}
          />
          <div className="absolute bottom-11 left-11">
            <p className="mb-1 text-2xl font-semibold">Perfume</p>
            <p className="mb-4">GUCCI INTENSE OUD EDP </p>
            <Link
              href="/product/64a021095904d6a0b0773f6d-Guilty%20Pour%20Homme"
              className="flex items-center underline underline-offset-4 transition-colors hover:text-red-500"
            >
              <p>Shop Now</p> <MdArrowForward />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

Featured.propTypes = {};

export default Featured;
