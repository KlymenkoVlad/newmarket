"use client";

import React, { useEffect, useState } from "react";
import Item from "@/components/Common/Item";
import NavMenu from "@/components/Common/NavMenu";
import { Product } from "@/types/types";
import baseUrl from "@/utils/baseUrl";
import type { Metadata } from "next";
import axios from "axios";
import ItemLoading from "@/components/Common/ItemLoading";
import { MouseEvent } from "react";

interface ProductData {
  product: Product[];
  total: number;
}

async function getData(url: string) {
  try {
    const res = await fetch(`${baseUrl}${url}`, {
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

export default function InfinitieAllProduct() {
  const [items, setItems] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [fetching, setFetching] = useState<boolean>(true);
  const [totalCount, setTotalCount] = useState<number>(0);
  const [end, setEnd] = useState(false);

  const limit = 10;

  const scrollHandler = (e: MouseEvent) => {
    console.log("items.length:", items.length);
    console.log("totalCount", totalCount);
    console.log("items.length - totalCount", items.length - totalCount);
    if (
      e.target.documentElement?.scrollHeight -
        (e.target.documentElement.scrollTop + window.innerHeight) <=
        300 &&
      items.length - totalCount !== 0
    ) {
      setFetching(true);
    }

    if (items.length - totalCount === 0) {
      setEnd(true);
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
          `${baseUrl}/api/item?page=${currentPage}&limit=${limit}`
        );
        setItems((prevItems) => [...prevItems, ...data.product]);
        setCurrentPage((prevPage) => prevPage + 1);
        setTotalCount(+data.total);
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
      <div className="grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8">
        {items.map((item) => (
          <Item product={item} key={item._id} />
        ))}
        {fetching &&
          Array.from({ length: 5 }).map((_, i) => <ItemLoading key={i} />)}
      </div>

      {end && items.length !== 0 && (
        <h3 className=" text-center my-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl ">
          That`s All
        </h3>
      )}

      {items.length <= 0 && !fetching && (
        <h3 className=" text-center mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl ">
          Nothing was found
        </h3>
      )}
    </>
  );
}
