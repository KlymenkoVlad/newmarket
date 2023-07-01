import type { Metadata } from "next";
import NavMenu from "@/components/Common/NavMenu";
import InfinitieSearchProduct from "./InfinitieSearchProduct";

export const metadata: Metadata = {
  title: "Search",
  description: "",
};

export default function Page({ params }) {
  return (
    <div className="flex mb-16 ms:mt-36 mt-24">
      <NavMenu />

      <InfinitieSearchProduct params={params} />
    </div>
  );
}
