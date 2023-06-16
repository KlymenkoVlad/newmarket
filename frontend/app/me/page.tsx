import React from "react";

import baseUrl from "@/utils/baseUrl";
import { cookies } from "next/headers";

import Link from "next/link";
import Navigation from "./Navigation";

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
  console.log(token);

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
    <div className=" mx-24 mb-16">
      <div className="flex mb-16 ">
        <Link href="/" className="text-gray-500">
          Home
        </Link>
        <p className="ml-3 ">/</p>
        <p className="ml-3">My Account</p>
      </div>
      <Navigation name={user.name} email={user.email} role={user.role} />
    </div>
  );
}
