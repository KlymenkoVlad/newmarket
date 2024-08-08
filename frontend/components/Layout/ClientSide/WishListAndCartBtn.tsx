"use client";

import Image from "next/image";

import { useStateContext } from "@/context/StateContext";
import { MdFavoriteBorder, MdOutlineShoppingCart } from "react-icons/md";

export default function WishListBtn() {
  const {
    showWishList,
    setShowWishList,
    showCart,
    setShowCart,
    setShowBurgerMenu,
  } = useStateContext();

  return (
    <div className="flex items-center justify-center space-x-4">
      <button
        onClick={() => {
          setShowWishList(!showWishList);
          setShowCart(false);
          setShowBurgerMenu(false);
        }}
        className="cursor-pointer"
      >
        <MdFavoriteBorder className="inline-block text-2xl transition-colors hover:text-red-500" />
      </button>

      <button
        onClick={() => {
          setShowCart(!showCart);
          setShowWishList(false);
          setShowBurgerMenu(false);
        }}
        className="cursor-pointer"
      >
        <MdOutlineShoppingCart className="inline-block text-2xl transition-colors hover:text-red-500" />
      </button>
    </div>
  );
}
