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
  }, [section]);

  return (
    <div className="md:flex block justify-center">
      <div>
        <p className="font-medium">Manage My Account</p>
        <ul className="md:ml-6 text-gray-400 md:mr-20 mx-4 md:block flex justify-around">
          <li
            className={`mt-6 mx-2 mb-8 ${
              section === "profile" ? "text-red-500" : ""
            }`}
          >
            <button onClick={() => setSection("profile")}>My Profile</button>
          </li>
          <li
            className={`mt-6 mx-2 mb-8 ${
              section === "password" ? "text-red-500" : ""
            }`}
          >
            <button onClick={() => setSection("password")}>
              Change Password
            </button>
          </li>

          <li
            className={`mt-6 mx-2 mb-8 ${
              section === "product" ? "text-red-500" : ""
            }`}
          >
            <button onClick={() => setSection("product")}>
              Create Product
            </button>
          </li>

          <li
            className={`mt-6 mx-2 mb-8 ${
              section === "payment" ? "text-red-500" : ""
            }`}
          >
            <button onClick={() => setSection("myproducts")}>
              My Products
            </button>
          </li>
        </ul>

        <p className="font-medium">My Orders</p>
        <ul className="ml-6 text-gray-400 mr-20 md:block flex justify-around">
          <li
            className={`mt-6 mx-2 mb-8 ${
              section === "returns" ? "text-red-500" : ""
            }`}
          >
            <button onClick={() => setSection("returns")}>My Returns</button>
          </li>
          <li
            className={`mt-6 mx-2 mb-8 ${
              section === "cancellations" ? "text-red-500" : ""
            }`}
          >
            <button onClick={() => setSection("cancellations")}>
              My Cancellations
            </button>
          </li>
        </ul>
        <p className="font-medium">My Wishlist</p>
      </div>
      <div className="md:ml-20 mx-3 ">
        {section === "profile" && (
          <FormMe name={name} email={email} role={role} />
        )}
        {section === "password" && <PasswordForm />}
      </div>
    </div>
  );
};

export default Navigation;
