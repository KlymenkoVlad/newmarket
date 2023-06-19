"use client";
import baseUrl from "@/utils/baseUrl";
import Ripples from "react-ripples";
import { useStateContext } from "@/context/StateContext";

interface User {
  user: {
    createdAt: string;
    email: string;
    name: string;
    profilePicUrl: string;
    role: string;
    updatedAt: string;
    __v: number;
    _id: string;
  };
}
interface ItemProps {
  text: string;
  product: {
    _id: string;
    user: User;
    name: string;
    price: number;
    mainPicture: string;
    pictures?: string[];
    description: string;
    quantity: number;
    pastPrice?: number;
    category: never[] | string[];
    rating: number;
    date: string;
    __v: number;
  };
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
