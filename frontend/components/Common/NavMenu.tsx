"use client";

import { useStateContext } from "@/context/StateContext";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoMdFootball } from "react-icons/io";
import {
  MdFoodBank,
  MdLaptop,
  MdMan,
  MdShoppingCartCheckout,
  MdTableRestaurant,
  MdWatch,
  MdWoman,
} from "react-icons/md";

type NavMenuProps = {
  notBurgerMenu?: boolean;
};

const NavMenu: React.FC<NavMenuProps> = ({ notBurgerMenu = true }) => {
  const disableBurgerMenu = () => {
    if (notBurgerMenu) return;
    setShowBurgerMenu(false);
  };

  const pathname = usePathname();

  const { setShowBurgerMenu } = useStateContext();

  return (
    <ul className="mb-10 mt-20 grid w-full grid-cols-1 items-center justify-around gap-3 whitespace-nowrap px-3 text-center font-medium xs:grid-cols-2 sm:grid-cols-4 xl:grid-cols-8">
      <li
        className={`duration-600 transition-colors ease-in-out hover:text-red-400 ${pathname === "/category/womanfashion" && "text-red-600"}`}
      >
        <Link
          href="category/womanfashion"
          as={`/category/womanfashion`}
          shallow
          onClick={() => disableBurgerMenu()}
          className="flex items-center justify-center gap-1"
        >
          <MdWoman className="inline-block min-w-max text-2xl" />
          <p>Woman’s Fashion</p>
        </Link>
      </li>
      <li
        className={`duration-600 transition-colors ease-in-out hover:text-red-400 ${pathname === "/category/menfashion" && "text-red-600"}`}
      >
        <Link
          href="category/menfashion"
          as={`/category/menfashion`}
          shallow
          onClick={() => disableBurgerMenu()}
          className="flex items-center justify-center gap-1"
        >
          <MdMan className="inline-block min-w-max text-2xl" />
          Men’s Fashion
        </Link>
      </li>
      <li
        className={`duration-600 transition-colors ease-in-out hover:text-red-400 ${pathname === "/category/electronics" && "text-red-600"}`}
      >
        <Link
          href="category/electronics"
          as={`/category/electronics`}
          shallow
          onClick={() => disableBurgerMenu()}
          className="flex items-center justify-center gap-1"
        >
          <MdLaptop className="inline-block min-w-max text-2xl" />
          Electronics
        </Link>
      </li>
      <li
        className={`duration-600 transition-colors ease-in-out hover:text-red-400 ${pathname === "/category/accessories" && "text-red-600"}`}
      >
        <Link
          href="category/accessories"
          as={`/category/accessories`}
          shallow
          onClick={() => disableBurgerMenu()}
          className="flex items-center justify-center gap-1"
        >
          <MdWatch className="inline-block min-w-max text-2xl" />
          Accessories
        </Link>
      </li>
      <li
        className={`duration-600 transition-colors ease-in-out hover:text-red-400 ${pathname === "/category/furniture" && "text-red-600"}`}
      >
        <Link
          href="category/furniture"
          as={`/category/furniture`}
          shallow
          onClick={() => disableBurgerMenu()}
          className="flex items-center justify-center gap-1"
        >
          <MdTableRestaurant className="inline-block min-w-max text-2xl" />
          Furniture
        </Link>
      </li>
      <li
        className={`duration-600 transition-colors ease-in-out hover:text-red-400 ${pathname === "/category/football" && "text-red-600"}`}
      >
        <Link
          href="category/football"
          as={`/category/football`}
          shallow
          onClick={() => disableBurgerMenu()}
          className="flex items-center justify-center gap-1"
        >
          <IoMdFootball className="inline-block min-w-max text-2xl" />
          Football
        </Link>
      </li>
      <li
        className={`duration-600 transition-colors ease-in-out hover:text-red-400 ${pathname === "/category/groceries" && "text-red-600"}`}
      >
        <Link
          href="category/groceries"
          as={`/category/groceries`}
          shallow
          onClick={() => disableBurgerMenu()}
          className="flex items-center justify-center gap-1"
        >
          <MdFoodBank className="inline-block min-w-max text-2xl" />
          Groceries
        </Link>
      </li>
      <li
        className={`duration-600 transition-colors ease-in-out hover:text-red-400 ${pathname === "/category/other" && "text-red-600"}`}
      >
        <Link
          href="category/other"
          as={`/category/other`}
          shallow
          onClick={() => disableBurgerMenu()}
          className="flex items-center justify-center gap-1"
        >
          <MdShoppingCartCheckout className="inline-block min-w-max text-2xl" />

          <p>Other</p>
        </Link>
      </li>
    </ul>
  );
};

export default NavMenu;
