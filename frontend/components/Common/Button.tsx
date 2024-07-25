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
          className="rounded-md border-0 bg-red-500 px-4 py-2 text-base font-medium uppercase text-white shadow-md transition-colors duration-500 ease-in-out hover:bg-red-600 focus:outline-none active:bg-red-400"
          type="submit"
        >
          {text}
        </button>
      </Ripples>
    </div>
  );
}
