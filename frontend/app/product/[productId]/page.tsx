import Item from "@/components/Common/Item";
import { baseUrl } from "@/utils/baseUrl";
import Image from "next/image";
import Btn from "./Btn";
import IncDecBtn from "./IncDecBtn";
import AddToCartBtn from "./AddToCartBtn";
import WishListBtnAddForPage from "@/components/Common/WishListBtnForPage";

import { Product } from "@/types/types";
import SliderForItem from "./SliderForItem";
import SliderItem from "./SliderItem";
import Link from "next/link";

async function getData(params: string) {
  try {
    const res = await fetch(`${baseUrl}/api/item/${params}`, {
      next: { revalidate: 420 },
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
        <Link
          className="text-black hover:text-red-400 transition-colors duration-600 ease-in-out"
          href="/"
        >
          New Market
        </Link>
        <span className="mx-3">/</span>
        <Link
          className="text-black hover:text-red-400 transition-colors duration-600 ease-in-out "
          href={`/category/${product?.category}`}
        >
          {product?.category}
        </Link>
        <span className="mx-3">/</span>
        <span className=" text-red-500">
          {truncateString(product.name, 25)}
        </span>
      </p>
      <div className="flex justify-center mb-28">
        <div className="flex ">
          <div className="lg:block hidden h-96 w-[600px]">
            <SliderItem slideItems={slides} />
          </div>

          <div className="xl:ml-24 sm:ml-6 lg:w-1/2 md:w-2/5">
            <div className="lg:hidden sm:w-[600px] ms:w-[450px] w-[330px]">
              <SliderForItem slideItems={slides} />
            </div>
            <h1 className="my-3 font-semibold text-lg ms:text-left text-center">
              {product.name}
            </h1>
            <div className="flex mb-3 ms:text-left text-center ms:justify-normal justify-center">
              <h3 className="">Rating - {product.rating} | </h3>
              <h3
                className={` ${
                  product.quantity >= 1 ? "text-green-500" : "text-red-500"
                }`}
              >
                {product.quantity >= 1 ? " In stock" : " Not available"}
              </h3>
            </div>
            <div className="flex mb-5 ms:justify-normal justify-center">
              <h2>
                <span className="font-bold ">${product.price}</span> | Seller:{" "}
                {product?.user?.name ? product.user.name : "Unknown"}
              </h2>
            </div>
            <p className="xl:w-[400px]  ms:w-[340px] w-[250px] mb-5 ms:text-left ms:mx-0 mx-auto">
              {product.description}
            </p>
            <div className="h-px lg:w-[350px] w-[300px] bg-gray-400 mb-5"></div>

            <div className="flex justify-center items-center mb-6">
              <div className="flex justify-around">
                <IncDecBtn />

                <WishListBtnAddForPage product={product} />
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
