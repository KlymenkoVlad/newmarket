"use client";

import { useState } from "react";
import FormMe from "./FormMe";
import PasswordForm from "./PasswordForm";

const Navigation = ({ name, email, role }) => {
  const [section, setSection] = useState("profile");
  return (
    <div className="flex justify-center">
      <div>
        <p className="font-medium">Manage My Account</p>
        <ul className="ml-6 text-gray-400 mr-20">
          <li
            className={`mt-6 mb-8 ${
              section === "profile" ? "text-red-500" : ""
            }`}
          >
            <button onClick={() => setSection("profile")}>My Profile</button>
          </li>
          <li
            className={`mt-6 mb-8 ${
              section === "password" ? "text-red-500" : ""
            }`}
          >
            <button onClick={() => setSection("password")}>
              Change Password
            </button>
          </li>
          <li
            className={`mt-6 mb-8 ${
              section === "address" ? "text-red-500" : ""
            }`}
          >
            <button onClick={() => setSection("address")}>Address Book</button>{" "}
          </li>
          <li
            className={`mt-6 mb-8 ${
              section === "payment" ? "text-red-500" : ""
            }`}
          >
            <button onClick={() => setSection("payment")}>
              My Payment Options
            </button>
          </li>
        </ul>

        <p className="font-medium">My Orders</p>
        <ul className="ml-6 text-gray-400 mr-20">
          <li
            className={`mt-6 mb-8 ${
              section === "returns" ? "text-red-500" : ""
            }`}
          >
            <button onClick={() => setSection("returns")}>My Returns</button>
          </li>
          <li
            className={`mt-6 mb-8 ${
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
      <div className="ml-20">
        {section === "profile" && (
          <FormMe name={name} email={email} role={role} />
        )}
        {section === "password" && <PasswordForm />}
      </div>
    </div>
  );
};

export default Navigation;
