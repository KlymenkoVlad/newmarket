"use client";

import React, { useEffect, useState } from "react";
import { Product } from "@/types/types";
import { baseUrl } from "@/utils/baseUrl";
import ItemsDisplay from "./ItemsDisplay";

async function getData(url: string) {
  try {
    const res = await fetch(`${baseUrl}/api${url}`, {
      next: { revalidate: 420 },
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

interface UserParams {
  userId: string;
}

interface CategoryParams {
  categorySlug: string;
}

interface SearchParams {
  searchSlug: string;
}

interface Props {
  params?: UserParams | CategoryParams | SearchParams;
  type: "myproducts" | "categories" | "all" | "search";
}

export default function InfinitiveScroll({ params, type }: Props) {
  const [items, setItems] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [fetching, setFetching] = useState<boolean>(true);
  const [totalCount, setTotalCount] = useState<number>(0);
  const [end, setEnd] = useState(false);

  const limit = 10;

  let url: string;
  let categorySlugUpperCase: string | null = null;
  if (type === "all") {
    url = `/item?page=${currentPage}&limit=${limit}`;
  } else if (params && type === "myproducts" && "userId" in params) {
    url = `/item/user/${params.userId}?page=${currentPage}&limit=${limit}`;
  } else if (params && type === "categories" && "categorySlug" in params) {
    url = `/item?page=${currentPage}&limit=${limit}&category=${params.categorySlug}`;
  } else if (params && type === "search" && "searchSlug" in params) {
    url = `/item?page=${currentPage}&limit=${limit}&search=${params.searchSlug}`;
    categorySlugUpperCase =
      params.searchSlug.charAt(0).toUpperCase() + params.searchSlug.slice(1);
  } else {
    console.error("Invalid params");
    return null; // or display an error message
  }

  console.log(url, type);

  const scrollHandler = (e: Event) => {
    if (end) return;

    if (
      !end ||
      (document.documentElement?.scrollHeight -
        (document.documentElement.scrollTop + window.innerHeight) <=
        300 &&
        items.length - totalCount !== 0)
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
        const { product, total } = await getData(`${url}`);
        if (product.length < 1) {
          return setEnd(true);
        }
        setItems((prevItems) => [...prevItems, ...product]);
        setCurrentPage((prevPage) => prevPage + 1);
        setTotalCount(+total);
        if (product.length < limit) {
          setEnd(true);
        }
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
      <ItemsDisplay
        items={items}
        end={end}
        fetching={fetching}
        type={type}
        categorySlugUpperCase={
          categorySlugUpperCase ? categorySlugUpperCase : null
        }
      />
    </>
  );
}
