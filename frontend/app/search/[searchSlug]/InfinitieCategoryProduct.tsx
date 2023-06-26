"use client";

import React, { useEffect, useState } from "react";
import Item from "@/components/Common/Item";
import { Product } from "@/types/types";
import baseUrl from "@/utils/baseUrl";
import axios from "axios";
import Image from "next/image";

interface Props {
  params: { searchSlug: string };
}

export default function InfinitieCategoryProduct({ params }: Props) {
  const categorySlugUpperCase =
    params.searchSlug.charAt(0).toUpperCase() + params.searchSlug.slice(1);

  const [items, setItems] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [fetching, setFetching] = useState<boolean>(true);
  const [totalCount, setTotalCount] = useState<number>(0);

  const limit = 10;

  const scrollHandler = (e: Event) => {
    if (
      e.target.documentElement.scrollHeight -
        (e.target.documentElement.scrollTop + window.innerHeight) <=
        300 &&
      items.length - totalCount !== 0
    ) {
      setFetching(true);
    }
  };

  useEffect(() => {
    document.addEventListener("scroll", scrollHandler);

    return function () {
      document.removeEventListener("scroll", scrollHandler);
    };
  }, [totalCount, items]);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const { data } = await axios.get(
          `${baseUrl}/api/item?page=${currentPage}&limit=${limit}&search=${params.searchSlug}`
        );
        setItems((prevItems) => [...prevItems, ...data.product]);
        setCurrentPage((prevPage) => prevPage + 1);
        setTotalCount(+data.total);
        console.log(data);
      } catch (error) {
        console.error(error);
      } finally {
        setFetching(false);
      }
    };

    if (fetching) {
      getProduct();
    }
  }, [fetching]);

  return (
    <>
      <div className="m-auto py-4 px-4 group">
        <div className="flex items-center mb-6">
          <h1 className=" text-black text-3xl font-medium ml-5">
            Find what you need
          </h1>
        </div>
        <div className="mb-6">
          <div className="flex items-center mb-6">
            <div className="w-[20px] h-[40px] bg-red-500 rounded-[10%] "></div>
            <p className="text-red-500 font-medium ml-5">Hot New Releases</p>
          </div>
          <div className="flex">
            <h3 className=" font-semibold text-2xl">
              Items by your search: {categorySlugUpperCase}
            </h3>
          </div>
        </div>
        <div className="grid grid-cols-5 gap-8 mb-24">
          {items.map((item) => (
            <Item product={item} key={item._id} />
          ))}
        </div>
      </div>
    </>
  );
}
