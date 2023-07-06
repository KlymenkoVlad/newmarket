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
    <>
      <div className="grid items-center w-full ms:h-8 h-12 bg-red-600 text-white text-center lg:mt-12 ms:mt-4 mt-16">
        <p>If something not load just wait, backend is launching...</p>
      </div>
      <div className="flex  mb-16">
        <NavMenu />

        <div className="m-auto h-[500px] w-[892px] py-4 px-4 relative group">
          <Slider slideItems={slideItems} />
        </div>
      </div>
    </>
  );
};

export default BannerSection;
