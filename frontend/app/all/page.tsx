import React from "react";
import NavMenu from "@/components/Common/NavMenu";
import type { Metadata } from "next";
import InfinitieAllProduct from "./InfinitieAllProduct";

export const metadata: Metadata = {
  title: "All Products",
  description: "",
};

function Page() {
  return (
    <div className="flex mb-16 ms:mt-14 mt-6">
      <NavMenu />

      <div className="m-auto py-4 px-4 group">
        <div className="mb-6">
          <div className="flex items-center mb-6">
            <div className="w-[20px] h-[40px] bg-red-500 rounded-[10%] "></div>
            <p className="text-red-500 font-medium ml-5">Find what you need</p>
          </div>
          <div className="flex">
            <h3 className=" font-semibold text-2xl">Explore Our Products</h3>
          </div>
        </div>
        <InfinitieAllProduct />
      </div>
    </div>
  );
}

export default Page;
