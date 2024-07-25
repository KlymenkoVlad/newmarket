"use client";
import { baseUrl } from "@/utils/baseUrl";
import Ripples from "react-ripples";
import { useStateContext } from "@/context/StateContext";
import { Product } from "@/types/types";

interface ItemProps {
  text: string;
  product: Product;
}

export default function AddToCartBtn({ text, product }: ItemProps) {
  const { onAdd, quantities } = useStateContext();

  return (
    <div className="ml-5 inline-flex items-center justify-start">
      <Ripples>
        <button
          onClick={() => onAdd(product, quantities)}
          className="w-[150px] rounded-md border-0 bg-red-500 px-4 py-2 text-base font-medium uppercase text-white shadow-md transition-colors duration-500 ease-in-out hover:bg-red-600 focus:outline-none active:bg-red-400"
        >
          {text}
        </button>
      </Ripples>
    </div>
  );
}
