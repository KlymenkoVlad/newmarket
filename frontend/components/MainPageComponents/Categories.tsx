import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import Link from "next/link";

interface CategoryProps {
  name: string;
  img: string;
  link: string;
}

const Category = ({ name, img, link }: CategoryProps) => {
  return (
    <Link href={link}>
      <div className="flex justify-around items-center w-[170px] h-[140px] rounded-md border-gray-200 border-2 border-solid">
        <div className="">
          <Image
            width={56}
            height={56}
            src={img}
            alt={name}
            className="mx-auto"
          />
          <p className="block">{name}</p>
        </div>
      </div>
    </Link>
  );
};

const Categories = () => {
  return (
    <div className="sm:mx-24 mx-6 relative">
      <div className="mb-6">
        <div className="flex items-center mb-6">
          <div className="w-[20px] h-[40px] bg-red-500 rounded-[10%] "></div>
          <p className="text-red-500 font-medium ml-5">Categories</p>
        </div>
        <h3 className=" font-semibold text-2xl">Browse By Category</h3>
      </div>

      <div className="flex justify-center">
        <div className="grid 2xl:grid-cols-8 lg:grid-cols-4 ms:grid-cols-2 grid-cols-1 grid-flow-dense gap-14 mb-12">
          <Category
            link="category/womanfashion"
            name="Woman’s Fashion"
            img="/categories/woman.png"
          />
          <Category
            link="category/menfashion"
            name="Men’s Fashion"
            img="/categories/man.png"
          />
          <Category
            link="category/electronics"
            name="Electronics"
            img="/categories/CellPhone.png"
          />
          <Category
            link="category/furniture"
            name="Furniture"
            img="/categories/furniture.png"
          />
          <Category
            link="category/football"
            name="Football"
            img="/categories/football.png"
          />
          <Category
            link="category/groceries"
            name="Groceries"
            img="/categories/groceries.png"
          />
          <Category
            link="category/accessories"
            name="Accessories"
            img="/categories/accessories.png"
          />
          <Category
            link="category/other"
            name="Other"
            img="/categories/other.png"
          />
        </div>
      </div>
      <div className="h-px bg-gray-400 mb-12"></div>
    </div>
  );
};

Categories.propTypes = {};

export default Categories;
