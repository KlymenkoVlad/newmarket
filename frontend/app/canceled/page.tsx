"use client";

import { useEffect } from "react";
import Link from "next/link";

import { useStateContext } from "@/context/StateContext";

export default function Page() {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();

  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
  }, []);

  return (
    <div className="my-24 flex flex-col items-center justify-center text-center">
      <h1 className="mb-6 text-3xl font-bold">Canceled</h1>
      <p className="mb-4 text-lg">Your purchase was canceled.</p>

      <p className="mb-4 text-lg">
        If you have any further inquiries, please contact our customer support.{" "}
        <a className="text-gray-500" href="mailto:klymenvlad@gmail.com">
          klymenvlad@gmail.com
        </a>
      </p>
      <Link
        href="/"
        className="rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
      >
        Go to Homepage
      </Link>
    </div>
  );
}
