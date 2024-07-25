"use client";

import { useEffect, useState } from "react";
import FormMe from "./FormMe";
import PasswordForm from "./PasswordForm";
import { redirect } from "next/navigation";

interface NavigationProps {
  name: string;
  email: string;
  role: string;
  id: string;
}

const Navigation = ({ name, email, role, id }: NavigationProps) => {
  const [section, setSection] = useState("profile");

  useEffect(() => {
    if (section === "product") {
      return redirect("create-product");
    }
    if (section === "myproducts") {
      return redirect(`my-products/${id}`);
    }
    if (section === "wishlist") {
      return redirect("/wishlist");
    }
    if (section === "cart") {
      return redirect("cart");
    }
  }, [section]);

  return (
    <div className="block justify-center md:flex">
      <div>
        <p className="font-medium">Manage My Account</p>
        <ul className="mx-4 flex justify-around text-gray-400 md:ml-6 md:mr-20 md:block">
          <li
            className={`mx-2 mb-8 mt-6 ${
              section === "profile" ? "text-red-500" : ""
            }`}
          >
            <button onClick={() => setSection("profile")}>My Profile</button>
          </li>
          <li
            className={`mx-2 mb-8 mt-6 ${
              section === "password" ? "text-red-500" : ""
            }`}
          >
            <button onClick={() => setSection("password")}>
              Change Password
            </button>
          </li>

          {role === "seller" && (
            <>
              <li
                className={`mx-2 mb-8 mt-6 ${
                  section === "product" ? "text-red-500" : ""
                }`}
              >
                <button onClick={() => setSection("product")}>
                  Create Product
                </button>
              </li>
              <li
                className={`mx-2 mb-8 mt-6 ${
                  section === "payment" ? "text-red-500" : ""
                }`}
              >
                <button onClick={() => setSection("myproducts")}>
                  My Products
                </button>
              </li>
            </>
          )}
        </ul>

        <p className="font-medium">My Lists</p>
        <ul className="ml-6 mr-20 flex justify-around text-gray-400 md:block">
          <li
            className={`mx-2 mb-8 mt-6 ${
              section === "returns" ? "text-red-500" : ""
            }`}
          >
            <button onClick={() => setSection("wishlist")}>My Wish List</button>
          </li>
          <li
            className={`mx-2 mb-8 mt-6 ${
              section === "cancellations" ? "text-red-500" : ""
            }`}
          >
            <button onClick={() => setSection("cart")}>My Cart</button>
          </li>
        </ul>
      </div>
      <div className="mx-3 md:ml-20">
        {section === "profile" && (
          <FormMe name={name} email={email} role={role} />
        )}
        {section === "password" && <PasswordForm />}
      </div>
    </div>
  );
};

export default Navigation;
