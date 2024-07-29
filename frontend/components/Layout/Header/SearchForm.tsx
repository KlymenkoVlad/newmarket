"use client";

import { Field, Form, Formik } from "formik";
import { useRouter } from "next/navigation";
import * as Yup from "yup";
import React from "react";
import { IoMdSearch } from "react-icons/io";

const SearchForm = () => {
  const router = useRouter();

  return (
    <Formik
      initialValues={{ text: "" }}
      validationSchema={Yup.object({
        text: Yup.string().required("No text provided."),
      })}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        router.push(`/search/${values.text}`);

        resetForm();
      }}
    >
      {({ isSubmitting }) => (
        <Form className="w-full">
          <label
            htmlFor="text"
            className="sr-only mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Search
          </label>
          <div className="relative">
            <IoMdSearch className="absolute left-2 z-30 h-full text-2xl text-gray-500" />

            <Field
              className="relative h-[50px] w-full rounded-lg border border-gray-300 bg-white p-4 pl-10 pr-20 text-sm text-gray-900 focus:border-red-500 focus:outline-none focus:ring-red-500"
              id="text"
              name="text"
              type="text"
              placeholder="Search apples, tie..."
            />
            <button
              type="submit"
              className="absolute right-0 h-full rounded-lg bg-red-700 px-3 text-sm font-medium text-white transition-colors hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
            >
              Search
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default SearchForm;
