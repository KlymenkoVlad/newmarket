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
    <div className="md:flex block md:mx-0 sm:mx-32 ms:mx-16 mx-4 mb-16 ms:mt-36 mt-24">
      <NavMenu />

      <div>
        <InfinitiveScroll params={params} type="search" />
      </div>
    </div>
  );
}
