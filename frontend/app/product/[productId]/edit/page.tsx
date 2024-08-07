import { Product } from "@/types/types";
import { baseUrl } from "@/utils/baseUrl";
import EditProductForm from "./EditProductForm";
import Image from "next/image";
import IncDecBtn from "../IncDecBtn";
import WishListBtnAddForPage from "@/components/Common/WishListBtnForPage";
import Btn from "../Btn";
import AddToCartBtn from "../AddToCartBtn";
import SliderForItem from "../SliderForItem";
import { MdAutorenew, MdDeliveryDining } from "react-icons/md";

interface Props {
  params: { productId: string };
}

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

interface ProductData {
  product: Product[];
}

export default async function Page({ params }: Props) {
  const product: Product = await getData(params.productId.split("-")[0]);

  const slides = [product.mainPicture];

  if (product.pictures) {
    slides.push(...product.pictures);
  }

  const { product: relatedItems }: ProductData = await getData(
    `/?page=1&limit=4&category=${product?.category}`,
  );

  const entity: string = `xl:grid-cols-${product?.pictures
    ?.length!} grid-cols-2`;

  return (
    <div className="px-6">
      <h2 className="my-20 mb-6 text-center text-2xl font-bold text-red-500">
        {`Your product (${product.name}) before changes`}
      </h2>
      <div className="mb-28 flex justify-center">
        <div className="flex">
          <div className="hidden w-1/2 items-center gap-4 md:grid">
            <div>
              <img
                className="mx-auto h-auto max-h-[400px] max-w-sm rounded-lg"
                src={product.mainPicture}
                alt={product.name}
              />
            </div>
            <div className={`grid ${entity} items-center gap-4`}>
              {product.pictures &&
                product.pictures.map((picture) => (
                  <div>
                    <img
                      className="mx-auto max-h-28 max-w-[150px] rounded-lg"
                      src={picture}
                      alt={product.name}
                    />
                  </div>
                ))}
            </div>
          </div>

          <div className="sm:ml-6 md:w-2/5 lg:w-1/2 xl:ml-24">
            <div>
              <SliderForItem slideItems={slides} />
            </div>
            <h1 className="mb-3 text-lg font-semibold">{product.name}</h1>
            <div className="mb-3 flex">
              <h3>Rating - {product.rating} | </h3>
              <h3
                className={` ${
                  product.quantity >= 1 ? "text-green-500" : "text-red-500"
                }`}
              >
                {product.quantity >= 1 ? " In stock" : " Not available"}
              </h3>
            </div>
            <div className="mb-5 flex">
              <h2>
                <span className="font-bold">${product.price}</span> | Seller:{" "}
                {product?.user?.name ? product.user.name : "Unknown"}
              </h2>
            </div>
            <p className="mb-5 w-[250px] ms:w-[350px] lg:w-[350px] xl:w-[500px]">
              {product.description}
            </p>
            <div className="mb-5 h-px w-[300px] bg-gray-400 lg:w-[400px]"></div>

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
                    Enter your postal code for Delivery Availability
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
                    Free 30 Days Delivery Returns. Details
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <EditProductForm product={product} />
    </div>
  );
}
