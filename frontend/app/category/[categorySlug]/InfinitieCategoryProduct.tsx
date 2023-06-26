"use client";

import React, { useEffect, useState } from "react";
import Item from "@/components/Common/Item";
import { Product } from "@/types/types";
import baseUrl from "@/utils/baseUrl";
import axios from "axios";

interface Props {
  params: { categorySlug: string };
}

export default function InfinitieCategoryProduct({ params }: Props) {
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
          `${baseUrl}/api/item?page=${currentPage}&limit=${limit}&category=${params.categorySlug}`
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
    <div className="grid grid-cols-5 gap-8 mb-24">
      {items.map((item) => (
        <Item product={item} key={item._id} />
      ))}
    </div>
  );
}
