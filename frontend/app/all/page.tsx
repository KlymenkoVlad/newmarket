import Item from "@/components/Common/Item";
import NavMenu from "@/components/Common/NavMenu";
import { Product } from "@/types/types";
import baseUrl from "@/utils/baseUrl";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Products",
  description: "",
};

interface ProductData {
  product: Product[];
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

export default async function Page() {
  const { product: items }: ProductData = await getData(
    "/api/item?page=1&limit=10"
  );
  const { product: cheapItems }: ProductData = await getData(
    "/api/item?limit=5&page=1&sort=price"
  );

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
            <h3 className=" font-semibold text-2xl">The cheapest</h3>
          </div>
        </div>
        <div className="grid grid-cols-5 gap-8 mb-24">
          {cheapItems && cheapItems.map((item) => <Item product={item} />)}
        </div>
        <div className="mb-6">
          <div className="flex items-center mb-6">
            <div className="w-[20px] h-[40px] bg-red-500 rounded-[10%] "></div>
            <p className="text-red-500 font-medium ml-5">Hot New Releases</p>
          </div>
          <div className="flex">
            <h3 className=" font-semibold text-2xl">Explore Our Products</h3>
          </div>
        </div>
        <div className="grid grid-cols-5 gap-8">
          {items && items.map((item) => <Item product={item} />)}
        </div>
      </div>
    </div>
  );
}
