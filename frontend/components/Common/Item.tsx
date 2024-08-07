import Link from "next/link";
import React from "react";
import WishListBtnAddItem from "./WishListBtnAddItem";
import { Product } from "@/types/types";
import truncateString from "@/utils/truncateString";
import { MdNoPhotography } from "react-icons/md";

import { MdOutlineStar } from "react-icons/md";
import { MdOutlineStarBorder } from "react-icons/md";

interface ItemProps {
  product: Product;
  itemForEdit?: boolean;
  itemForWishList?: boolean;
}

export const renderFilledStars = (rating: number) => {
  const starElements = [];
  for (let i = 0; i < rating; i++) {
    starElements.push(
      <MdOutlineStar className="text-xl text-yellow-500" key={i} />,
    );
  }

  const remainingStars = 5 - starElements.length;
  for (let i = 0; i < remainingStars; i++) {
    starElements.push(
      <MdOutlineStarBorder
        className="text-xl text-yellow-500"
        key={i + rating}
      />,
    );
  }

  return <div className="flex">{starElements}</div>;
};

const Item: React.FC<ItemProps> = ({
  product,
  itemForEdit = false,
  itemForWishList = false,
}) => {
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
          <div className="relative h-[240px] w-[260px] rounded-sm border-2">
            <div className="flex h-[240px] w-[260px] items-center justify-center p-2">
              {product?.mainPicture ? (
                <img
                  className="max-h-full max-w-full"
                  src={product.mainPicture}
                  alt={"Item for Sale"}
                />
              ) : (
                <MdNoPhotography />
              )}
            </div>
            {product.pastPrice && (
              <div className="absolute left-4 top-5 flex h-[26px] w-[55px] items-center justify-around rounded-md bg-red-500 text-white">
                <p>
                  -
                  {Math.floor(
                    ((product.pastPrice - product.price) / product.pastPrice) *
                      100,
                  )}
                  %
                </p>
              </div>
            )}
            <WishListBtnAddItem product={product} />
          </div>
        </Link>
        <p className="block text-base font-medium">
          {truncateString(product.name, 25)}
        </p>
        {product.pastPrice ? (
          <div className="flex">
            <p className="text-base text-red-500">{product.price}$</p>
            <p className="ml-4 text-base text-gray-500 line-through">
              {product.pastPrice}$
            </p>
          </div>
        ) : (
          <div className="flex">
            <p className="text-base text-red-500">{product.price}$</p>
          </div>
        )}

        <div className="flex items-center space-x-1">
          {renderFilledStars(product.rating)}
        </div>
      </div>
    </div>
  );
};

export default Item;
