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

const PasswordForm = () => {
  const router = useRouter();

  return (
    <>
      <Formik
        initialValues={{
          oldPassword: "",
          newPassword: "",
          newPasswordConfirmation: "",
        }}
        validationSchema={Yup.object({
          oldPassword: Yup.string()
            .required("No password provided.")
            .min(8, "Password is too short - should be 8 chars minimum.")
            .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
          newPassword: Yup.string()
            .required("No password provided.")
            .min(8, "Password is too short - should be 8 chars minimum.")
            .matches(/[a-zA-Z]/, "Password can only contain Latin letters.")
            .notOneOf(
              [Yup.ref("oldPassword")],
              "New password must be different from the old password."
            ),
          newPasswordConfirmation: Yup.string()
            .oneOf([Yup.ref("newPassword")], "Passwords must match")
            .required("Please confirm your new password."),
        })}
        onSubmit={async (password, { resetForm }) => {
          try {
            const token = Cookies.get("token");
            console.log(password);

            const res = await axios.post(
              `${baseUrl}/api/profile/updatePassword`,
              {
                oldPassword: password.oldPassword,
                newPassword: password.newPassword,
              },
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
        }}
      >
        <Form className="  px-8 pt-6 pb-8  flex flex-col m-auto w-[400px] justify-center">
          <h2 className=" font-medium text-lg mb-6 text-red-500">
            Edit Your Password
          </h2>

          <div className="bg-white mb-10">
            <label
              className=" bottom-8 left-0 text-gray-500 transition-transform duration-300 -translate-y-2 text-sm"
              htmlFor="oldPassword"
            >
              Your Old Password
            </label>
            <Field
              className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                invalid:border-pink-500 invalid:text-pink-600
                focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
              name="oldPassword"
              type="password"
            />
            <ErrorMessage
              name="oldPassword"
              component="div"
              className="mt-2 text-red-500"
            />
          </div>

          <div className="bg-white mb-10">
            <label
              className=" bottom-8 left-0 text-gray-500 transition-transform duration-300 -translate-y-2 text-sm"
              htmlFor="newPassword"
            >
              Your New Password
            </label>
            <Field
              className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                invalid:border-pink-500 invalid:text-pink-600
                focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
              name="newPassword"
              type="password"
            />
            <ErrorMessage
              name="newPassword"
              component="div"
              className="mt-2 text-red-500"
            />
          </div>

          <div className="bg-white mb-10">
            <label
              className=" bottom-8 left-0 text-gray-500 transition-transform duration-300 -translate-y-2 text-sm"
              htmlFor="newPasswordConfirmation"
            >
              Confirm Your New Password
            </label>
            <Field
              className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                invalid:border-pink-500 invalid:text-pink-600
                focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
              name="newPasswordConfirmation"
              type="password"
            />
            <ErrorMessage
              name="newPasswordConfirmation"
              component="div"
              className="mt-2 text-red-500"
            />
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

export default PasswordForm;
