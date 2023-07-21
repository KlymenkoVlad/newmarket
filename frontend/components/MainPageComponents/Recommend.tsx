import React from "react";
import Item from "../Common/Item";
import { Product } from "@/types/types";
import Link from "next/link";

interface RecommendProps {
  name: string;
  items: Product[];
}

export default function Recommend({ name, items }: RecommendProps) {
  return (
    <div className="sm:mx-24 mx-6 relative">
      <div className="mb-6">
        <div className="flex items-center mb-6">
          <div className="w-[20px] h-[40px] bg-red-500 rounded-[10%] "></div>
          <p className="text-red-500 font-medium ml-5">{name}</p>
        </div>
        <div className="flex">
          <h3 className=" font-semibold text-2xl">Flash Sales</h3>
        </div>
      </div>

      <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8 mb-8">
        {items && items.map((item) => <Item product={item} />)}
      </div>
      <div className="flex justify-center mb-12">
        <Link href="/all">
          <button
            type="button"
            className="w-[234px] h-[56px] rounded-md focus:outline-none text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium transition-colors duration-300 text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
          >
            View All Products
          </button>
        </Link>
      </div>

      <div className="h-px bg-gray-400 mb-12"></div>
    </div>
  );
}
