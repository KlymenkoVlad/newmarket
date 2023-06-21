"use client";

import Image from "next/image";

import { useStateContext } from "@/context/StateContext";

export default function CartBtn() {
  const { showCart, setShowCart } = useStateContext();

  return (
    <button
      onClick={() => setShowCart(!showCart)}
      className="ml-4 h-full w-full cursor-pointer"
    >
      <Image src="/icons/cart.png" alt="cart" width={32} height={32} />
    </button>
  );
}
