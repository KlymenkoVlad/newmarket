"use client";
import baseUrl from "@/utils/baseUrl";
import Ripples from "react-ripples";
import { useStateContext } from "@/context/StateContext";
import { Product } from "@/types/types";

interface ItemProps {
  text: string;
  product: Product;
}

export default function Btn({ text, product }: ItemProps) {
  const { onAdd, quantities, setShowCart } = useStateContext();

  const handleBuyNow = () => {
    onAdd(product, quantities);

    setShowCart(true);
  };

  return (
    <div className="inline-flex items-center justify-start">
      <button
        onClick={handleBuyNow}
        className=" transition-colors duration-500 ease-in-out text-red-700 hover:text-white border border-red-700 hover:bg-red-800  focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 "
      >
        {text}
      </button>
    </div>
  );
}
