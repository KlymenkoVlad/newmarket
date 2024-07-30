"use client";

import { baseUrl } from "@/utils/baseUrl";
import Ripples from "react-ripples";
import { useStateContext } from "@/context/StateContext";
import { Product } from "@/types/types";
import Image from "next/image";
import { MdFavoriteBorder } from "react-icons/md";

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
      <div className="absolute right-1 top-4 mx-3 flex h-[30px] w-[30px] items-center justify-center rounded-[100%] bg-white transition-colors duration-500 ease-in-out hover:bg-gray-200 focus:bg-gray-600">
        <MdFavoriteBorder className="inline-block text-2xl" />
      </div>
    </button>
  );
}
