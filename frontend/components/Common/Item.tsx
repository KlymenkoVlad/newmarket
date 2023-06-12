import React from "react";

interface ItemProps {
  name: string;
  price: number;
  rating: number;
  img: string[];
  discount: number | undefined;
}

const Item: React.FC<ItemProps> = ({ name, price, rating, img, discount }) => {
  return (
    // <div className="flex justify-center">
    //   <div>
    //     <div className="w-[270px] h-[250px] bg-gray-100  rounded-sm">
    //       <div className="w-[270px] h-[250px] flex justify-center items-center">
    //         <img className=" m-auto" src={img[0]} alt="Item for Sale" />
    //       </div>
    //       <div className="w-[55px] h-[26px] bg-red-500 absolute left-4 top-5 rounded-md flex justify-around items-center text-white">
    //         <p>-40%</p>d
    //       </div>
    //       <div className="w-[30px] h-[30px] bg-white rounded-[100%] mx-3 flex items-center justify-center absolute right-1 top-12">
    //         <img
    //           className="w-6 h-6 max-w-full max-h-full"
    //           src="./icons/View.png"
    //           alt=""
    //         />
    //       </div>
    //       <div className="w-[30px] h-[30px] bg-white rounded-[100%] mx-3 flex items-center justify-center absolute right-1 top-4">
    //         <img
    //           className="mt-0.5 w-5 h-4 max-w-full max-h-full"
    //           src="./icons/wishlist.png"
    //           alt=""
    //         />
    //       </div>
    //     </div>
    <div className="flex justify-center">
      <div>
        <div className="w-[270px] h-[250px] bg-gray-100 relative rounded-sm">
          <div className="w-[270px] h-[250px] flex justify-center items-center">
            <img
              className="max-w-full max-h-full"
              src={img[0]}
              alt="Item for Sale"
            />
          </div>
          {discount && (
            <div className="w-[55px] h-[26px] bg-red-500 absolute left-4 top-5 rounded-md flex justify-around items-center text-white">
              <p>-{Math.floor(((price - discount) / price) * 100)}%</p>
            </div>
          )}
          <div className="w-[30px] h-[30px] bg-white rounded-[100%] mx-3 flex items-center justify-center absolute right-1 top-12">
            <img
              className="w-6 h-6 max-w-full max-h-full"
              src="./icons/View.png"
              alt=""
            />
          </div>
          <div className="w-[30px] h-[30px] bg-white rounded-[100%] mx-3 flex items-center justify-center absolute right-1 top-4">
            <img
              className="mt-0.5 w-5 h-4 max-w-full max-h-full"
              src="./icons/wishlist.png"
              alt=""
            />
          </div>
        </div>
        <p className="block text-base font-medium ">{name}</p>
        {discount ? (
          <div className="flex">
            <p className=" text-red-500 text-base">{discount}$</p>
            <p className="ml-4 line-through text-gray-500 text-base">
              {price}$
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
