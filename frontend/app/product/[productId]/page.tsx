import Button from "@/components/Common/Button";
import Item from "@/components/Common/Item";
import baseUrl from "@/utils/baseUrl";
import Image from "next/image";
import Btn from "./Btn";
import IncDecBtn from "./IncDecBtn";
import AddToCartBtn from "./AddToCartBtn";
import WishListBtnAdd from "@/components/Common/WishListBtnAdd";

import { Product } from "@/types/types";
import SliderItemPage from "@/components/Common/SliderItemPage";

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

function truncateString(str: string, maxLength: number) {
  if (str.length <= maxLength) {
    return str;
  } else {
    return str.slice(0, maxLength) + "...";
  }
}

export default async function BlogPostPage({ params }: Props) {
  // const product: Product = await getData(params.productId.split("-")[0]);
  const product: Product = await getData(params.productId.split("-")[0]);

  const slides = [product.mainPicture];

  if (product.pictures) {
    slides.push(...product.pictures);
  }

  const { product: relatedItems }: ProductData = await getData(
    `/?page=1&limit=4&category=${product?.category}`
  );

  const entity: string = `xl:grid-cols-${product?.pictures
    ?.length!} grid-cols-2`;

  return (
    <div className="sm:mx-24 mx-6 mb-16 ms:mt-36 mt-24">
      <p className="mb-8">
        Account / {product?.category} / {truncateString(product.name, 25)}
      </p>
      <div className="flex justify-center mb-28">
        <div className="flex ">
          <div className="md:grid hidden gap-4 items-center w-1/2">
            <div>
              <img
                className="h-auto max-w-sm max-h-[400px] rounded-lg mx-auto"
                src={product.mainPicture}
                alt={product.name}
              />
            </div>
            <div className={`grid ${entity} gap-4 items-center `}>
              {product.pictures &&
                product.pictures.map((picture) => (
                  <div>
                    <img
                      className="max-h-28 max-w-[150px] rounded-lg mx-auto"
                      src={picture}
                      alt={product.name}
                    />
                  </div>
                ))}
            </div>
          </div>

          <div className="xl:ml-24 sm:ml-6 lg:w-1/2 md:w-2/5">
            <div>
              <SliderItemPage slides={slides} />
            </div>
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
                {product?.user?.name ? product.user.name : "Unknown"}
              </h2>
            </div>
            <p className="xl:w-[500px] lg:w-[350px] ms:w-[350px] w-[250px] mb-5">
              {product.description}
            </p>
            <div className="h-px lg:w-[400px] w-[300px] bg-gray-400 mb-5"></div>

            <div className="flex justify-center items-center mb-6">
              <div className="flex justify-around">
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
                    src="/icons/icon-delivery-dark.png"
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
      <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8 mb-8">
        {relatedItems && relatedItems.map((item) => <Item product={item} />)}
      </div>
    </div>
  );
}
