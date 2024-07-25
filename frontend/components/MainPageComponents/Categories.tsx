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
      <div className="flex h-[140px] w-[170px] items-center justify-around rounded-md border-2 border-solid border-gray-200">
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
    <div className="relative mx-6 sm:mx-24">
      <div className="mb-6">
        <div className="mb-6 flex items-center">
          <div className="h-[40px] w-[20px] rounded-[10%] bg-red-500"></div>
          <p className="ml-5 font-medium text-red-500">Categories</p>
        </div>
        <h3 className="text-2xl font-semibold">Browse By Category</h3>
      </div>

      <div className="flex justify-center">
        <div className="mb-12 grid grid-flow-dense grid-cols-1 gap-14 ms:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-8">
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
      <div className="mb-12 h-px bg-gray-400"></div>
    </div>
  );
};

Categories.propTypes = {};

export default Categories;
