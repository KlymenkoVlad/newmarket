"use client";

import { useStateContext } from "@/context/StateContext";
import Link from "next/link";

type NavMenuProps = {
  notBurgerMenu?: boolean;
};

const NavMenu: React.FC<NavMenuProps> = ({ notBurgerMenu = true }) => {
  const disableBurgerMenu = () => {
    if (notBurgerMenu) return;
    setShowBurgerMenu(false);
  };

  const { setShowBurgerMenu } = useStateContext();

  return (
    <div
      className={`  mr-5 ${
        notBurgerMenu ? "lg:flex hidden ml-[40px]" : "flex ml-[24px]"
      }`}
    >
      <ul className="mr-[30px]">
        <li className="mt-6 mb-8 hover:text-red-400 transition-colors duration-600 ease-in-out">
          <Link
            href="category/womanfashion"
            as={`/category/womanfashion`}
            shallow
            onClick={() => disableBurgerMenu()}
          >
            Woman’s Fashion
          </Link>
        </li>
        <li className="mb-8 hover:text-red-400 transition-colors duration-600 ease-in-out">
          <Link
            href="category/menfashion"
            as={`/category/menfashion`}
            shallow
            onClick={() => disableBurgerMenu()}
          >
            Men’s Fashion
          </Link>
        </li>
        <li className="mb-8 hover:text-red-400 transition-colors duration-600 ease-in-out">
          <Link
            href="category/electronics"
            as={`/category/electronics`}
            shallow
            onClick={() => disableBurgerMenu()}
          >
            Electronics
          </Link>
        </li>
        <li className="mb-8 hover:text-red-400 transition-colors duration-600 ease-in-out">
          <Link
            href="category/accessories"
            as={`/category/accessories`}
            shallow
            onClick={() => disableBurgerMenu()}
          >
            Accessories
          </Link>
        </li>
        <li className="mb-8 hover:text-red-400 transition-colors duration-600 ease-in-out">
          <Link
            href="category/furniture"
            as={`/category/furniture`}
            shallow
            onClick={() => disableBurgerMenu()}
          >
            Furniture
          </Link>
        </li>
        <li className="mb-8 hover:text-red-400 transition-colors duration-600 ease-in-out">
          <Link
            href="category/football"
            as={`/category/football`}
            shallow
            onClick={() => disableBurgerMenu()}
          >
            Football
          </Link>
        </li>
        <li className="mb-8 hover:text-red-400 transition-colors duration-600 ease-in-out">
          <Link
            href="category/groceries"
            as={`/category/groceries`}
            shallow
            onClick={() => disableBurgerMenu()}
          >
            Groceries
          </Link>
        </li>
        <li className="mb-8 hover:text-red-400 transition-colors duration-600 ease-in-out">
          <Link
            href="category/other"
            as={`/category/other`}
            shallow
            onClick={() => disableBurgerMenu()}
          >
            <p>Other</p>
          </Link>
        </li>
      </ul>
      {notBurgerMenu && (
        <div className=" mt-[-70px] h-[550px] w-px bg-gray-300 "></div>
      )}
    </div>
  );
};

export default NavMenu;
