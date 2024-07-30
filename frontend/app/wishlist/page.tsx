"use client";

import Item from "@/components/Common/Item";
import ItemLoading from "@/components/Common/ItemLoading";
import { useStateContext } from "@/context/StateContext";
import Link from "next/link";
import React from "react";

const page = () => {
  const { wishListItems, onRemoveWishList } = useStateContext();
  return (
    <div className="mx-4 my-24">
      <h1 className="mb-8 text-center text-3xl font-bold">Your Wish List</h1>
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        {wishListItems &&
          wishListItems.length > 1 &&
          wishListItems.map((item) => <Item product={item} key={item._id} />)}
      </div>

      {wishListItems.length < 1 && (
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
