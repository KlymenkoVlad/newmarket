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
        <a className=" block mb-5" href="#">
          My Account
        </a>
        <a className=" block mb-5" href="#">
          Login / Register
        </a>
        <a className=" block mb-5" href="#">
          Cart
        </a>
        <a className=" block mb-5" href="#">
          Wishlist
        </a>
        <a className=" block mb-5" href="#">
          Shop
        </a>
      </div>

      <div>
        <a className=" block mb-5 " href="#">
          Quick Link
        </a>
        <a className=" block mb-5" href="#">
          Privacy Policy
        </a>
        <a className=" block mb-5" href="#">
          Terms Of Use
        </a>
        <a className=" block mb-5" href="#">
          FAQ
        </a>
        <a className=" block mb-5" href="#">
          Contact
        </a>
      </div>

      <div>
        <p className="mb-5">Download App</p>
        <p className="mb-3">Save $3 with App New User Only</p>
        <div className="flex mb-5">
          <img src="./icons/Icon-qrcode.jpg" alt="Qrcode" />
          <div className="ml-5">
            <img src="./icons/Icon-googlePlay.png" alt="googleplay" />{" "}
            <img src="./icons/Icon-AppStore.png" alt="appStore" />
          </div>
        </div>
        <div className="flex justify-left mb-5">
          <img src="./icons/Icon-Insta.png" alt="googleplay" />{" "}
          <img
            className="ml-5"
            src="./icons/Icon-Facebook.png"
            alt="googleplay"
          />
          <img
            className="ml-5"
            src="./icons/Icon-Linkedin.png"
            alt="googleplay"
          />
          <img
            className="ml-5"
            src="./icons/Icon-Twitter.png"
            alt="googleplay"
          />{" "}
        </div>
      </div>
    </div>
  );
};

export default Footer;
