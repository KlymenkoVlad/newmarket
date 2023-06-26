import type { Metadata } from "next";
import InfinitieCategoryProduct from "./InfinitieCategoryProduct";
import NavMenu from "@/components/Common/NavMenu";

export const metadata: Metadata = {
  title: "Search",
  description: "",
};

export default function Page({ params }) {
  return (
    <div className="flex mb-16">
      <NavMenu />

      <InfinitieCategoryProduct params={params} />
    </div>
  );
}
