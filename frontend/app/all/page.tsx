import Item from "@/components/Common/Item";
import baseUrl from "@/utils/baseUrl";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "All Products",
  description: "",
};

interface User {
  user: {
    createdAt: string;
    email: string;
    name: string;
    profilePicUrl: string;
    role: string;
    updatedAt: string;
    __v: number;
    _id: string;
  };
}

interface Data {
  data: {
    data: {
      _id: string;
      user: User;
      name: string;
      price: number;
      mainPicture: string;
      pictures?: string[];
      description: string;
      quantity: number;
      pastPrice?: number;
      category: never[] | string[];
      rating: number;
      date: string;
      __v: number;
    }[];
  };
}

async function getData(url: string) {
  try {
    const res = await fetch(`${baseUrl}${url}`, {
      next: { revalidate: 620 },
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
  const { data: items }: Data = await getData("/api/item?page=1&limit=10");
  const { data: cheapItems }: Data = await getData(
    "/api/item?limit=5&page=1&sort=price"
  );

  return (
    <div className="flex mb-16">
      <div className="flex ml-24">
        <ul className="mr-20">
          <li className="mt-6 mb-8">
            <Link href="woman">Woman’s Fashion</Link>
          </li>
          <li className="mb-8">
            <Link href="men">Men’s Fashion</Link>
          </li>
          <li className="mb-8">
            <Link href="electronic">Electronics</Link>
          </li>
          <li className="mb-8">
            <Link href="home">Home & Lifestyle</Link>
          </li>
          <li className="mb-8">
            <Link href="medicine">Medicine</Link>
          </li>
          <li className="mb-8">
            <Link href="sports">Sports & Outdoor</Link>
          </li>
          <li className="mb-8">
            <Link href="baby">Baby’s & Toys</Link>
          </li>
          <li className="mb-8">
            <Link href="pet">Groceries & Pets</Link>
          </li>
          <li className="mb-8">
            <Link href="beauty">Health & Beauty</Link>
          </li>
        </ul>
        <div className=" h-[500px] w-px bg-gray-400"></div>
      </div>

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
          {cheapItems &&
            cheapItems.data.map((item) => (
              <Item
                id={item._id}
                key={item._id}
                name={item.name}
                price={item.price}
                rating={item.rating}
                mainPicture={item.mainPicture}
                pastPrice={item?.pastPrice}
              />
            ))}
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
          {items &&
            items.data.map((item) => (
              <Item
                id={item._id}
                key={item._id}
                name={item.name}
                price={item.price}
                rating={item.rating}
                mainPicture={item.mainPicture}
                pastPrice={item?.pastPrice}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
