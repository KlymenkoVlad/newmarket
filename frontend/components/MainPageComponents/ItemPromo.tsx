import React from "react";
import Image from "next/image";
import Link from "next/link";

const ItemPromo = () => {
  return (
    <div className=" mb-24 xl:block relative hidden w-3/4 h-[500px] mx-auto bg-gradient-to-r from-black to-slate-500 text-white p-16">
      <div className="">
        <p className=" mb-7 text-green-600">Categories</p>
        <p className=" text-4xl font-medium">Enhance Your </p>
        <p className=" text-4xl font-medium">Music Experience</p>
        {/* <div className="flex mt-8">
          <div className="w-[60px] h-[60px] bg-white rounded-[100%] mr-3 text-black text-center pt-1 leading-none">
            <p className=" font-semibold mt-2">23</p>
            <p className="block font-light ">Hours</p>
          </div>
          <div className="w-[60px] h-[60px] bg-white rounded-[100%] mx-3 text-black text-center pt-1 leading-none">
            <p className=" font-semibold mt-2">23</p>
            <p className="block font-light ">Hours</p>
          </div>
          <div className="w-[60px] h-[60px] bg-white rounded-[100%] mx-3 text-black text-center pt-1 leading-none">
            <p className=" font-semibold mt-2">23</p>
            <p className="block font-light ">Hours</p>
          </div>
          <div className="w-[60px] h-[60px] bg-white rounded-[100%] mx-3 text-black text-center pt-1 leading-none">
            <p className=" font-semibold mt-2">23</p>
            <p className="block font-light ">Hours</p>
          </div>
        </div> */}

        <button
          className="w-[171px] h-[56px] rounded-md bg-green-600 mt-8"
          type="submit"
        >
          <Link href="/product/64a01e675904d6a0b0773e65-Jbl">Buy now!</Link>
        </button>
      </div>
      <Image
        className="absolute right-3 top-6"
        width={568}
        height={330}
        src="/banners/jbl.png"
        alt="item for sale"
      />
    </div>
  );
};

ItemPromo.propTypes = {};

export default ItemPromo;
