"use client";

import React from "react";
import PropTypes from "prop-types";
import * as Yup from "yup";
import { Formik, Field, Form, ErrorMessage, useField } from "formik";
import Ripples from "react-ripples";
import axios from "axios";
import UserModel from "@/models/UserModel";
import cookies from "js-cookie";
import { useRouter } from "next/navigation";

import "../styles.scss";
import baseUrl from "@/utils/baseUrl";
import Image from "next/image";
import Link from "next/link";

interface initialValues {
  name: string;
  email: string;
  password: string;
  terms: boolean;
  role: string;
}
const Signup = (props: null) => {
  const router = useRouter();

  const checkEmail = async (email: string) => {
    const res = await axios.get(`${baseUrl}/api/auth`);

    if (res.data !== "Available") {
      return console.error("This email is already taken");
    }
  };

  return (
    <div className=" mt-16 mb-32 mx-32">
      <div className="flex ">
        <Image
          src="/signup/signupimg.png"
          alt="signupimg"
          className=" w-[805px] h-[781px]"
          width={805}
          height={781}
        />

        <Formik
          initialValues={{
            name: "",
            email: "",
            password: "",
            terms: false,
            role: "user",
          }}
          validationSchema={Yup.object({
            name: Yup.string()
              .min(2, "Atleast 2 characters")
              .required("Name is required"),
            email: Yup.string()
              .email("Wrong email")
              .required("Email is required"),
            password: Yup.string()
              .required("No password provided.")
              .min(8, "Password is too short - should be 8 chars minimum.")
              .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
            role: Yup.string().required("Choose your role"),
            terms: Yup.boolean()
              .required("You need to accept our terms")
              .oneOf([true], "You need to accept our terms"),
          })}
          onSubmit={async (user) => {
            try {
              await checkEmail(user.email);

              const res = await axios.post(`${baseUrl}/api/signup`, {
                user,
                profilePicUrl: "null",
              });

              cookies.set("token", res.data);
              router.push("/");
            } catch (error) {
              console.error(error);
            }
          }}
        >
          <Form className="  px-8 pt-6 pb-8  flex flex-col m-auto w-[400px]">
            <h2 className=" font-medium text-4xl mb-6 ">Create an account</h2>
            <h4 className=" text-sm mb-12">Enter your details below</h4>

            <div className="bg-white mb-10">
              <label
                className=" bottom-8 left-0 text-gray-500 transition-transform duration-300 -translate-y-2 text-sm"
                htmlFor="name"
              >
                Your Name
              </label>
              <Field
                className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                invalid:border-pink-500 invalid:text-pink-600
                focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                id="name"
                name="name"
                type="text"
              />
              <ErrorMessage
                name="name"
                component="div"
                className="mt-2 text-red-500"
              />
            </div>

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

            <div className="bg-white mb-10">
              <label
                htmlFor="role"
                className=" bottom-8 left-0 text-gray-500 transition-transform duration-300 -translate-y-2 text-sm"
              >
                Choose your role
              </label>
              <Field
                id="role"
                name="role"
                as="select"
                className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                invalid:border-pink-500 invalid:text-pink-600
                focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
              >
                <option value="user">User</option>
                <option value="seller">Seller</option>
              </Field>
              <ErrorMessage component="div" className="error" name="role" />
            </div>

            <Link href="/login" className="mb-5 link text-red-500">
              Already have an account?
            </Link>

            <label className="mb-2 ">
              <Field name="terms" type="checkbox" className="mr-2" />
              Agree to the privacy policy
            </label>
            <ErrorMessage
              name="terms"
              component="div"
              className="mt-2 text-red-500 mb-4"
            />
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
      </div>
    </div>
  );
};

Signup.propTypes = {};

export default Signup;