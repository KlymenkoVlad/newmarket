import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";

const Categories = (props) => {
  return (
    <div className="mx-24 relative">
      <div className="mb-6">
        <div className="flex items-center mb-6">
          <div className="w-[20px] h-[40px] bg-red-500 rounded-[10%] "></div>
          <p className="text-red-500 font-medium ml-5">Categories</p>
        </div>
        <div className="flex">
          <h3 className=" font-semibold text-2xl">Browse By Category</h3>

          <div className="ml-64 flex absolute right-4">
            <div className="w-[46px] h-[46px] bg-gray-200 rounded-[100%] mx-3 flex items-center justify-center ">
              <Image
                className="absolute max-w-full max-h-full"
                src="/icons/vector.png"
                alt="icon"
                width={16}
                height={14}
              />
            </div>
            <div className="w-[46px] h-[46px] bg-gray-200 rounded-[100%] mx-3 flex items-center justify-center">
              <Image
                className="absolute max-w-full max-h-full rotate-180"
                src="/icons/vector.png"
                alt="icon"
                width={16}
                height={14}
              />
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="flex justify-around items-center mb-12">
          <div className="flex justify-around items-center w-[170px] h-[140px] rounded-md border-gray-200 border-2 border-solid">
            <div>
              <Image
                width={56}
                height={56}
                src="/categories/CellPhone.png"
                alt="Category"
              />
              <p className="">Phones</p>
            </div>
          </div>
          <div className="flex justify-around items-center w-[170px] h-[140px] rounded-md border-gray-200 border-2 border-solid">
            <div>
              <Image
                width={56}
                height={56}
                src="/categories/CellPhone.png"
                alt="Category"
              />
              <p className="">Phones</p>
            </div>
          </div>
          <div className="flex justify-around items-center w-[170px] h-[140px] rounded-md border-gray-200 border-2 border-solid">
            <div>
              <Image
                width={56}
                height={56}
                src="/categories/CellPhone.png"
                alt="Category"
              />
              <p className="">Phones</p>
            </div>
          </div>
          <div className="flex justify-around items-center w-[170px] h-[140px] rounded-md border-gray-200 border-2 border-solid">
            <div>
              <Image
                width={56}
                height={56}
                src="/categories/CellPhone.png"
                alt="Category"
              />
              <p className="">Phones</p>
            </div>
          </div>
          <div className="flex justify-around items-center w-[170px] h-[140px] rounded-md border-gray-200 border-2 border-solid">
            <div>
              <Image
                width={56}
                height={56}
                src="/categories/CellPhone.png"
                alt="Category"
              />
              <p className="">Phones</p>
            </div>
          </div>
          <div className="flex justify-around items-center w-[170px] h-[140px] rounded-md border-gray-200 border-2 border-solid">
            <div>
              <Image
                width={56}
                height={56}
                src="/categories/CellPhone.png"
                alt="Category"
              />
              <p className="">Phones</p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-px bg-gray-400 mb-12"></div>
    </div>
  );
};

Categories.propTypes = {};

export default Categories;
