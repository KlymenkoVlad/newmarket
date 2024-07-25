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

export default function BurgerMenu() {
  const { showBurgerMenu, setShowBurgerMenu } = useStateContext();
  const pathname = usePathname();

  return (
    <>
      {showBurgerMenu && (
        <div>
          <div
            className={`fixed bottom-0 right-0 top-0 opacity-95 ${
              showBurgerMenu ? "block" : "hidden"
            } z-50 bg-black bg-opacity-50`}
          >
            <div
              className="absolute right-0 top-0 h-screen w-80 bg-white p-4 shadow-2xl"
              style={{ transition: "opacity 1s ease-in-out" }}
            >
              <div className="flex">
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

                <div className="flex items-center">
                  <WishListBtn />
                  <ProfileLink notBurgerMenu={false} />
                </div>
              </div>
              <div className="flex">
                <div className="ml-6">
                  <Link
                    className={`ml-4`}
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
                  <Link
                    className={`ml-4`}
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
                  <Link
                    className={`ml-4`}
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
                  <Link
                    className={`ml-4`}
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
                </div>
              </div>

              <div>
                <NavMenu notBurgerMenu={false} />
              </div>

              <div></div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
