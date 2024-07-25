import React from "react";
import Image from "next/image";
import Link from "next/link";

const ItemPromo = () => {
  return (
    <div className="relative mx-auto mb-24 hidden h-[500px] w-3/4 bg-gradient-to-r from-black to-slate-500 p-16 text-white xl:block">
      <div className="">
        <p className="mb-7 text-green-600">Categories</p>
        <p className="text-4xl font-medium">Enhance Your </p>
        <p className="text-4xl font-medium">Music Experience</p>

        <button
          className="mt-8 h-[56px] w-[171px] rounded-md bg-green-600"
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
