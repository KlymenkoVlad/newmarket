import React from "react";

import "../styles.scss";
import Image from "next/image";
import Link from "next/link";
import ProfileLink from "./ClientSide/ProfileLink";
import Cookies from "js-cookie";
import HeaderLink from "./ClientSide/HeaderLink";
import Cart from "./ClientSide/Cart/Cart";
import CartBtn from "./ClientSide/CartBtn";
import WishListBtn from "./ClientSide/WishListBtn";
import WishList from "./ClientSide/WishList/WishList";

const Header = () => {
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
        <p className="text-2xl font-medium">New Market</p>
        <HeaderLink />
        <div className="flex">
          <input type="text" placeholder="What are you looking for?" />
          <WishListBtn />
          <CartBtn />
          <ProfileLink />
        </div>
        <Cart />
        <WishList />
      </div>
      <div className="h-px bg-gray-400"></div>
    </>
  );
};

export default Header;
