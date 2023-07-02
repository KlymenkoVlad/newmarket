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

interface FormMeProps {
  name: string;
  email: string;
  role: string;
}

const FormMe = ({ email, name, role }: FormMeProps) => {
  const router = useRouter();

  return (
    <>
      <Formik
        initialValues={{
          email: "",
          name: "",
          role,
        }}
        validationSchema={Yup.object({
          email: Yup.string().email("Wrong email"),
          name: Yup.string().min(2, "Atleast 2 characters"),
          role: Yup.string(),
        })}
        onSubmit={async (user, { resetForm }) => {
          try {
            if (
              (user.email === "" || user.email === email) &&
              (user.name === "" || user.name === name) &&
              user.role === role
            ) {
              return alert("data are the same or not specified");
            }
            try {
              const token = Cookies.get("token");

              const emailCheckRes = await axios.get(
                `${baseUrl}/api/signup/${email}`
              );

              if (emailCheckRes.data !== "Available") {
                alert("This email is already taken and won`t be changed");
                user.email = "";
              }
              const res = await axios.put(
                `${baseUrl}/api/profile/update`,
                { name: user.name, email: user.email, role: user.role },
                { headers: { Authorization: token } }
              );

              resetForm();

              if (res.status === 200) {
                alert("Data is successfully updated");
              } else {
                alert("Something is went wrong");
              }
            } catch (error) {
              console.error(error);
            }
          } catch (error) {
            console.error(error);
          }
        }}
      >
        <Form className="  px-8 pt-6 pb-8 flex flex-col m-auto sm:w-[400px] ms:w-[300px] w-[270px] justify-center">
          <h2 className=" font-medium text-lg mb-6 text-red-500">
            Edit Your Profile
          </h2>
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
              placeholder={email}
            />
            <ErrorMessage
              name="email"
              component="div"
              className="mt-2 text-red-500"
            />
          </div>

          <div className="bg-white mb-10 ">
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
              placeholder={name}
            />
            <ErrorMessage
              name="name"
              component="div"
              className="mt-2 text-red-500"
            />
          </div>

          <div className="bg-white  mb-10">
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
              className=" block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
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

          <div className="inline-flex items-center justify-start ">
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
