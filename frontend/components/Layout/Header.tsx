"use client";

import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import "../styles.scss";

const Header = () => {
  const [hasTokenCookie, setHasTokenCookie] = useState(true);

  useEffect(() => {
    setHasTokenCookie(Boolean(Cookies.get("token")));
  }, []);

  return (
    <>
      <div className="text-center h-12 bg-black text-white flex justify-center items-center p-4">
        <p className="mr-5">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        </p>
        <a className="underline underline-offset-4">Shop Now</a>
      </div>
      <div className="h-24 flex justify-around items-center text-black">
        <p className="text-2xl font-medium">Exclusive</p>
        <div>
          <a className={`ml-4 link`} href="/">
            Home
          </a>
          <a className={`ml-4 link`} href="/contact">
            Contact
          </a>
          <a className={`ml-4 link`} href="/about">
            About
          </a>
          {/* <a className={`ml-4 ${style.headLink}`} href="/login">
            Log in
          </a> */}
        </div>
        <div className="flex">
          <input type="text" placeholder="What are you looking for?" />
          <a href="/wishlist" className="ml-4 h-full w-full cursor-pointer">
            <img src="./icons/wishlist.png" alt="wishlist" />
          </a>

          <a href="/cart" className="ml-4 h-full w-full cursor-pointer">
            <img src="./icons/cart.png" alt="cart" />
          </a>

          <a
            href={hasTokenCookie ? "/me" : "/login"}
            className="ml-4 h-full w-full cursor-pointer flex items-center"
          >
            <img src="./icons/user.png" alt="user" />
            <p className="ml-2">{hasTokenCookie ? "Profile" : "Login"}</p>
          </a>
        </div>
      </div>
      <div className="h-px bg-gray-400"></div>
    </>
  );
};

export default Header;
