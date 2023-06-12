import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="h-440px bg-black text-white flex justify-around items-center p-4">
      <div>
        <p className="mb-5">Exclusive</p>
        <p className="mb-5">Subscribe</p>
        <p className="mb-5">Get 10% off your first order</p>
        <input type="text" className="mb-5" />
      </div>

      <div>
        <p className="mb-5">Support</p>
        <p className="mb-5">111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
        <a className=" block mb-5" href="mailto: klymenvlad@gmail.com">
          klymenvlad@gmail.com
        </a>
        <a className=" block mb-5" href="tel:123-456-7890">
          Click to call
        </a>
      </div>

      <div>
        <Link className=" block mb-5" href="me">
          My Account
        </Link>
        <Link className=" block mb-5" href="login">
          Login / Register
        </Link>
        <Link className=" block mb-5" href="#">
          Cart
        </Link>
        <Link className=" block mb-5" href="#">
          Wishlist
        </Link>
        <Link className=" block mb-5" href="#">
          Shop
        </Link>
      </div>

      <div>
        <Link className=" block mb-5 " href="#">
          Quick Link
        </Link>
        <Link className=" block mb-5" href="#">
          Privacy Policy
        </Link>
        <Link className=" block mb-5" href="#">
          Terms Of Use
        </Link>
        <Link className=" block mb-5" href="#">
          FAQ
        </Link>
        <Link className=" block mb-5" href="#">
          Contact
        </Link>
      </div>

      <div>
        <p className="mb-5">Download App</p>
        <p className="mb-3">Save $3 with App New User Only</p>
        <div className="flex mb-5">
          <Image
            src="/icons/Icon-qrcode.jpg"
            alt="Qrcode"
            width={76}
            height={76}
          />
          <div className="ml-5">
            <Image
              src="/icons/Icon-googlePlay.png"
              alt="googleplay"
              width={104}
              height={30}
            />
            <Image
              src="/icons/Icon-AppStore.png"
              alt="appStore"
              width={104}
              height={30}
            />
          </div>
        </div>
        <div className="flex justify-left mb-5">
          <Image
            src="/icons/Icon-Insta.png"
            alt="googleplay"
            width={24}
            height={24}
          />
          <Image
            width={24}
            height={24}
            className="ml-5"
            src="/icons/Icon-Facebook.png"
            alt="googleplay"
          />
          <Image
            width={24}
            height={24}
            className="ml-5"
            src="/icons/Icon-Linkedin.png"
            alt="googleplay"
          />
          <Image
            width={24}
            height={24}
            className="ml-5"
            src="/icons/Icon-Twitter.png"
            alt="googleplay"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
