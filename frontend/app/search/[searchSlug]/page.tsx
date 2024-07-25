import type { Metadata } from "next";
import NavMenu from "@/components/Common/NavMenu";
import InfinitiveScroll from "@/components/Common/Scroll/InfinitiveScroll";

export const metadata: Metadata = {
  title: "Search",
  description: "",
};

interface PageProps {
  params: { searchSlug: string };
}

export default function Page({ params }: PageProps) {
  return (
    <div className="mx-4 mb-16 mt-24 block ms:mx-16 ms:mt-36 sm:mx-32 md:mx-0 md:flex">
      <NavMenu />

      <div>
        <InfinitiveScroll params={params} type="search" />
      </div>
    </div>
  );
}
