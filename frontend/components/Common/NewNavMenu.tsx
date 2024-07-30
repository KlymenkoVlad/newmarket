"use client";

import { useStateContext } from "@/context/StateContext";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavMenuProps = {
  notBurgerMenu?: boolean;
};

const NewNavMenu: React.FC<NavMenuProps> = ({ notBurgerMenu = true }) => {
  const disableBurgerMenu = () => {
    if (notBurgerMenu) return;
    setShowBurgerMenu(false);
  };

  const pathname = usePathname();

  const { setShowBurgerMenu } = useStateContext();

  return (
    <ul className="mb-10 mr-[30px] mt-20 grid w-full grid-cols-2 items-center justify-around gap-3 whitespace-nowrap text-center font-medium sm:grid-cols-4 xl:grid-cols-8">
      <li
        className={`duration-600 transition-colors ease-in-out hover:text-red-400 ${pathname === "/category/womanfashion" && "text-red-600"}`}
      >
        <Link
          href="category/womanfashion"
          as={`/category/womanfashion`}
          shallow
          onClick={() => disableBurgerMenu()}
        >
          Woman’s Fashion
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
        >
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
        >
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
        >
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
        >
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
        >
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
        >
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
        >
          <p>Other</p>
        </Link>
      </li>
    </ul>
  );
};

export default NewNavMenu;
