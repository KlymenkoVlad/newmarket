"use client";

import Item from "@/components/Common/Item";
import ItemLoading from "@/components/Common/ItemLoading";
import { useStateContext } from "@/context/StateContext";
import Link from "next/link";
import React from "react";

const page = () => {
  const { wishListItems, onRemoveWishList } = useStateContext();
  console.log(wishListItems);
  return (
    <div className="md:mx-0 sm:mx-32 ms:mx-16 mx-4 mb-16 ms:mt-36 mt-24">
      <h1 className="text-center font-bold text-3xl mb-8">Your Wish List</h1>
      <div className="grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8">
        {wishListItems &&
          wishListItems.length > 1 &&
          wishListItems.map((item) => <Item product={item} key={item._id} />)}
      </div>

      {wishListItems.length < 1 && (
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
