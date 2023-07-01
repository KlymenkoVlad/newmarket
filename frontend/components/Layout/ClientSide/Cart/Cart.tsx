"use client";

import IncDecBtn from "@/app/product/[productId]/IncDecBtn";
import { useStateContext } from "@/context/StateContext";
import Image from "next/image";
import Btn from "./cartBuyBtn";

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
            className={`fixed top-0 right-0 bottom-0  ${
              showCart ? "block" : "hidden"
            } bg-black bg-opacity-50 z-50`}
          >
            <div className="shadow-2xl absolute top-0 right-0 h-screen w-80 bg-white p-4">
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
                <span className="block ml-5">Your cart</span>
                <span className="text-red-500">{`(items: ${totalQuantities} )`}</span>
              </div>

              <div>
                {cartItems.length < 1 && (
                  <div className="flex justify-center mt-8">
                    <div>
                      <h3 className="mb-4  font-semibold leading-none tracking-tight text-gray-900  ">
                        Your shopping bag is empty
                      </h3>
                      <button
                        className="text-white transition-colors duration-500 ease-in-out bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
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
                      <div className="flex mb-5">
                        <div className="w-[80px] h-[80px] bg-gray-100 relative rounded-sm">
                          <div className="w-[80px] h-[80px] flex justify-center items-center">
                            <Image
                              width={30}
                              height={30}
                              src={item.mainPicture}
                              alt="Item for Sale"
                            />
                          </div>
                        </div>

                        <div className="ml-5">
                          <div className="flex">
                            <div>
                              <p className="text-lg font-medium">{item.name}</p>
                              <p className="text-sm font-normal">
                                {item.price}$
                              </p>
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
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
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
                    <div className="mt-14 m-5 flex justify-between">
                      <h3>Subtotal:</h3>
                      <h3>{totalPrice}$</h3>
                    </div>
                    <div className="flex justify-center">
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
