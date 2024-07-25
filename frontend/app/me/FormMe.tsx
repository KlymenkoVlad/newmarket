"use client";

import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import Ripples from "react-ripples";
import Link from "next/link";
import axios from "axios";
import { baseUrl } from "@/utils/baseUrl";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

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
              return toast.error("data are the same or not specified");
            }
            try {
              const token = Cookies.get("token");

              const emailCheckRes = await axios.get(
                `${baseUrl}/api/signup/${email}`,
              );

              if (emailCheckRes.data !== "Available") {
                toast("This email is already taken and won`t be changed");
                user.email = "";
              }
              const res = await axios.put(
                `${baseUrl}/api/profile/update`,
                { name: user.name, email: user.email, role: user.role },
                { headers: { Authorization: token } },
              );

              resetForm();

              if (res.status === 200) {
                toast.success("Data is successfully updated");
                router.refresh();
              } else {
                toast.error("Something is went wrong");
              }
            } catch (error) {
              console.error(error);
            }
          } catch (error) {
            console.error(error);
          }
        }}
      >
        <Form className="m-auto flex w-[270px] flex-col justify-center px-8 pb-8 pt-6 ms:w-[300px] sm:w-[400px]">
          <h2 className="mb-6 text-lg font-medium text-red-500">
            Edit Your Profile
          </h2>
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
              placeholder={email}
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
              htmlFor="name"
            >
              Your Name
            </label>
            <Field
              className="mt-1 block w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm placeholder-slate-400 shadow-sm invalid:border-pink-500 invalid:text-pink-600 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 disabled:border-slate-200 disabled:bg-slate-50 disabled:text-slate-500 disabled:shadow-none"
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

          <div className="mb-10 bg-white">
            <label
              htmlFor="role"
              className="bottom-8 left-0 -translate-y-2 text-sm text-gray-500 transition-transform duration-300"
            >
              Choose your role
            </label>
            <Field
              id="role"
              name="role"
              as="select"
              className="block w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm placeholder-slate-400 shadow-sm invalid:border-pink-500 invalid:text-pink-600 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 disabled:border-slate-200 disabled:bg-slate-50 disabled:text-slate-500 disabled:shadow-none"
            >
              <option value="user">User</option>
              <option value="seller">Seller</option>
            </Field>
            <ErrorMessage component="div" className="error" name="role" />
          </div>

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
    </>
  );
};

export default FormMe;
