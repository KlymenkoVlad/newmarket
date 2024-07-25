"use client";

import IncDecBtn from "@/app/product/[productId]/IncDecBtn";
import { useStateContext } from "@/context/StateContext";
import Image from "next/image";
import Btn from "./cartBuyBtn";
import truncateString from "@/utils/truncateString";
import "@/components/styles.scss";
export default function Cart() {
  const {
    cartItems,
    showCart,
    setShowCart,
    totalPrice,
    totalQuantities,
    toggleCartItemQuanitity,
    onRemove,
  } = useStateContext();

  return (
    <>
      {showCart && (
        <div>
          <div
            className={`fixed bottom-0 right-0 top-0 h-full ${
              showCart ? "block" : "hidden"
            } z-50 bg-black bg-opacity-50`}
          >
            <div className="absolute right-0 top-0 h-screen w-80 bg-white p-2 shadow-2xl">
              <div
                className="flex cursor-pointer"
                onClick={() => setShowCart(false)}
              >
                <Image
                  width={15}
                  height={15}
                  src="/icons/arrow-left-black.svg"
                  alt="arrow"
                />
                <span className="ml-5 block">Your cart</span>
                <span className="text-red-500">{`(items: ${totalQuantities} )`}</span>
              </div>

              <div className="h-full overflow-y-auto">
                {cartItems.length < 1 && (
                  <div className="mt-8 flex justify-center">
                    <div>
                      <h3 className="mb-4 font-semibold leading-none tracking-tight text-gray-900">
                        Your shopping bag is empty
                      </h3>
                      <button
                        className="mb-2 mr-2 rounded-full bg-red-700 px-5 py-2.5 text-center text-sm font-medium text-white transition-colors duration-500 ease-in-out hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                        onClick={() => setShowCart(false)}
                      >
                        Continue shopping
                      </button>
                    </div>
                  </div>
                )}

                {cartItems.length >= 1 &&
                  cartItems.map((item, index) => (
                    <div key={index} className="mt-4">
                      <div className="mb-5 flex">
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
                              <p className="text-sm font-normal">
                                {item.price}$
                              </p>
                            </div>

                            <button
                              type="button"
                              onClick={() => onRemove(item)}
                              className="ml-5 inline-flex h-8 w-8 items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500"
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
                              onClick={() =>
                                toggleCartItemQuanitity(item._id, "dec")
                              }
                            >
                              <span></span>
                            </span>
                            <span className="num">{item.quantity}</span>
                            <span
                              className="plus"
                              onClick={() =>
                                toggleCartItemQuanitity(item._id, "inc")
                              }
                            >
                              <span></span>
                              <span></span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}

                {cartItems.length >= 1 && (
                  <>
                    <div className="m-5 mt-14 flex justify-between">
                      <h3>Subtotal:</h3>
                      <h3>{totalPrice}$</h3>
                    </div>
                    <div className="mb-7 flex justify-center">
                      <Btn cartItems={cartItems} />
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
