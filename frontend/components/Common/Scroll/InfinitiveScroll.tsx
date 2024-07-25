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

  const [selectedValue, setSelectedValue] = useState<string>("-date");

  const [tempPriceFrom, setTempPriceFrom] = useState<number>(0);
  const [tempPriceTo, setTempPriceTo] = useState<number>(999999);

  const [priceFrom, setPriceFrom] = useState<number>(0);
  const [priceTo, setPriceTo] = useState<number>(999999);

  const handlePriceFromChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setTempPriceFrom(Number(event.target.value));
  };

  const handlePriceToChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTempPriceTo(Number(event.target.value));
  };

  const handleApplyPrice = () => {
    setPriceFrom(tempPriceFrom);
    setPriceTo(tempPriceTo);
    setItems([]);
    setCurrentPage(1);
    setTotalCount(0);
    setEnd(false);
    setFetching(true);
  };

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value);
    setItems([]);
    setCurrentPage(1);
    setTotalCount(0);
    setEnd(false);

    setFetching(true);
  };

  const limit = 10;

  let url: string;
  let categorySlugUpperCase: string | null = null;
  if (type === "all") {
    url = `/item?page=${currentPage}&limit=${limit}&sort=${selectedValue}&price[lte]=${priceTo}&price[gte]=${priceFrom}`;
  } else if (params && type === "myproducts" && "userId" in params) {
    url = `/item/user/${params.userId}?page=${currentPage}&limit=${limit}&price[lte]=${priceTo}&price[gte]=${priceFrom}&sort=${selectedValue}`;
  } else if (params && type === "categories" && "categorySlug" in params) {
    url = `/item?page=${currentPage}&limit=${limit}&category=${params.categorySlug}&price[lte]=${priceTo}&price[gte]=${priceFrom}&sort=${selectedValue}`;
  } else if (params && type === "search" && "searchSlug" in params) {
    url = `/item?page=${currentPage}&limit=${limit}&price[lte]=${priceTo}&price[gte]=${priceFrom}&search=${params.searchSlug}&sort=${selectedValue}`;
    categorySlugUpperCase =
      params.searchSlug.charAt(0).toUpperCase() + params.searchSlug.slice(1);
  } else {
    console.error("Invalid params");
    return null;
  }

  const scrollHandler = (e: Event) => {
    if (end) return;

    if (
      document.documentElement?.scrollHeight -
        (document.documentElement.scrollTop + window.innerHeight) <=
        300 &&
      items.length - totalCount !== 0
    ) {
      setFetching(true);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
      <div className="grid grid-cols-1 items-center gap-3 md:mx-4 md:grid-cols-2">
        <div className="block">
          <div>
            <label
              htmlFor="Sort"
              className="mb-2 block text-sm font-medium text-gray-900"
            >
              Select an option
            </label>
            <select
              id="Sort"
              name="select"
              value={selectedValue}
              className="mb-8 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-red-500 focus:ring-red-500 md:w-64"
              onChange={handleSelectChange}
            >
              <option value="-date">Novelties</option>
              <option value="price">Cheap to expensive</option>
              <option value="-price">Expensive to cheap</option>
              <option value="-rating">By rating</option>
            </select>
          </div>
        </div>

        <div className="block items-center justify-center md:flex">
          <p className="mr-4">Price:</p>
          <div className="flex items-center">
            <input
              type="number"
              id="priceFrom"
              onChange={handlePriceFromChange}
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-red-500 focus:ring-red-500"
              placeholder="0"
              required
            />
          </div>
          <div className="mx-4 text-center">-</div>
          <div className="flex items-center">
            <input
              type="number"
              id="priceTo"
              onChange={handlePriceToChange}
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-red-500 focus:ring-red-500"
              placeholder="99999"
              required
            />
          </div>
          <div className="block justify-start md:flex">
            <button
              type="button"
              onClick={handleApplyPrice}
              className="my-4 rounded-lg border border-red-700 px-5 py-2.5 text-center text-sm font-medium text-red-700 hover:bg-red-800 hover:text-white focus:outline-none focus:ring-4 focus:ring-red-300 md:my-0 md:ml-4"
            >
              Apply
            </button>
          </div>
        </div>
      </div>

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
