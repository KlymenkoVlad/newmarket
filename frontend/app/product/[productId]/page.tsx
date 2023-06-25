import Button from "@/components/Common/Button";
import Item from "@/components/Common/Item";
import baseUrl from "@/utils/baseUrl";
import Image from "next/image";
import Btn from "./Btn";
import IncDecBtn from "./IncDecBtn";
import AddToCartBtn from "./AddToCartBtn";
import WishListBtnAdd from "@/components/Common/WishListBtnAdd";

import { Product } from "@/types/types";

async function getData(params: string) {
  try {
    const res = await fetch(`${baseUrl}/api/item/${params}`, {
      next: { revalidate: 1 },
      method: "GET",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return res.json();
  } catch (error) {
    console.error(error);
  }
}

interface Props {
  params: { productId: string };
}

interface ProductData {
  product: Product[];
}

export default async function BlogPostPage({ params }: Props) {
  const product: Product = await getData(params.productId.split("-")[0]);

  console.log(product.user.name);

  const { product: relatedItems }: ProductData = await getData(
    `/?page=1&limit=5&category=${product?.category}`
  );

  const entity: number = product?.pictures?.length!;

  return (
    <div className="mx-24">
      <p className="mb-8">
        Account / {product.category} / {product.name}
      </p>
      <div className="flex justify-evenly items-center mb-28">
        <div className="flex ">
          <div
            className={`grid grid-rows-${
              product?.pictures && product.pictures.length + 1
            } grid-flow-col  gap-4 mr-12`}
          >
            {product.pictures &&
              product.pictures.map((picture) => (
                <div className="row-span-1 bg-gray-300 m-auto border">
                  <Image
                    src={picture}
                    alt={product.name}
                    width={170}
                    height={138}
                  />
                </div>
              ))}
            <div className={`row-span-4 bg-gray-200 m-auto border`}>
              <Image
                src={product.mainPicture}
                alt="Banana"
                width={500}
                height={600}
              />
            </div>
          </div>

          <div className="">
            <h1 className="mb-3 font-semibold text-lg">{product.name}</h1>
            <div className="flex mb-3">
              <h3>Rating - {product.rating} | </h3>
              <h3
                className={` ${
                  product.quantity >= 1 ? "text-green-500" : "text-red-500"
                }`}
              >
                {product.quantity >= 1 ? " In stock" : " Not available"}
              </h3>
            </div>
            <div className="flex mb-5">
              <h2>
                <span className="font-bold">${product.price}</span> | Seller:{" "}
                {product.user.name}
              </h2>
            </div>
            <p className="w-[400px] mb-5">{product.description}</p>
            <div className="h-px w-[400px] bg-gray-400 mb-5"></div>

            <div className="flex justify-center items-center mb-6">
              <div className="flex justify-center">
                <IncDecBtn />

                <WishListBtnAdd product={product} />
              </div>
            </div>

            <div className="flex justify-around mb-6">
              <Btn text={"Buy Now"} product={product} />
              <AddToCartBtn text={"Add to Cart"} product={product} />
            </div>

            <div className="border">
              <div className="flex h-[90px] border items-center ">
                <div className="h-[40px] mx-5">
                  <Image
                    src="/icons/Icon-delivery-dark.png"
                    alt="wishlist"
                    width={40}
                    height={40}
                  />
                </div>
                <div>
                  <h4 className=" text-xs font-medium">Free Delivery</h4>
                  <h4 className=" text-xs font-medium underline">
                    Enter your postal code for Delivery Availability
                  </h4>
                </div>
              </div>

              <div className="flex h-[90px] border items-center ">
                <div className="h-[40px] mx-5 ">
                  <button type="button">
                    <Image
                      src="/icons/Icon-return.svg"
                      alt="wishlist"
                      width={40}
                      height={40}
                    />
                  </button>
                </div>
                <div>
                  <h4 className=" text-sm font-medium">Return Delivery</h4>
                  <h4 className=" text-xs font-medium underline">
                    Free 30 Days Delivery Returns. Details
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-6 ml-16">
        <div className="flex items-center mb-6">
          <div className="w-[20px] h-[40px] bg-red-500 rounded-[10%] "></div>
          <p className="text-red-500 font-medium ml-5">Related Item</p>
        </div>
      </div>
      <div className="grid grid-cols-5 gap-8 mb-10">
        {relatedItems && relatedItems.map((item) => <Item product={item} />)}
      </div>
    </div>
  );
}
