"use client";

import React from "react";
import PropTypes from "prop-types";
import { Formik, Field, Form, ErrorMessage, useField } from "formik";
import * as Yup from "yup";
import Ripples from "react-ripples";
import Link from "next/link";
import axios from "axios";
import baseUrl from "@/utils/baseUrl";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

const FormMe = () => {
  const router = useRouter();

  return (
    <>
      {" "}
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email("Wrong email")
            .required("Email is required"),
          password: Yup.string()
            .required("No password provided.")
            .min(8, "Password is too short - should be 8 chars minimum.")
            .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
        })}
        onSubmit={async (user) => {
          try {
            const res = await axios.post(`${baseUrl}/api/auth`, {
              user,
            });

            Cookies.set("token", res.data);
            router.push("/");
            window.location.reload();
          } catch (error) {
            console.error(error);
          }
        }}
      >
        <Form className="  px-8 pt-6 pb-8  flex flex-col m-auto w-[400px]">
          <h2 className=" font-medium text-4xl mb-6 ">Log in</h2>
          <h4 className=" text-sm mb-12">Enter your details below</h4>

          <div className="bg-white mb-10">
            <label
              className=" bottom-8 left-0 text-gray-500 transition-transform duration-300 -translate-y-2 text-sm"
              htmlFor="email"
            >
              Your email
            </label>
            <Field
              className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
              id="email"
              name="email"
              type="email"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="mt-2 text-red-500"
            />
          </div>

          <div className="bg-white mb-10">
            <label
              className=" bottom-8 left-0 text-gray-500 transition-transform duration-300 -translate-y-2 text-sm"
              htmlFor="password"
            >
              Your Password
            </label>
            <Field
              className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
              name="password"
              type="password"
            />
            <ErrorMessage
              name="password"
              component="div"
              className="mt-2 text-red-500"
            />
          </div>

          <Link href="/signup" className="mb-5 ">
            <p className="link text-red-500">Do not have account?</p>
          </Link>
          <div className="inline-flex items-center justify-start">
            <Ripples during={800} color="#6eb9f7">
              <button
                className="border-0 rounded-md px-4 py-2 text-base font-medium text-white uppercase transition-colors duration-500 ease-in-out bg-blue-500 shadow-md focus:outline-none hover:bg-blue-600 active:bg-blue-400"
                type="submit"
              >
                Send
              </button>
            </Ripples>
          </div>
        </Form>
      </Formik>
    </>
  );
};

export default FormMe;
