import baseUrl from "@/utils/baseUrl";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import WishListBtnAddItem from "./WishListBtnAddItem";
import { Product } from "@/types/types";

interface ItemProps {
  product: Product;
}

const Item: React.FC<ItemProps> = ({ product }) => {
  return (
    <div className="flex justify-center">
      <div>
        <Link
          href="/product/[id]-[name]"
          as={`/product/${product._id}-${product.name}`}
          shallow
        >
          <div className="w-[270px] h-[250px] bg-gray-100 relative rounded-sm">
            <div className="w-[270px] h-[250px] flex justify-center items-center">
              <img
                className="max-w-full max-h-full"
                src={product.mainPicture}
                alt="Item for Sale"
              />
            </div>
            {product.pastPrice && (
              <div className="w-[55px] h-[26px] bg-red-500 absolute left-4 top-5 rounded-md flex justify-around items-center text-white">
                <p>
                  -
                  {Math.floor(
                    ((product.pastPrice - product.price) / product.pastPrice) *
                      100
                  )}
                  %
                </p>
              </div>
            )}
            <WishListBtnAddItem product={product} />
          </div>
        </Link>
        <p className="block text-base font-medium ">{product.name}</p>
        {product.pastPrice ? (
          <div className="flex">
            <p className=" text-red-500 text-base">{product.price}$</p>
            <p className="ml-4 line-through text-gray-500 text-base">
              {product.pastPrice}$
            </p>
          </div>
        ) : (
          <div className="flex">
            <p className=" text-red-500 text-base">{product.price}$</p>
          </div>
        )}
        <p className="block">Rating - {product.rating}</p>
      </div>
    </div>
  );
};

export default Item;
