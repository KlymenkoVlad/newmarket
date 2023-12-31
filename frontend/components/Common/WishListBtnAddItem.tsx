"use client";

import { baseUrl } from "@/utils/baseUrl";
import Ripples from "react-ripples";
import { useStateContext } from "@/context/StateContext";
import { Product } from "@/types/types";
import Image from "next/image";

interface ItemProps {
  product: Product;
}

export default function WishListBtnAddItem({ product }: ItemProps) {
  const { onAddWishList } = useStateContext();

  return (
    <button
      type="submit"
      className="ml-10 overflow-visible"
      onClick={(event) => {
        event.preventDefault();
        onAddWishList(product);
      }}
    >
      <div className="w-[30px] h-[30px] bg-white hover:bg-gray-200 transition-colors duration-500 ease-in-out focus:bg-gray-600 rounded-[100%] mx-3 flex items-center justify-center absolute right-1 top-4">
        <Image
          className="mt-0.5"
          src="/icons/Icon-wishlist.svg"
          alt="wishlist"
          width={32}
          height={32}
        />
      </div>
    </button>
  );
}
