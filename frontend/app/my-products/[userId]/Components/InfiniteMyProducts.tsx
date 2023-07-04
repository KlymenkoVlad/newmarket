"use client";

import React, { useEffect, useState } from "react";
import { Product } from "@/types/types";
import baseUrl from "@/utils/baseUrl";
import axios from "axios";
import ItemLoading from "@/components/Common/ItemLoading";
import { toast } from "react-hot-toast";
import MyItem from "./MyItem";

interface Props {
  params: { userId: string };
}

export default function InfinitieSearchProduct({ params }: Props) {
  const [items, setItems] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [fetching, setFetching] = useState<boolean>(true);
  const [totalCount, setTotalCount] = useState<number>(0);
  const [end, setEnd] = useState(false);

  const limit = 10;

  const scrollHandler = (e: Event) => {
    if (end) return;

    if (
      !end ||
      document.documentElement?.scrollHeight -
        (document.documentElement.scrollTop + window.innerHeight) <=
        300
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
          `${baseUrl}/api/item/user/${params.userId}?page=${currentPage}`
        );
        setItems((prevItems) => [...prevItems, ...data.product]);
        if (data.product.length < limit) {
          return setEnd(true);
        }
        setCurrentPage((prevPage) => prevPage + 1);
        setTotalCount(+data.results);
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
      <div className=" grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8">
        {items.map((item) => (
          <MyItem product={item} key={item._id} />
        ))}
        {fetching &&
          Array.from({ length: limit }).map((_, i) => <ItemLoading key={i} />)}
      </div>

      {end && items.length !== 0 && (
        <h3 className=" text-center my-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl ">
          That`s All
        </h3>
      )}

      {items.length <= 0 && !fetching && (
        <h3 className=" text-center mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl ">
          I Think you don`t sold anything...
        </h3>
      )}
    </>
  );
}
