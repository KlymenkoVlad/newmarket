// import Slider from "./ClientSide/Slider";
import Slider from "../Common/Slider/Slider";
import { Product } from "@/types/types";

interface BannerSectionProps {
  slideItems: Product[];
}

const BannerSection = ({ slideItems }: BannerSectionProps) => {
  return (
    <>
      <div className="mb-16 flex flex-wrap">
        <div className="group relative m-auto h-[500px] w-[300px] px-4 py-4 xs:w-[340px] ms:w-[460px] sm:w-[600px] md:w-[700px] xl:w-[1000px]">
          {/* <Slider slideItems={slideItems} /> */}
          <Slider slideItems={slideItems} />
        </div>
      </div>
    </>
  );
};

export default BannerSection;
