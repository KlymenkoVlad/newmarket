import type { Metadata } from "next";

import { baseUrl } from "@/utils/baseUrl";
import NavMenu from "@/components/Common/NavMenu";
import InfinitiveScroll from "@/components/Common/Scroll/InfinitiveScroll";

export const metadata: Metadata = {
  title: "Category",
  description: "",
};

interface Props {
  params: { categorySlug: string };
}

export default async function Page({ params }: Props) {
  const categorySlugUpperCase =
    params.categorySlug.charAt(0).toUpperCase() + params.categorySlug.slice(1);

  return (
    <div className="mb-16 mt-24 flex ms:mt-32">
      <NavMenu />

      <div className="group m-auto px-4 py-4">
        <div className="mb-6 flex items-center">
          <h1 className="ml-5 text-3xl font-medium text-black">
            Find what you need
          </h1>
        </div>
        <div className="mb-6">
          <div className="mb-6 flex items-center">
            <div className="h-[40px] w-[20px] rounded-[10%] bg-red-500"></div>
            <p className="ml-5 font-medium text-red-500">Hot New Releases</p>
          </div>
          <div className="flex">
            <h3 className="text-2xl font-semibold">{categorySlugUpperCase}</h3>
          </div>
        </div>
        <InfinitiveScroll params={params} type="categories" />
      </div>
    </div>
  );
}
