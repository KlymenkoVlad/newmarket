import type { Metadata } from "next";
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
    <div>
      <InfinitiveScroll params={params} type="search" />
    </div>
  );
}
