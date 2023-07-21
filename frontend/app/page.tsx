import React from "react";
import PropTypes from "prop-types";
import Modal from "@/app/Modal";
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
        next: { revalidate: 420 },
        method: "GET",
      }
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
    "price&category=groceries",
    5
  );

  return (
    <div className="ms:mt-20 mt-6">
      <Modal />
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
