"use client";
import { baseUrl } from "@/utils/baseUrl";
import Ripples from "react-ripples";
import { useStateContext } from "@/context/StateContext";
import { Product } from "@/types/types";
import Image from "next/image";

interface ItemProps {
  product: Product;
}

export default function WishListBtnAddForPage({ product }: ItemProps) {
  const { onAddWishList } = useStateContext();

  return (
    <button
      type="submit"
      className="ml-10"
      onClick={() => onAddWishList(product)}
    >
      <div className="flex h-[40px] w-[40px] items-center justify-center border transition-colors duration-500 ease-in-out hover:bg-neutral-300">
        <Image
          src="/icons/Icon-wishlist.svg"
          alt="wishlist"
          width={32}
          height={32}
        />
      </div>
    </button>
  );
}
