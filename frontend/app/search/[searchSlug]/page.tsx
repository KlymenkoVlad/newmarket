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
    <div className="flex mb-16 ms:mt-36 mt-24">
      <NavMenu />

      <InfinitiveScroll params={params} type="search" />
    </div>
  );
}
