import baseUrl from "@/utils/baseUrl";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import WishListBtnAddItem from "./WishListBtnAddItem";
import { Product } from "@/types/types";
import truncateString from "@/utils/truncateString";

interface ItemProps {
  product: Product;
  itemForEdit?: boolean;
}

const Item: React.FC<ItemProps> = ({ product, itemForEdit = false }) => {
  return (
    <div className="flex justify-center">
      <div>
        <Link
          href={
            itemForEdit ? `/product/[id]-[name]/edit` : `/product/[id]-[name]`
          }
          as={
            itemForEdit
              ? `/product/${product._id}-${product.name}/edit`
              : `/product/${product._id}-${product.name}`
          }
          shallow
        >
          <div className="w-[260px] h-[240px] bg-gray-100 relative rounded-sm">
            <div className="w-[260px] h-[240px] flex justify-center items-center">
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
        <p className="block text-base font-medium ">
          {truncateString(product.name, 25)}
        </p>
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
