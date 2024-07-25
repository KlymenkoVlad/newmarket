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
          <div className="relative h-[250px] rounded-sm border ms:h-[300px] sm:h-[340px] md:w-[660px]">
            <div className="flex h-[250px] items-center justify-center p-4 ms:h-[300px] sm:h-[340px] md:w-[660px]">
              <img
                className="max-h-full max-w-full"
                src={product.mainPicture}
                alt="Item for Sale"
              />
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

export default SliderItemMainPage;
