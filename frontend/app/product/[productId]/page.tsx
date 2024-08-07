import Item, { renderFilledStars } from "@/components/Common/Item";
import { baseUrl } from "@/utils/baseUrl";
import Image from "next/image";
import Btn from "./Btn";
import IncDecBtn from "./IncDecBtn";
import AddToCartBtn from "./AddToCartBtn";
import WishListBtnAddForPage from "@/components/Common/WishListBtnForPage";

import { Product } from "@/types/types";
import SliderForItem from "./SliderForItem";
import Link from "next/link";
import { MdAutorenew, MdDeliveryDining } from "react-icons/md";

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
  const product: Product = await getData(params.productId.split("-")[0]);

  const slides = [product.mainPicture];

  if (product.pictures) {
    slides.push(...product.pictures);
  }

  const { product: relatedItems }: ProductData = await getData(
    `/?page=1&limit=4&category=${product?.category}`,
  );

  return (
    <div className="px-6">
      <p className="mb-0 ms:mb-4">
        <Link
          className="duration-600 text-black transition-colors ease-in-out hover:text-red-400"
          href="/"
        >
          New Market
        </Link>
        <span className="mx-3">/</span>
        <Link
          className="duration-600 text-black transition-colors ease-in-out hover:text-red-400"
          href={`/category/${product?.category}`}
        >
          {product?.category}
        </Link>
        <span className="mx-3">/</span>
        <span className="text-red-500">{truncateString(product.name, 25)}</span>
      </p>
      <div className="mb-28 flex justify-center">
        <div className="flex">
          <div className="hidden w-[330px] ms:w-[450px] sm:w-[600px] lg:block">
            <SliderForItem slideItems={slides} />
          </div>

          <div className="sm:ml-6 xl:ml-24">
            <div className="w-[330px] ms:w-[450px] sm:w-[600px] lg:hidden">
              <SliderForItem slideItems={slides} />
            </div>
            <div className="mx-4">
              <h1 className="my-3 text-center text-lg font-semibold ms:text-left">
                {product.name}
              </h1>
              <div className="mb-3 flex justify-center text-center ms:justify-normal ms:text-left">
                <div className="flex items-center">
                  {renderFilledStars(product.rating)}
                  <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                    {product.rating} out of 5
                  </p>
                </div>
              </div>
              <div className="mb-5 flex justify-center ms:justify-normal">
                <h2>
                  <span className="text-lg font-semibold">
                    ${product.price}
                  </span>
                  {product.pastPrice && (
                    <span className="ml-3 text-sm font-medium text-red-900 line-through">
                      ${product?.pastPrice}
                    </span>
                  )}
                  {"  "}| Seller:{" "}
                  {product?.user?.name ? product.user.name : "Unknown"} |{" "}
                  <span
                    className={` ${
                      product.quantity >= 1 ? "text-green-500" : "text-red-500"
                    }`}
                  >
                    {product.quantity >= 1 ? " In stock" : " Not available"}
                  </span>
                </h2>
              </div>
              <p className="mx-auto mb-5 w-[300px] ms:mx-0 ms:w-[430px] ms:text-left sm:w-[480px] lg:w-[350px] xl:w-[500px]">
                {product.description}
              </p>
              <div className="mb-5 h-px w-[300px] bg-gray-400 ms:w-[430px] sm:w-[480px] lg:w-[350px] xl:w-[500px]"></div>
            </div>

            <div className="mb-6 flex items-center justify-center">
              <div className="flex justify-around">
                <IncDecBtn />

                <WishListBtnAddForPage product={product} />
              </div>
            </div>

            <div className="mb-6 flex justify-around">
              <Btn text={"Buy Now"} product={product} />
              <AddToCartBtn text={"Add to Cart"} product={product} />
            </div>

            <div className="border">
              <div className="flex h-[90px] items-center border">
                <div className="mx-5 flex h-[40px] items-center justify-center">
                  <MdDeliveryDining className="text-4xl" />
                </div>
                <div>
                  <h4 className="text-xs font-medium">Free Delivery</h4>
                  <h4 className="text-xs font-medium underline">
                    Enter your postal code for Delivery
                  </h4>
                </div>
              </div>

              <div className="flex h-[90px] items-center border">
                <div className="mx-5 flex h-[40px] items-center justify-center">
                  <MdAutorenew className="text-4xl" />
                </div>
                <div>
                  <h4 className="text-sm font-medium">Return Delivery</h4>
                  <h4 className="text-xs font-medium underline">
                    Free 30 Days Delivery Returns
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-6 ml-16">
        <div className="mb-6 flex items-center">
          <div className="h-[40px] w-[20px] rounded-[10%] bg-red-500"></div>
          <p className="ml-5 font-medium text-red-500">Related Item</p>
        </div>
      </div>
      <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">
        {relatedItems && relatedItems.map((item) => <Item product={item} />)}
      </div>
    </div>
  );
}
