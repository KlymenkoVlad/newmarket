import React from "react";

import baseUrl from "@/utils/baseUrl";
import { cookies } from "next/headers";

import FormMe from "./FormMe";

interface User {
  user: {
    createdAt: string;
    email: string;
    name: string;
    profilePicUrl: string;
    role: string;
    updatedAt: string;
    __v: number;
    _id: string;
  };
}

async function getData() {
  const cookieStore = cookies();
  const token = cookieStore.get("token");

  try {
    if (!token) {
      throw new Error("Failed to get token");
    }

    const res = await fetch(`${baseUrl}/api/auth`, {
      method: "GET",
      headers: {
        Authorization: token.value,
      },
    });

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return res.json();
  } catch (error) {
    console.error(error);
  }
}

export default async function Page() {
  const { user }: User = await getData();

  return (
    <div className="w-[70%] h-[731px] mx-auto">
      <div className="flex justify-around">
        <p>Home / My Account</p>
        <p>Welcome {user.name}!</p>
      </div>
      /*fd */
      <div className="flex justify-around">
        <div>
          <p>Manage My Account</p>
          <ul className="mr-20">
            <li className="mt-6 mb-8">
              <p>My Profile</p>
            </li>
            <li className="mt-6 mb-8">
              <p>Address Book</p>
            </li>
            <li className="mt-6 mb-8">
              <p>My Payment Options</p>
            </li>
          </ul>

          <p>My Orders</p>
          <ul className="mr-20">
            <li className="mt-6 mb-8">
              <p>My Returns</p>
            </li>
            <li className="mt-6 mb-8">
              <p>My Cancellations</p>
            </li>
          </ul>
        </div>

        <div>
          <FormMe />
        </div>
      </div>
      /*fd */
    </div>
  );
}
