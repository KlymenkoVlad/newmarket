"use client";

import React from "react";
import * as Yup from "yup";
import { Formik, Field, Form, ErrorMessage, useField } from "formik";
import Ripples from "react-ripples";
import axios from "axios";
import cookies from "js-cookie";
import { useRouter } from "next/navigation";

import "../styles.scss";
import { baseUrl } from "@/utils/baseUrl";
import Image from "next/image";
import Link from "next/link";
import { toast } from "react-hot-toast";

const Signup = () => {
  const router = useRouter();

  const checkEmail = async (email: string) => {
    const res = await axios.get(`${baseUrl}/api/signup/${email}`);

    if (res.data !== "Available") {
      return console.error("This email is already taken");
    }
  };

  return (
    <div className=" lg:mt-48 mt-20 lg:mb-20 mb-10 md:mx-32 ms:mx-12 mx-3">
      <div className="flex ">
        <Image
          src="/signup/signupimg.png"
          alt="signupimg"
          width={805}
          height={781}
          className="2xl:block hidden"
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
              .required("Email is required")
              .test("EMAIL_USED", "This e-mail is taken.", async (value) => {
                if (
                  value &&
                  Boolean(
                    value.match(
                      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                    )
                  )
                ) {
                  const res = await axios.get(`${baseUrl}/api/signup/${value}`);
                  if (res.data !== "Available") {
                    console.error("This email is already taken");
                    return false;
                  }
                }
                return true;
              }),
            password: Yup.string()
              .required("No password provided.")
              .min(8, "Password is too short - should be 8 chars minimum.")
              .matches(
                /^(?=.*[0-9])(?=.*[a-zA-Z])[a-zA-Z0-9]+$/,
                "Password must contain at least one only Latin letter and one number."
              ),
            role: Yup.string().required("Choose your role"),
            terms: Yup.boolean()
              .required("You need to accept our terms")
              .oneOf([true], "You need to accept our terms"),
          })}
          onSubmit={async (user) => {
            try {
              toast.loading(
                "Wait. We are creating brand new account for you..."
              );
              await checkEmail(user.email);

              const res = await axios.post(`${baseUrl}/api/signup`, {
                user: user,
              });

              toast.dismiss();

              toast.success(
                `Congratulations ${user.name}, You are successfully signed up!`,
                {
                  duration: 5000,
                }
              );

              cookies.set("token", res.data);
              router.push("/me");
            } catch (error) {
              toast.dismiss();
              toast.error(`Something is went wrong`);
              console.error(error);
              router.refresh();
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

            <label className="mb-2 ">
              <Field name="terms" type="checkbox" className="mr-2" />
              Agree to the privacy policy
            </label>
            <ErrorMessage
              name="terms"
              component="div"
              className="mt-2 text-red-500 mb-4"
            />

            <Link href="/login" className="my-8 ">
              <p className="text-black hover:text-red-400 transition-colors duration-600 ease-in-out ">
                Already have an account?
              </p>
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
      </div>
    </div>
  );
};

Signup.propTypes = {};

export default Signup;
