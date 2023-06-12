import React from "react";

import "../styles.scss";
import Image from "next/image";
import Link from "next/link";
import ProfileLink from "./ClientSide/ProfileLink";
import Cookies from "js-cookie";

const Header = () => {
  const token = Cookies.get("token");

  return (
    <>
      <div className="text-center h-12 bg-black text-white flex justify-center items-center p-4">
        <p className="mr-5">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        </p>
        <Link href="#" className="underline underline-offset-4">
          Shop Now
        </Link>
      </div>
      <div className="h-24 flex justify-around items-center text-black">
        <p className="text-2xl font-medium">Exclusive</p>
        <div>
          <Link className={`ml-4 link`} href="/">
            Home
          </Link>
          <Link className={`ml-4 link`} href="/contact">
            Contact
          </Link>
          <Link className={`ml-4 link`} href="/about">
            About
          </Link>
          <Link className={`ml-4 link`} href="/all">
            All Products
          </Link>
        </div>
        <div className="flex">
          <input type="text" placeholder="What are you looking for?" />
          <Link href="/wishlist" className="ml-4 h-full w-full cursor-pointer">
            <Image
              src="/icons/wishlist.png"
              alt="wishlist"
              width={32}
              height={32}
            />
          </Link>

          <Link href="/cart" className="ml-4 h-full w-full cursor-pointer">
            <Image src="/icons/cart.png" alt="cart" width={32} height={32} />
          </Link>

          <ProfileLink token={token} />
        </div>
      </div>
      <div className="h-px bg-gray-400"></div>
    </>
  );
};

export default Header;
