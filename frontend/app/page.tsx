import React from "react";
import { baseUrl } from "@/utils/baseUrl";
import { Product } from "@/types/types";

import BannerSection from "@/components/MainPageComponents/BannerSection";
import Recommend from "@/components/MainPageComponents/Recommend";
import Categories from "@/components/MainPageComponents/Categories";
import ItemPromo from "@/components/MainPageComponents/ItemPromo";
import Featured from "@/components/MainPageComponents/Featured";
import Benefits from "@/components/MainPageComponents/Benefits";

async function getData(sortParam: string, limit = 4) {
  try {
    const res = await fetch(
      `${baseUrl}/api/item?sort=${sortParam}&limit=${limit}`,
      {
        next: { revalidate: 1 },
        method: "GET",
      },
    );

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return res.json();
  } catch (error) {
    console.error(error);
  }
}

interface ProductData {
  product: Product[];
}

const page = async ({}) => {
  const { product: cheapItems }: ProductData = await getData("price");
  const { product: newItems }: ProductData = await getData("-date");
  const { product: slideItems }: ProductData = await getData(
    "sort=-rating,price",
    10,
  );

  return (
    <div className="">
      <BannerSection slideItems={slideItems} />
      <Recommend name="The cheapest" items={cheapItems} />
      <Categories />
      <ItemPromo />
      <Recommend name="Interesting New" items={newItems} />
      <Featured />
      <Benefits />
    </div>
  );
};

export default page;
