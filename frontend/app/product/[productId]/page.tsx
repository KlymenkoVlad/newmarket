import baseUrl from "@/utils/baseUrl";
import Image from "next/image";

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

interface User {
  user: {
    createdAt: string;
    email: string;
    name: string;
    profilePicUrl: string;
    role: string;
    updatedAt: string;
    __v: number;
    _id: string;
  };
}

interface Data {
  _id: string;
  user: User;
  name: string;
  price: number;
  mainPicture: string;
  pictures?: string[];
  description: string;
  quantity: number;
  pastPrice?: number;
  category: never[] | string[];
  rating: number;
  date: string;
  __v: number;
}

interface Props {
  params: { productId: string };
}

export default async function BlogPostPage({ params }: Props) {
  const product: Data = await getData(params.productId.split("-")[0]);
  console.log(product);

  return (
    <div>
      <p>
        Account / {product.category} / {product.name}
      </p>

      <div className="flex">
        <div className="grid grid-rows-4 grid-flow-col gap-4">
          <div className="col-span-2 bg-gray-200">03</div>
          <div className="col-span-2 bg-gray-200">03</div>
          <div className="col-span-2 bg-gray-200">03</div>
          <div className="row-span-4 bg-gray-200">
            <Image
              src={product.mainPicture}
              alt="Banana"
              width={170}
              height={138}
            />
          </div>
        </div>

        <div></div>
      </div>
    </div>
  );
}
