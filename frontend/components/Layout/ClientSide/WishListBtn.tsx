"use client";

import Image from "next/image";

import { useStateContext } from "@/context/StateContext";

export default function WishListBtn() {
  const { showWishList, setShowWishList, setShowCart } = useStateContext();

  return (
    <button
      onClick={() => {
        setShowWishList(!showWishList);
        setShowCart(false);
      }}
      className="ml-6 h-[100px] w-[100px] cursor-pointer"
    >
      <Image src="/icons/wishlist.png" alt="wishlist" width={32} height={32} />{" "}
    </button>
  );
}
