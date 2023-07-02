import React from "react";
import PropTypes from "prop-types";
import Item from "../Common/Item";
import Image from "next/image";
import baseUrl from "@/utils/baseUrl";
import { Product } from "@/types/types";
import Link from "next/link";

async function getData(sortParam: string) {
  try {
    const res = await fetch(`${baseUrl}/api/item?sort=${sortParam}&limit=4`, {
      next: { revalidate: 1 },
      method: "GET",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return res.json();
  } catch (error) {
    console.error(error);
  }
}

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

          {/* <div className="ml-64 flex absolute right-4">
            <div className="w-[46px] h-[46px] bg-gray-200 rounded-[100%] mx-3 flex items-center justify-center ">
              <Image
                className="absolute max-w-full max-h-full"
                src="/icons/vector.png"
                alt=""
                width={16}
                height={14}
              />
            </div>
            <div className="w-[46px] h-[46px] bg-gray-200 rounded-[100%] mx-3 flex items-center justify-center">
              <Image
                className="absolute max-w-full max-h-full rotate-180"
                src="/icons/vector.png"
                alt=""
                width={16}
                height={14}
              />
            </div>
          </div> */}
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
