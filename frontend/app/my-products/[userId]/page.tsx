// import type { Metadata } from 'next'

import { Product } from "@/types/types";
import baseUrl from "@/utils/baseUrl";
import InfinitieMyProducts from "./Components/InfiniteMyProducts";

// export const metadata: Metadata = {
//   title: '',
//   description: ''
// }

interface Props {
  params: { userId: string };
}

export default function Page({ params }: Props) {
  return (
    <div className="sm:mx-24 mx-6 lg:mt-40 mt-32 mb-16">
      <p className="md:text-left text-center mb-4 text-xl font-bold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-3xl ">
        That`s all Products that you sold
      </p>
      <InfinitieMyProducts params={params} />
    </div>
  );
}
