"use client";

import React, { useEffect } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import Ripples from "react-ripples";

import { toast } from "react-hot-toast";

import PreviewImage from "@/components/Common/PrevievImage/PreviewImage";
import PreviewMultipleImage from "@/components/Common/PrevievImage/PreviewMultipleImage";
import axios from "axios";
import { baseUrl } from "@/utils/baseUrl";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { Product, User } from "@/types/types";

interface initialValuesInterface {
  [key: string]: string | number | File | string[] | FileList;
  name: string;
  mainPicture: File | string;
  price: number;
  pastPrice: number | "";
  quantity: number;
  description: string;
  category: string;
  pictures: string[] | FileList;
}

interface PropsEditProductForm {
  product: Product;
}

export default function EditProductForm({ product }: PropsEditProductForm) {
  const router = useRouter();

  useEffect(() => {
    const profileCheck = async () => {
      interface UserData {
        data: {
          user: User;
        };
      }

      try {
        const token = Cookies.get("token");
        if (!token) {
          throw new Error("You can`t edit this product");
        }

        const { data }: UserData = await axios.get(`${baseUrl}/api/auth`, {
          headers: {
            Authorization: token.toString(),
          },
        });

        if (data.user._id !== product.user._id) {
          throw new Error("You can`t edit this product");
        }
      } catch (error) {
        toast.error("YOU CANNOT EDIT THIS PRODUCT", {
          duration: 15000,
        });
        console.error(error);
        return router.push("/");
      }
    };

    profileCheck();
  }, []);

  const pastPrice = product?.pastPrice || "";

  const initialValues: initialValuesInterface = {
    name: product.name,
    mainPicture: "",
    price: product.price,
    pastPrice: pastPrice,
    quantity: product.quantity,
    description: product.description,
    category: product.category,
    pictures: [],
  };

  return (
    <div className="lg:mx-24 md:mx-12 mx-3 lg:mt-40 mt-32 ">
      <Formik
        initialValues={initialValues}
        validationSchema={Yup.object({
          mainPicture: Yup.mixed(),
          // .test("FILE_SIZE", "Too big!", (value) => {
          //   if (value && (value as File).size) {
          //     return (value as File).size < 2024 * 2024;
          //   }
          //   return false;
          // })
          // .test("FILE_TYPE", "Invalid file type", (value) => {
          //   if (value && (value as File).type) {
          //     return ["image/png", "image/jpeg"].includes(
          //       (value as File).type
          //     );
          //   }
          //   return false;
          // }),

          pictures: Yup.mixed()
            .test(
              "MAX_IMAGES",
              "Exceeded maximum number of pictures (4)",
              (value) => (value as FileList).length <= 4
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
                    (value as FileList)[i].type
                  )
                ) {
                  return false;
                }
              }
              return true;
            }),

          price: Yup.number().moreThan(0),
          pastPrice: Yup.number().moreThan(
            Yup.ref("price"),
            "Past price must be greater than price"
          ),
          name: Yup.string()
            .min(2, "Atleast 2 characters")
            .max(25, "Name must be less than 25 characters"),
          quantity: Yup.number().moreThan(0),
          description: Yup.string()
            .min(10, "Atleast 10 characters")
            .max(500, "Name must be less than 500 characters"),
          category: Yup.string(),
        })}
        onSubmit={async (values, { setSubmitting }) => {
          const sumbitData = async (token: string) => {
            const formData = new FormData();
            try {
              const editedProduct: Partial<initialValuesInterface> = {};
              const imgArr: string[] = [];
              let mainImg;
              if (values.mainPicture) {
                formData.append("file", mainPicture);
                formData.append("upload_preset", "NewMarket");
                const resMain = await axios.post(
                  `https://api.cloudinary.com/v1_1/dw0j1mmbp/image/upload`,
                  formData
                );

                mainImg = resMain.data.secure_url;
              }
              if (values.pictures.length >= 1) {
                for (let i = 0; i < pictures.length; i++) {
                  formData.append("file", pictures[i]);
                  formData.append("upload_preset", "NewMarket");
                  const resArr = await axios.post(
                    `https://api.cloudinary.com/v1_1/dw0j1mmbp/image/upload`,
                    formData
                  );
                  imgArr.push(resArr.data.secure_url);
                }
              }

              if (mainImg && mainImg.length >= 1) {
                editedProduct.mainPicture = mainImg;
              }

              if (imgArr && imgArr.length >= 1) {
                editedProduct.pictures = imgArr;
              }

              for (let property in values) {
                if (
                  typeof values[property] === "string" ||
                  typeof values[property] === "number"
                ) {
                  if (
                    values[property].toString().trim().length > 1 &&
                    values[property] !== product[property]
                  ) {
                    editedProduct[property] = values[property];
                  }
                }
              }

              const res = await axios.put(
                `${baseUrl}/api/item/${product._id}`,
                editedProduct,
                {
                  headers: {
                    Authorization: token.toString(),
                  },
                }
              );

              router.refresh();
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

          toast.promise(sumbitData(token), {
            loading: `Editing new product - ${name}...`,
            success: <b>New product ${name} is edited</b>,
            error: <b>New product {name} is`nt edited</b>,
          });

          setSubmitting(false);

          toast("The changes will take effect after some time", {
            duration: 15000,
          });
        }}
      >
        {({ setFieldValue, values, errors }) => (
          <Form
            className="lg:px-8 pt-6 pb-8 flex flex-col m-auto xl:w-[1000px] ms:w-[80%] w-[250px]  justify-center"
            encType="multipart/form-data"
          >
            <h2 className="font-bold text-2xl mb-6 text-red-500">
              Edit Your Product
            </h2>

            <div className="xl:flex block justify-center">
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
                    placeholder={`Previous name - ${product.name}`}
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
                    placeholder={`Previous price - ${product.price}`}
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
                    placeholder={`Previous quantity - ${product.quantity}`}
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

              <div className="ml-5 w-full xl:block flex justify-center">
                <div className="w-full">
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
            <div className="inline-flex items-center justify-start sm:mx-0 mx-auto">
              <Ripples during={800} color="#6eb9f7">
                <button
                  className="border-0 rounded-md px-4 py-2 text-base font-medium text-white uppercase transition-colors duration-500 ease-in-out bg-blue-500 shadow-md focus:outline-none hover:bg-blue-600 active:bg-blue-400"
                  type="submit"
                >
                  Edit Your Product
                </button>
              </Ripples>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
