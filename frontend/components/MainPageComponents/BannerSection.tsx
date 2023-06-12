import Image from "next/image";
import Link from "next/link";
import Slider from "./ClientSide/Slider";

const BannerSection = () => {
  const slides = [
    {
      url: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80",
    },

    {
      url: "https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2253&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80",
    },
  ];

  return (
    <div className="flex mb-16">
      <div className="flex ml-24">
        <ul className="mr-20">
          <li className="mt-6 mb-8">
            <Link href="woman">Woman’s Fashion</Link>
          </li>
          <li className="mb-8">
            <Link href="men">Men’s Fashion</Link>
          </li>
          <li className="mb-8">
            <Link href="electronic">Electronics</Link>
          </li>
          <li className="mb-8">
            <Link href="home">Home & Lifestyle</Link>
          </li>
          <li className="mb-8">
            <Link href="medicine">Medicine</Link>
          </li>
          <li className="mb-8">
            <Link href="sports">Sports & Outdoor</Link>
          </li>
          <li className="mb-8">
            <Link href="baby">Baby’s & Toys</Link>
          </li>
          <li className="mb-8">
            <Link href="pet">Groceries & Pets</Link>
          </li>
          <li className="mb-8">
            <Link href="beauty">Health & Beauty</Link>
          </li>
        </ul>
        <div className=" h-[500px] w-px bg-gray-400"></div>
      </div>

      <div className="m-auto h-[500px] w-[892px] py-4 px-4 relative group">
        <Slider slides={slides} />
      </div>
    </div>
  );
};

export default BannerSection;
