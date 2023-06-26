import type { Metadata } from "next";

import { Product } from "@/types/types";
import baseUrl from "@/utils/baseUrl";
import NavMenu from "@/components/Common/NavMenu";
import Item from "@/components/Common/Item";
import InfinitieCategoryProduct from "./InfinitieCategoryProduct";

async function getData(params: string) {
  try {
    const res = await fetch(
      `${baseUrl}/api/item?page=1&limit=5&category=${params}`,
      {
        next: { revalidate: 1 },
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

export const metadata: Metadata = {
  title: "Category",
  description: "",
};

interface Props {
  params: { categorySlug: string };
}

export default async function Page({ params }: Props) {
  const categorySlugUpperCase =
    params.categorySlug.charAt(0).toUpperCase() + params.categorySlug.slice(1);

  return (
    <div className="flex mb-16">
      <NavMenu />

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
            <h3 className=" font-semibold text-2xl">{categorySlugUpperCase}</h3>
          </div>
        </div>
        <InfinitieCategoryProduct params={params} />
      </div>
    </div>
  );
}
