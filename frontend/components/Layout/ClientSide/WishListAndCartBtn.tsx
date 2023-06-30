"use client";

import Image from "next/image";

import { useStateContext } from "@/context/StateContext";

export default function WishListBtn() {
  const {
    showWishList,
    setShowWishList,
    showCart,
    setShowCart,
    setShowBurgerMenu,
  } = useStateContext();

  return (
    <>
      <button
        onClick={() => {
          setShowWishList(!showWishList);
          setShowCart(false);
          setShowBurgerMenu(false);
        }}
        className="ml-10 h-[50px] w-[50px] cursor-pointer"
      >
        <Image
          src="/icons/wishlist.png"
          alt="wishlist"
          width={32}
          height={32}
        />
      </button>

      <button
        onClick={() => {
          setShowCart(!showCart);
          setShowWishList(false);
          setShowBurgerMenu(false);
        }}
        className="h-[50px] w-[50px] cursor-pointer"
      >
        <Image src="/icons/cart.png" alt="cart" width={32} height={32} />
      </button>
    </>
  );
}
