import React from "react";

const Item = () => {
  return (
    <div className="flex justify-center">
      <div>
        <div className="w-[270px] h-[250px] bg-gray-100 relative rounded-sm">
          <img
            className="max-w-full max-h-full absolute left-[15%] top-[15%]"
            src="./products/Item.png"
            alt="Item for Sale"
          />
          <div className="w-[55px] h-[26px] bg-red-500 absolute left-4 top-5 rounded-md flex justify-around items-center text-white">
            <p>-40%</p>
          </div>
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
        <p className="block">HAVIT HV-G92 Gamepad</p>
        <div className="flex">
          <p>$120</p>
          <p className="ml-4 line-through">$160</p>
        </div>
        <p className="block">Rating</p>
      </div>
    </div>
  );
};

export default Item;
