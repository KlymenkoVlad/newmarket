"use client";

import { baseUrl } from "@/utils/baseUrl";
import Ripples from "react-ripples";
import { useStateContext } from "@/context/StateContext";
import { Product } from "@/types/types";
import Image from "next/image";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";

interface ItemProps {
  product: Product;
}

export default function WishListBtnAddItem({ product }: ItemProps) {
  const { onAddWishList, wishListItems, onRemoveWishList } = useStateContext();

  return (
    <button
      type="submit"
      className="ml-10 overflow-visible"
      onClick={(event) => {
        event.preventDefault();
        if (wishListItems.some((item) => item._id === product._id)) {
          onRemoveWishList(product);
        } else {
          onAddWishList(product);
        }
      }}
    >
      <div className="absolute right-1 top-4 mx-3 flex h-[30px] w-[30px] items-center justify-center rounded-[100%] bg-white transition-colors duration-500 ease-in-out hover:text-red-500">
        {wishListItems.some((item) => item._id === product._id) ? (
          <MdFavorite className="inline-block text-2xl text-red-600" />
        ) : (
          <MdFavoriteBorder className="inline-block text-2xl" />
        )}
      </div>
    </button>
  );
}
