"use client";

import React from "react";
import IncDecBtn from "@/app/product/[productId]/IncDecBtn";
import { useStateContext } from "@/context/StateContext";
import { Product } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import HeaderLink from "./HeaderLink";
import WishListBtn from "./WishListAndCartBtn";
import ProfileLink from "./ProfileLink";
import { usePathname } from "next/navigation";
import NavMenu from "@/components/Common/NavMenu";

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
            className="flex cursor-pointer"
            onClick={() => setShowBurgerMenu(false)}
          >
            <Image
              width={15}
              height={15}
              src="/icons/arrow-left-black.svg"
              alt="arrow"
            />
          </div>

          <WishListBtn />
          <ProfileLink notBurgerMenu={false} />
        </div>
        <div className="flex">
          <ul className="ml-6">
            <li>
              <Link
                className="ml-4"
                href="/"
                onClick={() => setShowBurgerMenu(false)}
              >
                <p
                  className={`${
                    pathname == "/" && "text-red-600"
                  } duration-600 transition-colors ease-in-out hover:text-red-400`}
                >
                  Home
                </p>
              </Link>
            </li>
            <li>
              <Link
                className="ml-4"
                href="/contact"
                onClick={() => setShowBurgerMenu(false)}
              >
                <p
                  className={`${
                    pathname == "/contact" && "text-red-600"
                  } duration-600 transition-colors ease-in-out hover:text-red-400`}
                >
                  Contact
                </p>
              </Link>
            </li>

            <li>
              <Link
                className="ml-4"
                href="/about"
                onClick={() => setShowBurgerMenu(false)}
              >
                <p
                  className={`${
                    pathname == "/about" && "text-red-600"
                  } duration-600 transition-colors ease-in-out hover:text-red-400`}
                >
                  About
                </p>
              </Link>
            </li>
            <li>
              <Link
                className="ml-4"
                href="/all"
                onClick={() => setShowBurgerMenu(false)}
              >
                <p
                  className={`${
                    pathname == "/all" && "text-red-600"
                  } duration-600 transition-colors ease-in-out hover:text-red-400`}
                  onClick={() => setShowBurgerMenu(false)}
                >
                  All Products
                </p>
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <NavMenu notBurgerMenu={false} />
        </div>
      </div>
    </div>
  );
}
