"use client";

import IncDecBtn from "@/app/product/[productId]/IncDecBtn";
import { useStateContext } from "@/context/StateContext";
import { Product } from "@/types/types";
import truncateString from "@/utils/truncateString";
import Image from "next/image";
import Link from "next/link";

export default function WishList() {
  const { wishListItems, showWishList, setShowWishList, onRemoveWishList } =
    useStateContext();

  return (
    <>
      {showWishList && (
        <div>
          <div
            className={`fixed top-0 right-0 bottom-0  ${
              showWishList ? "block" : "hidden"
            } bg-black bg-opacity-50 z-50`}
          >
            <div className="shadow-2xl absolute top-0 right-0 h-screen w-80 bg-white p-2">
              <div
                className="flex cursor-pointer"
                onClick={() => setShowWishList(false)}
              >
                <Image
                  width={15}
                  height={15}
                  src="/icons/arrow-left-black.svg"
                  alt="arrow"
                />
              </div>

              <div className=" overflow-y-auto h-full">
                {wishListItems.length < 1 && (
                  <div className="flex justify-center mt-8">
                    <div>
                      <h3 className="mb-4  font-bold leading-none tracking-tight text-gray-900  ">
                        Your wish list is empty
                      </h3>
                      <button
                        className="text-white transition-colors duration-500 ease-in-out bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
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
                      <div className="flex mb-5">
                        <Link
                          href="/product/[id]-[name]"
                          as={`/product/${item._id}-${item.name}`}
                          shallow
                        >
                          <div className="w-[80px] h-[80px] bg-gray-100 relative rounded-sm">
                            <div className="w-[80px] h-[80px] flex justify-center items-center">
                              <img
                                className="w-full h-full"
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
                              <p className="text-sm font-normal">
                                {item.price}$
                              </p>
                            </div>

                            <button
                              type="button"
                              onClick={() => onRemoveWishList(item)}
                              className="ml-5 h-8 w-8 bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500"
                            >
                              <span className="sr-only">Close menu</span>
                              <svg
                                className="h-[30px] w-[30px]"
                                xmlns="http://www.w3.org/2000/svg"
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
                        </div>
                      </div>
                    </div>
                  ))}

                {wishListItems.length >= 7 &&
                  wishListItems
                    .slice(0, 7)
                    .map((item: Product, index: number) => (
                      <div key={index} className="mt-4">
                        <div className="flex mb-5">
                          <Link
                            href="/product/[id]-[name]"
                            as={`/product/${item._id}-${item.name}`}
                            shallow
                          >
                            <div className="w-[80px] h-[80px] bg-gray-100 relative rounded-sm">
                              <div className="w-[80px] h-[80px] flex justify-center items-center">
                                <img
                                  className="w-full h-full"
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
                                <p className="text-sm font-normal">
                                  {item.price}$
                                </p>
                              </div>

                              <button
                                type="button"
                                onClick={() => onRemoveWishList(item)}
                                className="ml-5 h-8 w-8 bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500"
                              >
                                <span className="sr-only">Close menu</span>
                                <svg
                                  className="h-[30px] w-[30px]"
                                  xmlns="http://www.w3.org/2000/svg"
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
                          </div>
                        </div>
                      </div>
                    ))}
                {wishListItems.length > 4 && (
                  <div className="flex text-center mx-auto mb-4">
                    <Link href="/wishlist">
                      <button
                        type="button"
                        onClick={() => setShowWishList(false)}
                        className="justify-self-start focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-2 py-2.5 mb-2 "
                      >
                        Show all {wishListItems.length} wished products on a
                        page
                      </button>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
