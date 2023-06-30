"use client";

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

export default function BuregerMenu() {
  const { showBurgerMenu, setShowBurgerMenu } = useStateContext();
  const pathname = usePathname();

  return (
    <>
      {showBurgerMenu && (
        <div>
          <div
            className={`fixed top-0 right-0 bottom-0 opacity-95    ${
              showBurgerMenu ? "block" : "hidden"
            } bg-black bg-opacity-50 z-50`}
          >
            <div className="shadow-2xl absolute top-0 right-0 h-screen w-80 bg-white p-4">
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
              <div className="flex">
                <div className=" ml-6">
                  <Link className={`ml-4  `} href="/">
                    <p
                      className={`${
                        pathname == "/" && " text-red-600"
                      } hover:text-red-400 transition-colors duration-600 ease-in-out`}
                    >
                      Home
                    </p>
                  </Link>
                  <Link className={`ml-4 `} href="/contact">
                    <p
                      className={`${
                        pathname == "/contact" && " text-red-600"
                      } hover:text-red-400 transition-colors duration-600 ease-in-out`}
                    >
                      Contact
                    </p>
                  </Link>
                  <Link className={`ml-4 `} href="/about">
                    <p
                      className={`${
                        pathname == "/about" && " text-red-600"
                      } hover:text-red-400 transition-colors duration-600 ease-in-out`}
                    >
                      About
                    </p>
                  </Link>
                  <Link className={`ml-4 `} href="/all">
                    <p
                      className={`${
                        pathname == "/all" && " text-red-600"
                      } hover:text-red-400 transition-colors duration-600 ease-in-out`}
                    >
                      All Products
                    </p>
                  </Link>
                </div>

                <WishListBtn />
              </div>

              <div>
                <h2 className=" font-bold text-xl text-center my-5">
                  All Categories
                </h2>
                <NavMenu burger={false} />
              </div>

              <div>
                <ProfileLink />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
