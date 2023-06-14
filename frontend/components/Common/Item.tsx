import baseUrl from "@/utils/baseUrl";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ItemProps {
  id: string;
  name: string;
  price: number;
  rating: number;
  mainPicture: string;
  pastPrice: number | undefined;
}

const Item: React.FC<ItemProps> = ({
  name,
  price,
  rating,
  mainPicture,
  pastPrice,
  id,
}) => {
  return (
    <div className="flex justify-center">
      <div>
        <Link href="/product/[id]-[name]" as={`/product/${id}-${name}`} shallow>
          <div className="w-[270px] h-[250px] bg-gray-100 relative rounded-sm">
            <div className="w-[270px] h-[250px] flex justify-center items-center">
              <img
                className="max-w-full max-h-full"
                src={mainPicture}
                alt="Item for Sale"
              />
            </div>
            {pastPrice && (
              <div className="w-[55px] h-[26px] bg-red-500 absolute left-4 top-5 rounded-md flex justify-around items-center text-white">
                <p>-{Math.floor(((pastPrice - price) / pastPrice) * 100)}%</p>
              </div>
            )}
            <div className="w-[30px] h-[30px] bg-white rounded-[100%] mx-3 flex items-center justify-center absolute right-1 top-12">
              <img
                className="w-6 h-6 max-w-full max-h-full"
                src="/icons/View.png"
                alt=""
              />
            </div>
            <div className="w-[30px] h-[30px] bg-white rounded-[100%] mx-3 flex items-center justify-center absolute right-1 top-4">
              <Image
                className="mt-0.5"
                src="/icons/wishlist.png"
                alt="wishlist"
                width={32}
                height={32}
              />
            </div>
          </div>
        </Link>
        <p className="block text-base font-medium ">{name}</p>
        {pastPrice ? (
          <div className="flex">
            <p className=" text-red-500 text-base">{price}$</p>
            <p className="ml-4 line-through text-gray-500 text-base">
              {pastPrice}$
            </p>
          </div>
        ) : (
          <div className="flex">
            <p className=" text-red-500 text-base">{price}$</p>
          </div>
        )}
        <p className="block">Rating - {rating}</p>
      </div>
    </div>
  );
};

export default Item;
