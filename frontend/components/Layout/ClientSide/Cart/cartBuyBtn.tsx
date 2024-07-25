"use client";
import { baseUrl } from "@/utils/baseUrl";
import Ripples from "react-ripples";
import getStripe from "@/lib/getStripe";
import axios from "axios";
import { toast } from "react-hot-toast";

import { Product } from "@/types/types";

interface BtnProps {
  cartItems: Product[];
}

export default function Btn({ cartItems }: BtnProps) {
  const handleCheckout = async () => {
    try {
      toast.loading("Wait...");

      const stripe = await getStripe();

      const res = await axios.post(
        `${baseUrl}/api/buy/create-checkout-session`,
        JSON.stringify(cartItems),
        {
          headers: {
            "Content-type": "application/json",
          },
        },
      );

      if (res.status === 500) return;

      const data = res.data;

      toast.loading("Redirecting...");

      stripe.redirectToCheckout({ sessionId: data.id });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="inline-flex items-center justify-start">
      <Ripples>
        <button
          onClick={handleCheckout}
          className="rounded-md border-0 bg-red-500 px-4 py-2 text-base font-medium uppercase text-white shadow-md transition-colors duration-500 ease-in-out hover:bg-red-600 focus:outline-none active:bg-red-400"
        >
          Buy
        </button>
      </Ripples>
    </div>
  );
}
