import Benefits from "@/components/MainPageComponents/Benefits";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us",
  description: "",
};

interface IStats {
  img: string;
  header: string;
  paragraph: string;
}

const stats: IStats[] = [
  {
    img: "/icons/shop.svg",
    header: "10.5k ",
    paragraph: "Sallers active our site",
  },
  {
    img: "/icons/bag.png",
    header: "45.5k",
    paragraph: "Customer active in our site",
  },
  {
    img: "/icons/moneyBack.png",
    header: "25k",
    paragraph: "Anual gross sale in our site",
  },
];

export default function Page() {
  return (
    <div className="mx-24 ">
      <div className="flex mb-16">
        <Link href="/" className="text-gray-500">
          Home
        </Link>
        <p className="ml-3 ">/</p>
        <p className="ml-3">About</p>
      </div>
      <div className="flex items-center justify-around mb-20">
        <div className="w-[600px]">
          <h1 className="mb-12 text-5xl font-semibold">Our Story</h1>
          <p className="mb-6 text-base">
            Launced in 2015, New Market is South Asia’s premier online shopping
            makterplace with an active presense in Bangladesh. Supported by wide
            range of tailored marketing, data and service solutions, New Market
            has 10,500 sallers and 300 brands and serves 3 millioons customers
            across the region.
          </p>
          <p className="mb-6 text-base">
            New Market has more than 1 Million products to offer, growing at a
            very fast. New Market offers a diverse assotment in categories
            ranging from consumer.
          </p>
        </div>

        <div>
          <Image
            src="/about/About.jpg"
            width={705}
            height={609}
            alt="Our customers"
          />
        </div>
      </div>
      <div className="flex justify-around mb-20">
        {stats &&
          stats.map((statsObj) => (
            <div className="w-[270px] h-[230px] border flex justify-center flex-col items-center">
              <div className="w-[80px] h-[80px] bg-gray-500 rounded-[100%] flex justify-around items-center mb-4">
                <div className="w-[58px] h-[58px] bg-black rounded-[100%] flex justify-around items-center">
                  <Image
                    src={statsObj.img}
                    alt="delivery"
                    width={35}
                    height={35}
                  />
                </div>
              </div>
              <p className=" font-bold">{statsObj.header}</p>
              <p>{statsObj.paragraph}</p>
            </div>
          ))}
      </div>

      <div className="flex justify-around mb-24">
        <div className="flex justify-around">
          <div>
            <div className="w-[370px] h-[420px] bg-gray-100 flex justify-center items-end">
              <Image
                src="/about/human1.png"
                width={236}
                height={391}
                alt="worker"
              />
            </div>
            <h3 className="text-3xl font-semibold">Emma Watson</h3>
            <p>Managing Director</p>
          </div>
        </div>
        <div className="flex justify-around">
          <div>
            <div className="w-[370px] h-[420px] bg-gray-100 flex justify-center items-end">
              <Image
                src="/about/human2.png"
                width={236}
                height={391}
                alt="worker"
              />
            </div>
            <h3 className="text-3xl font-semibold">Will Smith</h3>
            <p>Product Designer</p>
          </div>
        </div>
        <div className="flex justify-around">
          <div>
            <div className="w-[370px] h-[420px] bg-gray-100 flex justify-center items-end">
              <Image
                src="/about/human3.png"
                width={236}
                height={391}
                alt="worker"
              />
            </div>
            <h3 className="text-3xl font-semibold">Tom Cruise</h3>
            <p>Founder & Chairman</p>
          </div>
        </div>
      </div>

      <Benefits />
    </div>
  );
}
