"use client";

import React from "react";
import Image from "next/image";
import * as Yup from "yup";
import { Formik, Field, Form, ErrorMessage, ErrorMessageProps } from "formik";
import Ripples from "react-ripples";
import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

import { baseUrl } from "@/utils/baseUrl";
import Link from "next/link";
import { toast } from "react-hot-toast";

const Login = () => {
  const router = useRouter();

  return (
    <div className="mx-3 ms:mx-12 md:mx-32">
      <div className="flex">
        <Image
          src="/signup/signupimg.png"
          alt="signupimg"
          width={805}
          height={781}
          className="hidden 2xl:block"
        />

        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={Yup.object({
            email: Yup.string()
              .matches(
                /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                "Wrong email",
              )
              .required("Email is required"),
            password: Yup.string()
              .required("No password provided.")
              .min(8, "Password is too short - should be 8 chars minimum.")
              .matches(
                /^(?=.*[0-9])(?=.*[a-z]).{6,}$/,
                "Password must contain Latin letters and Numbers",
              ),
          })}
          onSubmit={async (user) => {
            try {
              toast.loading("Wait. You are log in...");
              const res = await axios.post(`${baseUrl}/api/auth`, {
                user,
              });

              toast.dismiss();

              toast.success("You are successfully log in!");
              Cookies.set("token", res.data);
              router.push("/me");
            } catch (error: any) {
              toast.dismiss();
              if (
                error.response.data.error === "No such user" ||
                error.response.data.error === "Invalid credential"
              ) {
                toast.error("Invalid credentials");
                return;
              }
              toast.error("Something is went wrong");
              console.error(error);
            }
          }}
        >
          <Form className="m-auto flex w-[400px] flex-col px-8 pb-8 pt-6">
            <h2 className="mb-6 text-4xl font-medium">Log in</h2>
            <h4 className="mb-12 text-sm">Enter your details below</h4>

            <div className="mb-10 bg-white">
              <label
                className="bottom-8 left-0 -translate-y-2 text-sm text-gray-500 transition-transform duration-300"
                htmlFor="email"
              >
                Your email
              </label>
              <Field
                className="mt-1 block w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm placeholder-slate-400 shadow-sm invalid:border-pink-500 invalid:text-pink-600 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 disabled:border-slate-200 disabled:bg-slate-50 disabled:text-slate-500 disabled:shadow-none"
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

            <div className="mb-10 bg-white">
              <label
                className="bottom-8 left-0 -translate-y-2 text-sm text-gray-500 transition-transform duration-300"
                htmlFor="password"
              >
                Your Password
              </label>
              <Field
                className="mt-1 block w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm placeholder-slate-400 shadow-sm invalid:border-pink-500 invalid:text-pink-600 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 disabled:border-slate-200 disabled:bg-slate-50 disabled:text-slate-500 disabled:shadow-none"
                name="password"
                type="password"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="mt-2 text-red-500"
              />
            </div>

            <Link href="/signup" className="mb-5">
              <p className="duration-600 text-black transition-colors ease-in-out hover:text-red-400">
                Do not have account?
              </p>
            </Link>
            <div className="inline-flex items-center justify-start">
              <Ripples during={800} color="#6eb9f7">
                <button
                  className="rounded-md border-0 bg-blue-500 px-4 py-2 text-base font-medium uppercase text-white shadow-md transition-colors duration-500 ease-in-out hover:bg-blue-600 focus:outline-none active:bg-blue-400"
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

export default Login;
