"use client";

import { useStateContext } from "@/context/StateContext";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function HeaderLink() {
  const pathname = usePathname();

  return (
    <div className="ml-6 flex">
      <Link className="ml-4" href="/">
        <p
          className={`${
            pathname == "/" && "text-red-600"
          } duration-600 transition-colors ease-in-out hover:text-red-400`}
        >
          Home
        </p>
      </Link>
      <Link className="ml-4" href="/contact">
        <p
          className={`${
            pathname == "/contact" && "text-red-600"
          } duration-600 transition-colors ease-in-out hover:text-red-400`}
        >
          Contact
        </p>
      </Link>
      <Link className="ml-4" href="/about">
        <p
          className={`${
            pathname == "/about" && "text-red-600"
          } duration-600 transition-colors ease-in-out hover:text-red-400`}
        >
          About
        </p>
      </Link>
      <Link className="ml-4" href="/all">
        <p
          className={`${
            pathname == "/all" && "text-red-600"
          } duration-600 transition-colors ease-in-out hover:text-red-400`}
        >
          All Products
        </p>
      </Link>
    </div>
  );
}
