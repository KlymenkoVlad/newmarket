"use client";

import React from "react";
import { useStateContext } from "@/context/StateContext";
import Image from "next/image";
import Link from "next/link";
import WishListBtn from "./WishListAndCartBtn";
import ProfileLink from "./ProfileLink";
import { usePathname } from "next/navigation";
import {
  MdArrowBackIosNew,
  MdContacts,
  MdFoodBank,
  MdLaptop,
  MdMan,
  MdOutlineContactSupport,
  MdOutlineShoppingBag,
  MdOutlineShoppingCart,
  MdShoppingCartCheckout,
  MdTableRestaurant,
  MdWatch,
  MdWoman,
} from "react-icons/md";
import { IoMdFootball } from "react-icons/io";

export default function BurgerMenu() {
  const { showBurgerMenu, setShowBurgerMenu } = useStateContext();
  const pathname = usePathname();

  return (
    <div
      className={`fixed inset-0 z-50 transform transition-transform duration-500 ease-in-out ${
        showBurgerMenu
          ? "translate-x-0 opacity-100"
          : "translate-x-full opacity-0"
      }`}
    >
      <div
        className={`fixed inset-0 w-full bg-black bg-opacity-50 transition-opacity delay-300 duration-500 ease-in ${
          showBurgerMenu ? "opacity-95" : "opacity-0"
        }`}
        onClick={() => setShowBurgerMenu(false)}
      />
      <div
        className="absolute right-0 top-0 h-full w-80 overflow-y-auto bg-white p-4 shadow-2xl"
        style={{ transition: "transform 0.5s ease-in-out" }}
      >
        <div className="flex space-x-4">
          <div
            className="flex cursor-pointer items-center justify-center text-xl"
            onClick={() => setShowBurgerMenu(false)}
          >
            <MdArrowBackIosNew />
          </div>

          <WishListBtn />
          <ProfileLink notBurgerMenu={false} />
        </div>
        <div className="flex">
          <ul className="ml-6 space-y-6">
            <li className="mt-6">
              <Link
                className={`${
                  pathname == "/" && "text-red-600"
                } duration-600 flex items-center justify-start gap-1 transition-colors ease-in-out hover:text-red-400`}
                href="/"
                onClick={() => setShowBurgerMenu(false)}
              >
                <MdOutlineShoppingBag className="inline-block text-2xl" />
                <p>Home</p>
              </Link>
            </li>

            <li>
              <Link
                className={`${
                  pathname == "/all" && "text-red-600"
                } duration-600 flex items-center justify-start gap-1 transition-colors ease-in-out hover:text-red-400`}
                href="/all"
                onClick={() => setShowBurgerMenu(false)}
              >
                <MdOutlineShoppingCart className="inline-block text-2xl" />
                <p> All Products</p>
              </Link>
            </li>

            <li>
              <Link
                className={`${
                  pathname == "/contact" && "text-red-600"
                } duration-600 flex items-center justify-start gap-1 transition-colors ease-in-out hover:text-red-400`}
                href="/contact"
                onClick={() => setShowBurgerMenu(false)}
              >
                <MdContacts className="inline-block text-2xl" />
                <p>Contacts</p>
              </Link>
            </li>

            <li>
              <Link
                className={`${
                  pathname == "/about" && "text-red-600"
                } duration-600 flex items-center justify-start gap-1 transition-colors ease-in-out hover:text-red-400`}
                href="/about"
                onClick={() => setShowBurgerMenu(false)}
              >
                <MdOutlineContactSupport className="inline-block text-2xl" />
                <p>About</p>
              </Link>
            </li>

            <li>
              <Link
                className={`${
                  pathname == "/category/womanfashion" && "text-red-600"
                } duration-600 flex items-center justify-start gap-1 transition-colors ease-in-out hover:text-red-400`}
                href="/category/womanfashion"
                onClick={() => setShowBurgerMenu(false)}
              >
                <MdWoman className="inline-block text-2xl" />
                <p>Woman’s Fashion</p>
              </Link>
            </li>

            <li>
              <Link
                className={`${
                  pathname == "/category/menfashion" && "text-red-600"
                } duration-600 flex items-center justify-start gap-1 transition-colors ease-in-out hover:text-red-400`}
                href="/category/menfashion"
                onClick={() => setShowBurgerMenu(false)}
              >
                <MdMan className="inline-block text-2xl" />
                <p> Men’s Fashion</p>
              </Link>
            </li>

            <li>
              <Link
                className={`${
                  pathname == "/category/electronics" && "text-red-600"
                } duration-600 flex items-center justify-start gap-1 transition-colors ease-in-out hover:text-red-400`}
                href="/category/electronics"
                onClick={() => setShowBurgerMenu(false)}
              >
                <MdLaptop className="inline-block text-2xl" />
                <p>Electronics</p>
              </Link>
            </li>

            <li>
              <Link
                className={`${
                  pathname == "/category/accessories" && "text-red-600"
                } duration-600 flex items-center justify-start gap-1 transition-colors ease-in-out hover:text-red-400`}
                href="/category/accessories"
                onClick={() => setShowBurgerMenu(false)}
              >
                <MdWatch className="inline-block text-2xl" />
                <p>Accessories</p>
              </Link>
            </li>

            <li>
              <Link
                className={`${
                  pathname == "/category/furniture" && "text-red-600"
                } duration-600 flex items-center justify-start gap-1 transition-colors ease-in-out hover:text-red-400`}
                href="/category/furniture"
                onClick={() => setShowBurgerMenu(false)}
              >
                <MdTableRestaurant className="inline-block text-2xl" />
                <p>Furniture</p>
              </Link>
            </li>

            <li>
              <Link
                className={`${
                  pathname == "/category/football" && "text-red-600"
                } duration-600 flex items-center justify-start gap-1 transition-colors ease-in-out hover:text-red-400`}
                href="/category/football"
                onClick={() => setShowBurgerMenu(false)}
              >
                <IoMdFootball className="inline-block text-2xl" />
                <p>Football</p>
              </Link>
            </li>

            <li>
              <Link
                className={`${
                  pathname == "/category/groceries" && "text-red-600"
                } duration-600 flex items-center justify-start gap-1 transition-colors ease-in-out hover:text-red-400`}
                href="/category/groceries"
                onClick={() => setShowBurgerMenu(false)}
              >
                <MdFoodBank className="inline-block text-2xl" />
                <p>Groceries</p>
              </Link>
            </li>

            <li>
              <Link
                className={`${
                  pathname == "/category/other" && "text-red-600"
                } duration-600 flex items-center justify-start gap-1 transition-colors ease-in-out hover:text-red-400`}
                href="/category/other"
                onClick={() => setShowBurgerMenu(false)}
              >
                <MdShoppingCartCheckout className="inline-block text-2xl" />
                <p>Other</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
