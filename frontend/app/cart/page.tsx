"use client";

import Item from "@/components/Common/Item";
import { useStateContext } from "@/context/StateContext";
import Link from "next/link";
import React from "react";
import "@/components/styles.scss";
import truncateString from "@/utils/truncateString";
import Btn from "@/components/Layout/ClientSide/Cart/cartBuyBtn";

const page = () => {
  const {
    cartItems,
    onRemove,
    toggleCartItemQuanitity,
    totalPrice,
    totalQuantities,
  } = useStateContext();
  return (
    <div className="md:mx-16 sm:mx-32 ms:mx-16 mx-4 mb-16 ms:mt-36 mt-24">
      <h1 className="text-center font-bold text-3xl mb-8">
        Your Cart{" "}
        <span className="text-red-500">{`(items: ${totalQuantities} )`}</span>
      </h1>
      <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8">
        {cartItems.length >= 1 &&
          cartItems.map((item, index) => (
            <div key={index} className="mt-4">
              <div className="flex mb-5 justify-center">
                <div className="w-[80px] h-[80px] bg-gray-100 relative rounded-sm">
                  <div className="w-[80px] h-[80px] flex justify-center items-center">
                    <img
                      className="w-full h-full"
                      src={item.mainPicture}
                      alt="Item for Sale"
                    />
                  </div>
                </div>

                <div className="ml-5">
                  <div className="flex">
                    <div>
                      <p className="text-base font-medium">
                        {truncateString(item.name, 20)}
                      </p>
                      <p className="text-sm font-normal">{item.price}$</p>
                    </div>

                    <button
                      type="button"
                      onClick={() => onRemove(item)}
                      className="ml-5 h-8 w-8 bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500"
                    >
                      <span className="sr-only">Close menu</span>
                      <svg
                        className="h-[30px] w-[30px]"
                        // xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>

                  <div className="container flex justify-center">
                    <span
                      className="minus"
                      onClick={() => toggleCartItemQuanitity(item._id, "dec")}
                    >
                      <span></span>
                    </span>
                    <span className="num">{item.quantity}</span>
                    <span
                      className="plus"
                      onClick={() => toggleCartItemQuanitity(item._id, "inc")}
                    >
                      <span></span>
                      <span></span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>

      {cartItems.length >= 1 && (
        <>
          <div className="mt-14 m-5 flex justify-around text-xl font-bold">
            <h3>Subtotal:</h3>
            <h3>{totalPrice}$</h3>
          </div>
          <div className="flex justify-center">
            <Btn cartItems={cartItems} />
          </div>
        </>
      )}

      {cartItems.length < 1 && (
        <>
          <h1 className="font-bold text-3xl mb-8 text-center">
            You don't seem to have added anything here....
          </h1>
          <div className="flex justify-center">
            <button className=" text-white transition-colors duration-500 ease-in-out bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
              <Link href="/all">Continue shopping</Link>
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default page;
