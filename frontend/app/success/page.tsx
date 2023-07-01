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
    <div className=" text-center flex flex-col items-center justify-center h-[500px]">
      <h1 className="text-3xl font-bold mb-6">Success!</h1>
      <p className="text-lg mb-4">
        Your purchase was successful. Thank you for your order!
      </p>

      <p className="text-lg mb-4">
        if you have any question, you can email me{" "}
        <a className="text-gray-500" href="mailto:klymenvlad@gmail.com">
          klymenvlad@gmail.com
        </a>
      </p>

      <Link
        href="/"
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
      >
        Go to Homepage
      </Link>
    </div>
  );
}
