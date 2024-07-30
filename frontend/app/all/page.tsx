import React from "react";
import type { Metadata } from "next";
import InfinitiveScroll from "@/components/Common/Scroll/InfinitiveScroll";

export const metadata: Metadata = {
  title: "All Products",
  description: "",
};

function Page() {
  return (
    <div className="mb-16 flex">
      <div className="group m-auto px-4 py-4">
        <div className="mb-6">
          <div className="mb-6 flex items-center">
            <div className="h-[40px] w-[20px] rounded-[10%] bg-red-500"></div>
            <p className="ml-5 font-medium text-red-500">Find what you need</p>
          </div>
          <div className="flex">
            <h3 className="text-2xl font-semibold">Explore Our Products</h3>
          </div>
        </div>
        <InfinitiveScroll type="all" />
      </div>
    </div>
  );
}

export default Page;
