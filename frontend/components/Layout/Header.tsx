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
    <nav className="fixed left-0 top-0 z-20 w-full border-b border-gray-200 bg-white">
      <div className="mx-auto flex items-center justify-around p-4">
        <div className="flex items-center justify-around">
          <Link href="/">
            <h1 className="hidden text-xl font-medium ms:block sm:text-2xl lg:hidden xl:block">
              New Market
            </h1>
          </Link>
          <Search />
          <BurgerMenuBtn />
        </div>
        <div
          className="hidden w-full items-center justify-around md:order-1 md:w-auto lg:flex"
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
