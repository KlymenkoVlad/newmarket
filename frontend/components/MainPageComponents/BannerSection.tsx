import Slider from "./ClientSide/Slider";
import NavMenu from "../Common/NavMenu";
import { Product } from "@/types/types";

interface BannerSectionProps {
  slideItems: Product[];
}

const BannerSection = ({ slideItems }: BannerSectionProps) => {
  slideItems.map((item) => {
    console.log(item);
  });

  return (
    <div className="flex my-16">
      <NavMenu />

      <div className="m-auto h-[500px] w-[892px] py-4 px-4 relative group">
        <Slider slideItems={slideItems} />
      </div>
    </div>
  );
};

export default BannerSection;
