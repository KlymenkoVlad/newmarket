// import Slider from "./ClientSide/Slider";
import Slider from "../Common/Slider/Slider";
import NavMenu from "../Common/NavMenu";
import { Product } from "@/types/types";

interface BannerSectionProps {
  slideItems: Product[];
}

const BannerSection = ({ slideItems }: BannerSectionProps) => {
  return (
    <>
      <div className="flex mt-12 mb-16">
        <NavMenu />

        <div className="m-auto h-[500px] xl:w-[1000px] md:w-[700px] sm:w-[600px] ms:w-[460px] xs:w-[340px] w-[300px] py-4 px-4 relative group">
          {/* <Slider slideItems={slideItems} /> */}
          <Slider slideItems={slideItems} />
        </div>
      </div>
    </>
  );
};

export default BannerSection;
