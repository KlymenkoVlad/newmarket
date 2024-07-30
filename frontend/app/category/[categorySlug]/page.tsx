import type { Metadata } from "next";
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
    <div className="mb-16 flex">
      <div className="group m-auto px-4 py-4">
        <div className="mb-6 flex items-center">
          <div className="h-[40px] w-[20px] rounded-[10%] bg-red-500"></div>
          <p className="ml-5 font-medium text-red-500">Hot New Releases</p>
        </div>
        <h1 className="mb-6 text-3xl font-medium text-black">
          Find in category {categorySlugUpperCase} what you need
        </h1>
        <InfinitiveScroll params={params} type="categories" />
      </div>
    </div>
  );
}
