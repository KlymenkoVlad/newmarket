import Link from "next/link";
import React from "react";
import WishListBtnAddItem from "./WishListBtnAddItem";
import { Product } from "@/types/types";
import truncateString from "@/utils/truncateString";

interface ItemProps {
  product: Product;
  itemForEdit?: boolean;
  itemForWishList?: boolean;
}

const FilledStar = () => {
  return (
    <svg
      className="mr-px h-4 w-4 text-yellow-300"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 22 20"
    >
      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
    </svg>
  );
};

const UnfilledStar = () => {
  return (
    <svg
      className="mr-px h-4 w-4 text-gray-300"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 22 20"
    >
      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
    </svg>
  );
};

export const renderFilledStars = (rating: number) => {
  const starElements = [];
  for (let i = 0; i < rating; i++) {
    starElements.push(<FilledStar key={i} />);
  }

  const remainingStars = 5 - starElements.length;
  for (let i = 0; i < remainingStars; i++) {
    starElements.push(<UnfilledStar key={i + rating} />);
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
          <div className="relative h-[240px] w-[260px] rounded-sm border">
            <div className="flex h-[240px] w-[260px] items-center justify-center p-2">
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

export default Item;
