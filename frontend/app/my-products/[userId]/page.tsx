// import type { Metadata } from 'next'

import { Product } from "@/types/types";
import { baseUrl } from "@/utils/baseUrl";
import InfinitiveScroll from "@/components/Common/Scroll/InfinitiveScroll";

// export const metadata: Metadata = {
//   title: '',
//   description: ''
// }

interface Props {
  params: { userId: string };
}

export default function Page({ params }: Props) {
  return (
    <div className="px-6">
      <p className="mb-4 text-center text-xl font-bold leading-none tracking-tight text-gray-900 md:text-left md:text-2xl lg:text-3xl">
        That`s all Products that you sold
      </p>
      <InfinitiveScroll params={params} type="myproducts" />
    </div>
  );
}
