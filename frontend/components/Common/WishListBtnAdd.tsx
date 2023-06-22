"use client";
import baseUrl from "@/utils/baseUrl";
import Ripples from "react-ripples";
import { useStateContext } from "@/context/StateContext";
import { Product } from "@/types/types";
import Image from "next/image";

interface ItemProps {
  product: Product;
}

export default function WishListBtnAdd({ product }: ItemProps) {
  const { onAddWishList } = useStateContext();

  return (
    <button
      type="submit"
      className="ml-10"
      onClick={() => onAddWishList(product)}
    >
      <div className="w-[40px] h-[40px] border flex justify-center items-center hover:bg-neutral-300 transition-colors duration-500 ease-in-out">
        <Image
          src="/icons/wishlist.png"
          alt="wishlist"
          width={32}
          height={32}
        />
      </div>
    </button>
  );
}
