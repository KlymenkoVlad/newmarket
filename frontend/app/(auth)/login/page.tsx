import React from "react";
import PropTypes from "prop-types";
import Login from "@/components/Pages/Login";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const tokenCheck = () => {
  const cookieStore = cookies();
  const token = cookieStore.get("token");
  if (token) {
    redirect("me");
  }
};

const page = () => {
  tokenCheck();

  return <Login />;
};

export default page;
