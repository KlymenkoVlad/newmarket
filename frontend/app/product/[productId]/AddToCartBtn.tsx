"use client";
import baseUrl from "@/utils/baseUrl";
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
    <div className="inline-flex items-center justify-start ml-5">
      <Ripples>
        <button
          onClick={() => onAdd(product, quantities)}
          className="border-0 w-[150px] rounded-md px-4 py-2 text-base font-medium text-white uppercase transition-colors duration-500 ease-in-out bg-red-500 shadow-md focus:outline-none hover:bg-red-600 active:bg-red-400"
        >
          {text}
        </button>
      </Ripples>
    </div>
  );
}
