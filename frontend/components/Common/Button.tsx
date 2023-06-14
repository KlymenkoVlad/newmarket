"use client";
import { FC } from "react";
import Ripples from "react-ripples";

interface ItemProps {
  text: string;
}

export default function Button({ text }: ItemProps) {
  return (
    <div className="inline-flex items-center justify-start">
      <Ripples>
        <button
          className="border-0 rounded-md px-4 py-2 text-base font-medium text-white uppercase transition-colors duration-500 ease-in-out bg-red-500 shadow-md focus:outline-none hover:bg-red-600 active:bg-red-400"
          type="submit"
        >
          {text}
        </button>
      </Ripples>
    </div>
  );
}
