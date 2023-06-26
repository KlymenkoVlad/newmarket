import React from "react";

import ProfileLink from "./ClientSide/ProfileLink";
import HeaderLink from "./ClientSide/HeaderLink";
import Cart from "./ClientSide/Cart/Cart";
import CartBtn from "./ClientSide/CartBtn";
import WishListBtn from "./ClientSide/WishListBtn";
import WishList from "./ClientSide/WishList/WishList";
import Search from "./ClientSide/Header/Search";

const Header = () => {
  return (
    <>
      {/* <div className="text-center h-12 bg-black text-white flex justify-center items-center p-4">
        <p className="mr-5">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        </p>
        <Link href="#" className="underline underline-offset-4">
          Shop Now
        </Link>
      </div> */}
      <div className="h-24 flex justify-around items-center text-black">
        <div className="flex justify-around w-3/5">
          <p className="text-2xl font-medium">New Market</p>
          <HeaderLink />
        </div>
        <div className="flex justify-center items-center ">
          <Search />
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
