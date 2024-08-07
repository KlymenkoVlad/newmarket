"use client";

import Item from "@/components/Common/Item";
import { useStateContext } from "@/context/StateContext";
import Link from "next/link";
import React from "react";
import "@/components/styles.scss";
import truncateString from "@/utils/truncateString";
import Btn from "@/components/Layout/ClientSide/Cart/cartBuyBtn";
import { MdOutlineClose } from "react-icons/md";

const page = () => {
  const {
    cartItems,
    onRemove,
    toggleCartItemQuanitity,
    totalPrice,
    totalQuantities,
  } = useStateContext();
  return (
    <div className="px-6">
      <h1 className="mb-8 text-center text-3xl font-bold">
        Your Cart{" "}
        <span className="text-red-500">{`(items: ${totalQuantities} )`}</span>
      </h1>
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4">
        {cartItems.length >= 1 &&
          cartItems.map((item, index) => (
            <div key={index} className="mt-4">
              <div className="mb-5 flex justify-center">
                <div className="relative h-[80px] w-[80px] rounded-sm bg-gray-100">
                  <div className="flex h-[80px] w-[80px] items-center justify-center">
                    <img
                      className="h-full w-full"
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
                      className="ml-5 inline-flex h-8 w-8 items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500"
                    >
                      <span className="sr-only">Close menu</span>
                      <MdOutlineClose />
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
          <div className="m-5 mt-14 flex justify-around text-xl font-bold">
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
          <h1 className="mb-8 text-center text-3xl font-bold">
            You don't seem to have added anything here....
          </h1>
          <div className="flex justify-center">
            <button className="mb-2 mr-2 rounded-full bg-red-700 px-5 py-2.5 text-center text-sm font-medium text-white transition-colors duration-500 ease-in-out hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
              <Link href="/all">Continue shopping</Link>
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default page;
