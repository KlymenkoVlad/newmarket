"use client";

import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import Ripples from "react-ripples";

import { toast } from "react-hot-toast";

import PreviewImage from "./PreviewImage";
import PreviewMultipleImage from "./PreviewMultipleImage";
import axios from "axios";
import baseUrl from "@/utils/baseUrl";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  return (
    <>
      <Formik
        initialValues={{
          name: "",
          mainPicture: "",
          price: "",
          pastPrice: "",
          quantity: 0,
          description: "",
          category: "womanfashion",
          pictures: [],
        }}
        validationSchema={Yup.object({
          mainPicture: Yup.mixed()
            .required("Required")
            .test(
              "FILE_SIZE",
              "Too big!",
              (value) => value && value.size < 2024 * 2024
            )
            .test(
              "FILE_TYPE",
              "Invalid",
              (value) =>
                value && ["image/png", "image/jpeg"].includes(value.type)
            ),

          pictures: Yup.mixed()
            .required("Required")
            .test(
              "MAX_IMAGES",
              "Exceeded maximum number of pictures(4)",
              (value) => value && value.length <= 4
            )
            .test("FILE_SIZE", "Too big!", (value) => {
              if (value) {
                for (let i = 0; i < value.length; i++) {
                  if (value[i].size >= 2024 * 2024) {
                    return false;
                  }
                }
              }
              return true;
            })
            .test("FILE_TYPE", "Invalid", (value) => {
              if (value) {
                for (let i = 0; i < value.length; i++) {
                  if (!["image/png", "image/jpeg"].includes(value[i].type)) {
                    return false;
                  }
                }
              }
              return true;
            }),

          price: Yup.number().moreThan(0).required("Required"),
          pastPrice: Yup.number().moreThan(
            Yup.ref("price"),
            "Past price must be greater than price"
          ),
          name: Yup.string()
            .min(2, "Atleast 2 characters")
            .required("Required"),
          quantity: Yup.number().moreThan(0).required("Required"),
          description: Yup.string()
            .min(10, "Atleast 10 characters")
            .required("Required"),
          category: Yup.string().required("Required"),
        })}
        onSubmit={async (values, { setSubmitting }) => {
          const sumbitData = async () => {
            const formData = new FormData();
            try {
              formData.append("file", mainPicture);
              formData.append("upload_preset", "NewMarket");
              const resMain = await axios.post(
                `https://api.cloudinary.com/v1_1/dw0j1mmbp/image/upload`,
                formData
              );
              console.log(resMain.data.secure_url);

              const mainImg = resMain.data.secure_url;
              const imgArr = [];

              for (let i = 0; i < pictures.length; i++) {
                formData.append("file", pictures[i]);
                formData.append("upload_preset", "NewMarket");
                const resArr = await axios.post(
                  `https://api.cloudinary.com/v1_1/dw0j1mmbp/image/upload`,
                  formData
                );
                console.log(resArr.data.secure_url);
                imgArr.push(resArr.data.secure_url);
              }

              console.log({
                mainPicture: mainImg,
                pictures: imgArr,
                price,
                name,
                quantity,
                description,
                category,
                pastPrice,
              });

              const res = await axios.post(
                `${baseUrl}/api/item`,
                {
                  mainPicture: mainImg,
                  pictures: imgArr,
                  price,
                  name,
                  quantity,
                  description,
                  category,
                },
                {
                  headers: {
                    Authorization:
                      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDhjN2U4OGNmM2QzM2YxNDRlYzA1NjciLCJpYXQiOjE2ODc3MDg0MzcsImV4cCI6MTY4OTc4MjAzN30.D3OXrXobeRWt8DOw9c7D0vk5M3sGo2KxUExw282Mj24",
                  },
                }
              );

              console.log(res);

              router.push(
                `http://localhost:3000/product/${res.data._id}-${res.data.name}`
              );
            } catch (error) {
              console.error(error);
            }
          };
          const token = Cookies.get("token");
          if (!token) {
            throw new Error("No token");
          }

          const {
            mainPicture,
            pictures,
            price,
            name,
            quantity,
            description,
            category,
            pastPrice,
          } = values;

          toast.promise(sumbitData(), {
            loading: `Creating new product - ${name}...`,
            success: <b>New product ${name} is created</b>,
            error: <b>New product {name} is`nt created</b>,
          });

          setSubmitting(false);
        }}
      >
        {({ setFieldValue, values, errors }) => (
          <Form
            className="px-8 pt-6 pb-8 flex flex-col m-auto w-[1000px] justify-center"
            encType="multipart/form-data"
          >
            <h2 className="font-bold text-2xl mb-6 text-red-500">
              Create your product
            </h2>

            <div className="flex justify-center">
              <div className="w-full">
                <div className="bg-white mb-10 ">
                  <label
                    className=" bottom-8 left-0 text-gray-500 transition-transform duration-300 -translate-y-2 text-sm"
                    htmlFor="name"
                  >
                    Name
                  </label>
                  <Field
                    className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                invalid:border-pink-500 invalid:text-pink-600
                focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                    name="name"
                    type="text"
                    placeholder="Name your product"
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="mt-2 text-red-500"
                  />
                </div>

                <div className="bg-white mb-10 ">
                  <label
                    className=" bottom-8 left-0 text-gray-500 transition-transform duration-300 -translate-y-2 text-sm"
                    htmlFor="name"
                  >
                    Price
                  </label>
                  <Field
                    className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                invalid:border-pink-500 invalid:text-pink-600
                focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                    name="price"
                    type="number"
                    placeholder="Your product`s price"
                  />
                  <ErrorMessage
                    name="price"
                    component="div"
                    className="mt-2 text-red-500"
                  />
                </div>

                <div className="bg-white mb-10 ">
                  <label
                    className=" bottom-8 left-0 text-gray-500 transition-transform duration-300 -translate-y-2 text-sm"
                    htmlFor="name"
                  >
                    Quantity
                  </label>
                  <Field
                    className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                invalid:border-pink-500 invalid:text-pink-600
                focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                    name="quantity"
                    type="number"
                    placeholder="Your product`s quantity"
                  />
                  <ErrorMessage
                    name="quantity"
                    component="div"
                    className="mt-2 text-red-500"
                  />
                </div>

                <div className="bg-white mb-10 ">
                  <label
                    className=" bottom-8 left-0 text-gray-500 transition-transform duration-300 -translate-y-2 text-sm"
                    htmlFor="pastPrice"
                  >
                    Price before discount
                    <span className="text-red-500"> (Not Required)</span>
                  </label>
                  <Field
                    className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                invalid:border-pink-500 invalid:text-pink-600
                focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                    name="pastPrice"
                    type="number"
                    placeholder="Your product`s price before discount"
                  />
                  <ErrorMessage
                    name="pastPrice"
                    component="div"
                    className="mt-2 text-red-500"
                  />
                </div>

                <div className="bg-white mb-10 ">
                  <label
                    className=" bottom-8 left-0 text-gray-500 transition-transform duration-300 -translate-y-2 text-sm"
                    htmlFor="name"
                  >
                    Description
                  </label>
                  <Field
                    className="h-[200px] mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                invalid:border-pink-500 invalid:text-pink-600
                focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                    name="description"
                    type="text"
                    as="textarea"
                    placeholder="Describe your product"
                  />
                  <ErrorMessage
                    name="description"
                    component="div"
                    className="mt-2 text-red-500"
                  />
                </div>

                <div className="bg-white  mb-10">
                  <label
                    htmlFor="role"
                    className=" bottom-8 left-0 text-gray-500 transition-transform duration-300 -translate-y-2 text-sm"
                  >
                    Category
                  </label>
                  <Field
                    name="category"
                    as="select"
                    className=" block  w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                invalid:border-pink-500 invalid:text-pink-600
                focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                  >
                    <option value="womanfashion">Woman Fashion</option>
                    <option value="menfashion">Men Fashion</option>
                    <option value="electronics">Electronics</option>
                    <option value="accessories">Accessories</option>
                    <option value="furniture">Furniture</option>
                    <option value="football">Football</option>
                    <option value="groceries">Groceries</option>
                    <option value="other">Other</option>
                  </Field>
                  <ErrorMessage
                    name="category"
                    component="div"
                    className="mt-2 text-red-500"
                  />
                </div>
              </div>

              <div className="ml-5 w-full">
                <div className="bg-white mb-10">
                  <label
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    htmlFor="file_input"
                  >
                    Choose main picture of product
                  </label>
                  <input
                    className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-sky-700 dark:border-sky-600 dark:placeholder-gray-400"
                    id="file_input"
                    accept="image/*"
                    name="mainPicture"
                    type="file"
                    onChange={(event) => {
                      setFieldValue("mainPicture", event?.target.files[0]);
                    }}
                  />
                  {errors.mainPicture && (
                    <div className="mt-2 text-red-500">
                      {errors.mainPicture}
                    </div>
                  )}

                  {values.mainPicture && (
                    <PreviewImage file={values.mainPicture} />
                  )}
                </div>

                <div className="bg-white mb-10">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Choose extra pictures(no more than 4)
                  </label>
                  <input
                    className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-sky-700 dark:border-sky-600 dark:placeholder-gray-400"
                    id="file_input"
                    accept="image/*"
                    type="file"
                    name="pictures"
                    multiple
                    onChange={(event) => {
                      setFieldValue("pictures", event?.target.files);
                    }}
                  />

                  {errors.pictures && (
                    <div className="mt-2 text-red-500">{errors.pictures}</div>
                  )}

                  {values.pictures && (
                    <PreviewMultipleImage files={values.pictures} />
                  )}
                </div>
              </div>
            </div>
            <div className="inline-flex items-center justify-start">
              <Ripples during={800} color="#6eb9f7">
                <button
                  className="border-0 rounded-md px-4 py-2 text-base font-medium text-white uppercase transition-colors duration-500 ease-in-out bg-blue-500 shadow-md focus:outline-none hover:bg-blue-600 active:bg-blue-400"
                  type="submit"
                >
                  Create New Product
                </button>
              </Ripples>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
}