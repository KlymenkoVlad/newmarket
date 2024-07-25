"use client";

import { useStateContext } from "@/context/StateContext";

export default function BurgerMenuBtn() {
  const { showBurgerMenu, setShowBurgerMenu, setShowWishList, setShowCart } =
    useStateContext();

  return (
    <div className="ml-3 flex md:order-2">
      <button
        data-collapse-toggle="navbar-sticky"
        type="button"
        className="inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 lg:hidden"
        aria-controls="navbar-sticky"
        aria-expanded="false"
        onClick={() => {
          setShowBurgerMenu(!showBurgerMenu);
          setShowCart(false);
          setShowWishList(false);
        }}
      >
        <span className="sr-only">Open main menu</span>
        <svg
          className="h-6 w-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>
    </div>
  );
}
