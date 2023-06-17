"use client";
import baseUrl from "@/utils/baseUrl";
import Ripples from "react-ripples";

interface ItemProps {
  text: string;
  productId: string;
}

export default function Btn({ text, productId }: ItemProps) {
  return (
    <div className="inline-flex items-center justify-start">
      <Ripples>
        <form
          action={`${baseUrl}/api/buy/create-checkout-session/${productId}`}
          method="POST"
        >
          <button className="border-0 rounded-md px-4 py-2 text-base font-medium text-white uppercase transition-colors duration-500 ease-in-out bg-red-500 shadow-md focus:outline-none hover:bg-red-600 active:bg-red-400">
            {text}
          </button>
        </form>
      </Ripples>
    </div>
  );
}
