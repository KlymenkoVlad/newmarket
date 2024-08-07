import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  IoLogoInstagram,
  IoLogoTwitter,
  IoLogoGithub,
  IoLogoDribbble,
} from "react-icons/io";
import { MdFacebook } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="mt-16 bg-white">
      <div className="h-px bg-gray-400"></div>
      <div className="mx-auto w-full max-w-screen-xl">
        <div className="grid grid-cols-2 gap-8 px-4 py-6 md:grid-cols-4 lg:py-8">
          <div>
            <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900">
              New Market
            </h2>
            <ul className="font-medium text-gray-500">
              <li className="mb-4">
                <Link href="/about" className="hover:underline">
                  About
                </Link>
              </li>
              <li className="mb-4">
                <Link href="/contact" className="hover:underline">
                  Contact
                </Link>
              </li>
              <li className="mb-4">
                <a href="mailto:klymenvlad@gmail.com">klymenvlad@gmail.com</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900">
              Help center
            </h2>
            <ul className="font-medium text-gray-500">
              <li className="mb-4">
                <span className="hover:underline">
                  111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
                </span>
              </li>

              <li className="mb-4">
                <a href="tel:+380681768249">Our telephone number</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900">
              Legal
            </h2>
            <ul className="0 font-medium text-gray-500">
              <li className="mb-4">
                <Link href="#" className="hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li className="mb-4">
                <Link href="#" className="hover:underline">
                  Licensing
                </Link>
              </li>
              <li className="mb-4">
                <Link href="#" className="hover:underline">
                  Terms &amp; Conditions
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900">
              Account
            </h2>
            <ul className="font-medium text-gray-500">
              <li className="mb-4">
                <Link href="/me" className="hover:underline">
                  My Account
                </Link>
              </li>
              <li className="mb-4">
                <Link href="/login" className="hover:underline">
                  Login / Register
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="bg-gray-100 px-4 py-6 md:flex md:items-center md:justify-between">
          <span className="0 text-sm text-gray-500 sm:text-center">
            © 2023 New Market™. All Rights Reserved.
          </span>
          <div className="mt-4 flex space-x-6 sm:justify-center md:mt-0">
            <Link
              href="#"
              className="flex items-center justify-center text-gray-400 hover:text-gray-900"
            >
              <MdFacebook className="text-2xl" />
              <span className="sr-only">Facebook page</span>
            </Link>
            <Link
              href="#"
              className="flex items-center justify-center text-gray-400 hover:text-gray-900"
            >
              <IoLogoInstagram className="text-2xl" />
              <span className="sr-only">Instagram page</span>
            </Link>
            <Link
              href="#"
              className="flex items-center justify-center text-gray-400 hover:text-gray-900"
            >
              <IoLogoTwitter className="text-2xl" />
              <span className="sr-only">Twitter page</span>
            </Link>
            <Link
              href="#"
              className="flex items-center justify-center text-gray-400 hover:text-gray-900"
            >
              <IoLogoGithub className="text-2xl" />
              <span className="sr-only">GitHub account</span>
            </Link>
            <Link
              href="#"
              className="flex items-center justify-center text-gray-400 hover:text-gray-900"
            >
              <IoLogoDribbble className="text-2xl" />
              <span className="sr-only">Dribbble account</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
