"use client";

import { useStateContext } from "@/context/StateContext";
import { Product } from "@/types/types";
import truncateString from "@/utils/truncateString";
import Image from "next/image";
import Link from "next/link";
import { MdArrowBackIosNew, MdOutlineClose } from "react-icons/md";

export default function WishList() {
  const { wishListItems, showWishList, setShowWishList, onRemoveWishList } =
    useStateContext();

  return (
    <div
      className={`fixed inset-0 z-50 transform transition-transform duration-500 ease-in-out ${
        showWishList
          ? "translate-x-0 opacity-100"
          : "translate-x-full opacity-0"
      }`}
    >
      <div
        className={`fixed inset-0 w-full bg-black bg-opacity-50 transition-opacity delay-300 duration-500 ease-in ${
          showWishList ? "opacity-95" : "opacity-0"
        }`}
        onClick={() => setShowWishList(false)}
      />
      <div className="absolute right-0 top-0 h-screen w-80 bg-white p-2 shadow-2xl">
        <div
          className="flex cursor-pointer items-center"
          onClick={() => setShowWishList(false)}
        >
          <MdArrowBackIosNew className="text-xl" />
        </div>

        <div className="h-full overflow-y-auto">
          {wishListItems.length < 1 && (
            <div className="mt-8 flex justify-center">
              <div>
                <h3 className="mb-4 font-bold leading-none tracking-tight text-gray-900">
                  Your wish list is empty
                </h3>
                <button
                  className="mb-2 mr-2 rounded-full bg-red-700 px-5 py-2.5 text-center text-sm font-medium text-white transition-colors duration-500 ease-in-out hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                  onClick={() => setShowWishList(false)}
                >
                  Continue shopping
                </button>
              </div>
            </div>
          )}

          {wishListItems.length >= 1 &&
            wishListItems.length < 7 &&
            wishListItems.map((item: Product, index: number) => (
              <div key={index} className="mt-4">
                <div className="mb-5 flex">
                  <Link
                    href="/product/[id]-[name]"
                    as={`/product/${item._id}-${item.name}`}
                    shallow
                  >
                    <div className="relative h-[80px] w-[80px] rounded-sm bg-gray-100">
                      <div className="flex h-[80px] w-[80px] items-center justify-center">
                        <img
                          className="h-full w-full"
                          src={item.mainPicture}
                          alt="Item for Sale"
                        />
                      </div>
                    </div>
                  </Link>

                  <div className="ml-5">
                    <div className="flex">
                      <div>
                        <p className="text-lg font-medium">
                          {truncateString(item.name, 20)}
                        </p>
                        <p className="text-sm font-normal">{item.price}$</p>
                      </div>

                      <button
                        type="button"
                        onClick={() => onRemoveWishList(item)}
                        className="ml-5 inline-flex h-8 w-8 items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500"
                      >
                        <span className="sr-only">Close menu</span>
                        <MdOutlineClose />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}

          {wishListItems.length >= 7 &&
            wishListItems.slice(0, 7).map((item: Product, index: number) => (
              <div key={index} className="mt-4">
                <div className="mb-5 flex">
                  <Link
                    href="/product/[id]-[name]"
                    as={`/product/${item._id}-${item.name}`}
                    shallow
                  >
                    <div className="relative h-[80px] w-[80px] rounded-sm bg-gray-100">
                      <div className="flex h-[80px] w-[80px] items-center justify-center">
                        <img
                          className="h-full w-full"
                          src={item.mainPicture}
                          alt="Item for Sale"
                        />
                      </div>
                    </div>
                  </Link>

                  <div className="ml-5">
                    <div className="flex">
                      <div>
                        <p className="text-lg font-medium">
                          {truncateString(item.name, 20)}
                        </p>
                        <p className="text-sm font-normal">{item.price}$</p>
                      </div>

                      <button
                        type="button"
                        onClick={() => onRemoveWishList(item)}
                        className="ml-5 inline-flex h-8 w-8 items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500"
                      >
                        <span className="sr-only">Close menu</span>
                        <MdOutlineClose />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          {wishListItems.length > 4 && (
            <div className="mx-auto mb-4 flex text-center">
              <Link href="/wishlist">
                <button
                  type="button"
                  onClick={() => setShowWishList(false)}
                  className="mb-2 justify-self-start rounded-lg bg-red-700 px-2 py-2.5 text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300"
                >
                  Show all {wishListItems.length} wished products on a page
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
