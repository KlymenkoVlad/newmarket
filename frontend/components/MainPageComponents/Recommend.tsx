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
    <div className="relative mx-6 sm:mx-24">
      <div className="mb-6">
        <div className="mb-6 flex items-center">
          <div className="h-[40px] w-[20px] rounded-[10%] bg-red-500"></div>
          <p className="ml-5 font-medium text-red-500">{name}</p>
        </div>
        <div className="flex">
          <h3 className="text-2xl font-semibold">Flash Sales</h3>
        </div>
      </div>

      <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">
        {items && items.map((item) => <Item product={item} />)}
      </div>
      <div className="mb-12 flex justify-center">
        <Link href="/all">
          <button
            type="button"
            className="mb-2 mr-2 h-[56px] w-[234px] rounded-md bg-red-600 px-5 py-2.5 text-sm font-medium text-white transition-colors duration-300 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
          >
            View All Products
          </button>
        </Link>
      </div>

      <div className="mb-12 h-px bg-gray-400"></div>
    </div>
  );
}
