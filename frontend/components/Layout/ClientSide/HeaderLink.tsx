"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function HeaderLink() {
  const pathname = usePathname();

  return (
    <div className="flex">
      <Link className={`ml-4 link `} href="/">
        <p
          className={`${
            pathname == "/" && " text-red-600"
          } hover:text-red-400 transition-colors duration-600 ease-in-out`}
        >
          Home
        </p>
      </Link>
      <Link className={`ml-4 link`} href="/contact">
        <p
          className={`${
            pathname == "/contact" && " text-red-600"
          } hover:text-red-400 transition-colors duration-600 ease-in-out`}
        >
          Contact
        </p>
      </Link>
      <Link className={`ml-4 link`} href="/about">
        <p
          className={`${
            pathname == "/about" && " text-red-600"
          } hover:text-red-400 transition-colors duration-600 ease-in-out`}
        >
          About
        </p>
      </Link>
      <Link className={`ml-4 link`} href="/all">
        <p
          className={`${
            pathname == "/all" && " text-red-600"
          } hover:text-red-400 transition-colors duration-600 ease-in-out`}
        >
          All Products
        </p>
      </Link>
    </div>
  );
}
