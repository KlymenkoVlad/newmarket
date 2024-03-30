import React from "react";

import ProfileLink from "./ClientSide/ProfileLink";
import HeaderLink from "./ClientSide/HeaderLink";
import Cart from "./ClientSide/Cart/Cart";
import WishListBtn from "./ClientSide/WishListAndCartBtn";
import WishList from "./ClientSide/WishList/WishList";
import Search from "./ClientSide/Header/Search";
import BurgerMenuBtn from "./ClientSide/Header/BuregerMenuBtn";
import BurgerMenu from "./ClientSide/BurgerMenu";
import Link from "next/link";

const Header = () => {
  return (
    <nav className="bg-white fixed w-full z-20 top-0 left-0 border-b border-gray-200 ">
      <div className=" flex items-center justify-around mx-auto p-4">
        <div className="flex justify-around items-center">
          <Link href="/">
            <h1 className="xl:block lg:hidden text-xl sm:text-2xl font-medium ms:block hidden">
              New Market
            </h1>
          </Link>
          <Search />
          <BurgerMenuBtn />
        </div>
        <div
          className="items-center justify-around hidden w-full lg:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <HeaderLink />
          <WishListBtn />
          <ProfileLink />
        </div>
      </div>
      <Cart />
      <WishList />
      <BurgerMenu />
    </nav>
  );
};

export default Header;
