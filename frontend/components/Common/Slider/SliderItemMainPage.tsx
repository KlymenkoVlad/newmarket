import Link from "next/link";
import React from "react";
import WishListBtnAddItem from "../WishListBtnAddItem";
import { Product } from "@/types/types";
import truncateString from "@/utils/truncateString";
import { renderFilledStars } from "../Item";

interface ItemProps {
  product: Product;
  itemForEdit?: boolean;
}

const SliderItemMainPage: React.FC<ItemProps> = ({
  product,
  itemForEdit = false,
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
          <div className="md:w-[660px] sm:h-[340px] ms:h-[300px] h-[250px] border relative rounded-sm">
            <div className="md:w-[660px] sm:h-[340px] ms:h-[300px] h-[250px] flex justify-center items-center p-4">
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
        <div className="flex items-center space-x-1">
          {renderFilledStars(product.rating)}
        </div>
      </div>
    </div>
  );
};

export default SliderItemMainPage;
