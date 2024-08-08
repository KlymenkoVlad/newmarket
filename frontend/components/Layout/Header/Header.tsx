"use client";

import React from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";
import WishListBtn from "../ClientSide/WishListAndCartBtn";
import ProfileLink from "../ClientSide/ProfileLink";
import SearchForm from "./SearchForm";
import { RxHamburgerMenu } from "react-icons/rx";
import { useStateContext } from "@/context/StateContext";

const Header = () => {
  const pathname = usePathname();
  const { showBurgerMenu, setShowBurgerMenu, setShowWishList, setShowCart } =
    useStateContext();

  return (
    <header className="fixed left-0 top-0 z-20 flex w-full items-center justify-around space-x-2 border-b border-gray-200 bg-white p-2">
      <Link
        className="hidden w-fit whitespace-nowrap p-1 text-2xl font-semibold transition-colors hover:text-red-500 lg:block"
        href="/"
      >
        New Market
      </Link>

      <SearchForm />

      <nav className="flex items-center space-x-4">
        <div className="hidden items-center space-x-4 md:flex">
          <Link href="/">
            <p
              className={`${
                pathname == "/" && "text-red-600"
              } duration-600 font-semibold transition-colors ease-in-out hover:text-red-400`}
            >
              Home
            </p>
          </Link>
          <Link href="/contact">
            <p
              className={`${
                pathname == "/contact" && "text-red-600"
              } duration-600 transition-colors ease-in-out hover:text-red-400`}
            >
              Contact
            </p>
          </Link>
          <Link href="/about">
            <p
              className={`${
                pathname == "/about" && "text-red-600"
              } duration-600 transition-colors ease-in-out hover:text-red-400`}
            >
              About
            </p>
          </Link>
          <Link href="/all">
            <p
              className={`${
                pathname == "/all" && "text-red-600"
              } duration-600 whitespace-nowrap transition-colors ease-in-out hover:text-red-400`}
            >
              All Products
            </p>
          </Link>
        </div>

        <div className="hidden ms:block">
          <WishListBtn />
        </div>
        <div className="hidden sm:block">
          <ProfileLink />
        </div>

        <button
          onClick={() => {
            setShowBurgerMenu(!showBurgerMenu);
            setShowCart(false);
            setShowWishList(false);
          }}
        >
          <RxHamburgerMenu
            className={`inline-block text-2xl transition-transform duration-300 md:hidden ${
              showBurgerMenu ? "rotate-90" : "rotate-0"
            }`}
          />
        </button>
      </nav>
    </header>
  );
};

export default Header;
