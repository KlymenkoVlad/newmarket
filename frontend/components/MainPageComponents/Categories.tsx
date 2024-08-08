import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import Link from "next/link";
import {
  MdFoodBank,
  MdLaptop,
  MdMan,
  MdShoppingCart,
  MdTableRestaurant,
  MdWatch,
  MdWoman,
} from "react-icons/md";
import { IoMdFootball } from "react-icons/io";

interface CategoryProps {
  name: string;
  Icon: React.ComponentType<{ className?: string }>; // Updated type to accept className
  link: string;
}

const Category = ({ name, Icon, link }: CategoryProps) => {
  return (
    <Link href={link}>
      <div className="h-[140px] w-[170px] items-center justify-center rounded-md border-2 border-gray-200">
        <div className="flex h-full w-full flex-col items-center justify-center">
          <Icon className="inline-block text-6xl" />
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
            Icon={MdWoman}
          />
          <Category
            link="category/menfashion"
            name="Men’s Fashion"
            Icon={MdMan}
          />
          <Category
            link="category/electronics"
            name="Electronics"
            Icon={MdLaptop}
          />
          <Category
            link="category/furniture"
            name="Furniture"
            Icon={MdTableRestaurant}
          />
          <Category
            link="category/football"
            name="Football"
            Icon={IoMdFootball}
          />
          <Category
            link="category/groceries"
            name="Groceries"
            Icon={MdFoodBank}
          />
          <Category
            link="category/accessories"
            name="Accessories"
            Icon={MdWatch}
          />
          <Category link="category/other" name="Other" Icon={MdShoppingCart} />
        </div>
      </div>
      <div className="mb-12 h-px bg-gray-400"></div>
    </div>
  );
};

Categories.propTypes = {};

export default Categories;
