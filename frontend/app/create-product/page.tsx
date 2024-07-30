"use client";

import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import Ripples from "react-ripples";

import { toast } from "react-hot-toast";

import PreviewImage from "@/components/Common/PrevievImage/PreviewImage";
import PreviewMultipleImage from "@/components/Common/PrevievImage/PreviewMultipleImage";
import axios from "axios";
import { baseUrl, frontendUrl } from "@/utils/baseUrl";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

interface initialValuesInterface {
  name: string;
  mainPicture: File | string;
  price: string;
  pastPrice: string;
  quantity: number;
  description: string;
  category: string;
  pictures: never[] | FileList;
}

const initialValues: initialValuesInterface = {
  name: "",
  mainPicture: "",
  price: "",
  pastPrice: "",
  quantity: 0,
  description: "",
  category: "womanfashion",
  pictures: [],
};

export default function Page() {
  const router = useRouter();

  return (
    <div className="px-6">
      <Formik
        initialValues={initialValues}
        validationSchema={Yup.object({
          mainPicture: Yup.mixed()
            .required("Required")
            .test("FILE_SIZE", "Too big!", (value) => {
              if (value && (value as File).size) {
                return (value as File).size < 2024 * 2024;
              }
              return false;
            })
            .test("FILE_TYPE", "Invalid file type", (value) => {
              if (value && (value as File).type) {
                return ["image/png", "image/jpeg"].includes(
                  (value as File).type,
                );
              }
              return false;
            }),

          pictures: Yup.mixed()
            .required("Required")
            .test(
              "MAX_IMAGES",
              "Exceeded maximum number of pictures (4)",
              (value) => (value as FileList).length <= 4,
            )
            .test("FILE_SIZE", "Too big!", (value) => {
              for (let i = 0; i < (value as FileList).length; i++) {
                if ((value as FileList)[i].size >= 2024 * 2024) {
                  return false;
                }
              }
              return true;
            })
            .test("FILE_TYPE", "Invalid", (value) => {
              for (let i = 0; i < (value as FileList).length; i++) {
                if (
                  !["image/png", "image/jpeg"].includes(
                    (value as FileList)[i].type,
                  )
                ) {
                  return false;
                }
              }
              return true;
            }),

          price: Yup.number().moreThan(0).required("Required"),
          pastPrice: Yup.number().moreThan(
            Yup.ref("price"),
            "Past price must be greater than price",
          ),
          name: Yup.string()
            .min(2, "Atleast 2 characters")
            .required("Required")
            .max(25, "Name must be less than 25 characters"),

          quantity: Yup.number().moreThan(0).required("Required"),
          description: Yup.string()
            .min(10, "Atleast 10 characters")
            .required("Required")
            .max(500, "Name must be less than 500 characters"),

          category: Yup.string().required("Required"),
        })}
        onSubmit={async (values, { setSubmitting }) => {
          const sumbitData = async () => {
            const formData = new FormData();
            const token = Cookies.get("token");
            if (!token) {
              throw new Error("No token");
            }
            try {
              formData.append("file", mainPicture);
              formData.append("upload_preset", "NewMarket");
              const resMain = await axios.post(
                `https://api.cloudinary.com/v1_1/dw0j1mmbp/image/upload`,
                formData,
              );

              const mainImg = resMain.data.secure_url;
              const imgArr = [];

              for (let i = 0; i < pictures.length; i++) {
                formData.append("file", pictures[i]);
                formData.append("upload_preset", "NewMarket");
                const resArr = await axios.post(
                  `https://api.cloudinary.com/v1_1/dw0j1mmbp/image/upload`,
                  formData,
                );
                imgArr.push(resArr.data.secure_url);
              }

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
                  pastPrice,
                },
                {
                  headers: {
                    Authorization: token,
                  },
                },
              );

              router.push(
                `${frontendUrl}/product/${res.data._id}-${res.data.name}`,
              );
            } catch (error) {
              toast.error("Something went wrong");
              console.error(error);
              router.refresh();
            }
          };

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
            className="m-auto flex w-[250px] flex-col justify-center pb-8 pt-6 ms:w-[80%] lg:px-8 xl:w-[1000px]"
            encType="multipart/form-data"
          >
            <h2 className="mb-6 text-2xl font-bold text-red-500">
              Create your product
            </h2>

            <div className="block justify-center xl:flex">
              <div className="w-full">
                <div className="mb-10 bg-white">
                  <label
                    className="bottom-8 left-0 -translate-y-2 text-sm text-gray-500 transition-transform duration-300"
                    htmlFor="name"
                  >
                    Name
                  </label>
                  <Field
                    className="mt-1 block w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm placeholder-slate-400 shadow-sm invalid:border-pink-500 invalid:text-pink-600 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 disabled:border-slate-200 disabled:bg-slate-50 disabled:text-slate-500 disabled:shadow-none"
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

                <div className="mb-10 bg-white">
                  <label
                    className="bottom-8 left-0 -translate-y-2 text-sm text-gray-500 transition-transform duration-300"
                    htmlFor="name"
                  >
                    Price
                  </label>
                  <Field
                    className="mt-1 block w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm placeholder-slate-400 shadow-sm invalid:border-pink-500 invalid:text-pink-600 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 disabled:border-slate-200 disabled:bg-slate-50 disabled:text-slate-500 disabled:shadow-none"
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

                <div className="mb-10 bg-white">
                  <label
                    className="bottom-8 left-0 -translate-y-2 text-sm text-gray-500 transition-transform duration-300"
                    htmlFor="name"
                  >
                    Quantity
                  </label>
                  <Field
                    className="mt-1 block w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm placeholder-slate-400 shadow-sm invalid:border-pink-500 invalid:text-pink-600 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 disabled:border-slate-200 disabled:bg-slate-50 disabled:text-slate-500 disabled:shadow-none"
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

                <div className="mb-10 bg-white">
                  <label
                    className="bottom-8 left-0 -translate-y-2 text-sm text-gray-500 transition-transform duration-300"
                    htmlFor="pastPrice"
                  >
                    Price before discount
                    <span className="text-red-500"> (Not Required)</span>
                  </label>
                  <Field
                    className="mt-1 block w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm placeholder-slate-400 shadow-sm invalid:border-pink-500 invalid:text-pink-600 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 disabled:border-slate-200 disabled:bg-slate-50 disabled:text-slate-500 disabled:shadow-none"
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

                <div className="mb-10 bg-white">
                  <label
                    className="bottom-8 left-0 -translate-y-2 text-sm text-gray-500 transition-transform duration-300"
                    htmlFor="name"
                  >
                    Description
                  </label>
                  <Field
                    className="mt-1 block h-[200px] w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm placeholder-slate-400 shadow-sm invalid:border-pink-500 invalid:text-pink-600 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 disabled:border-slate-200 disabled:bg-slate-50 disabled:text-slate-500 disabled:shadow-none"
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

                <div className="mb-10 bg-white">
                  <label
                    htmlFor="role"
                    className="bottom-8 left-0 -translate-y-2 text-sm text-gray-500 transition-transform duration-300"
                  >
                    Category
                  </label>
                  <Field
                    name="category"
                    as="select"
                    className="block w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm placeholder-slate-400 shadow-sm invalid:border-pink-500 invalid:text-pink-600 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 disabled:border-slate-200 disabled:bg-slate-50 disabled:text-slate-500 disabled:shadow-none"
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

              <div className="ml-5 flex w-full justify-center xl:block">
                <div className="w-full">
                  <div className="mb-10 bg-white">
                    <label
                      className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                      htmlFor="file_input"
                    >
                      Choose main picture of product
                    </label>
                    <input
                      className="block w-full cursor-pointer rounded-lg border border-gray-300 bg-gray-50 text-sm text-gray-900 focus:outline-none dark:border-sky-600 dark:bg-sky-700 dark:text-gray-400 dark:placeholder-gray-400"
                      id="file_input"
                      accept="image/*"
                      name="mainPicture"
                      type="file"
                      onChange={(event) => {
                        const files = event?.target.files;
                        if (files && files.length > 0) {
                          setFieldValue("mainPicture", files[0]);
                        }
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

                  <div className="mb-10 bg-white">
                    <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                      Choose extra pictures(no more than 4)
                    </label>
                    <input
                      className="block w-full cursor-pointer rounded-lg border border-gray-300 bg-gray-50 text-sm text-gray-900 focus:outline-none dark:border-sky-600 dark:bg-sky-700 dark:text-gray-400 dark:placeholder-gray-400"
                      id="file_input"
                      accept="image/*"
                      type="file"
                      name="pictures"
                      multiple
                      onChange={(event) => {
                        setFieldValue("pictures", event?.target.files);
                      }}
                    />

                    {typeof errors.pictures === "string" && (
                      <div className="mt-2 text-red-500">{errors.pictures}</div>
                    )}

                    {values.pictures && (
                      <PreviewMultipleImage
                        files={values.pictures as FileList}
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="mx-auto inline-flex items-center justify-start sm:mx-0">
              <Ripples during={800} color="#6eb9f7">
                <button
                  className="rounded-md border-0 bg-blue-500 px-4 py-2 text-base font-medium uppercase text-white shadow-md transition-colors duration-500 ease-in-out hover:bg-blue-600 focus:outline-none active:bg-blue-400"
                  type="submit"
                >
                  Create New Product
                </button>
              </Ripples>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
