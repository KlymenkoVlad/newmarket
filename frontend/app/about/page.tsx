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

interface WorkerProps {
  name: string;
  desc: string;
  img: string;
}

const Worker = ({ name, desc, img }: WorkerProps) => {
  return (
    <div className="mb-4 flex justify-around">
      <div>
        <div className="flex h-[420px] w-[300px] items-end justify-center bg-gray-100 ms:w-[370px]">
          <Image src={img} width={236} height={391} alt="worker" />
        </div>
        <h3 className="text-3xl font-semibold">{name}</h3>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default function Page() {
  return (
    <div className="px-4">
      <div className="mb-16 flex w-full justify-center text-3xl">
        <Link href="/" className="text-gray-500">
          Home
        </Link>
        <p className="ml-3">/</p>
        <p className="ml-3">About</p>
      </div>
      <div className="mb-20 flex flex-wrap items-center justify-around gap-4">
        <div className="w-[700px] text-justify">
          <h1 className="mb-12 text-center text-5xl font-semibold">
            Our Story
          </h1>
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
            className="ml-4 hidden sm:block"
          />
        </div>
      </div>

      <div className="flex justify-center">
        <div className="mb-20 flex flex-col justify-around lg:flex-row">
          {stats &&
            stats.map((statsObj) => (
              <div className="mx-4 mb-4 flex h-[230px] w-[270px] flex-col items-center justify-center border">
                <div className="mb-4 flex h-[80px] w-[80px] items-center justify-around rounded-[100%] bg-gray-500">
                  <div className="flex h-[58px] w-[58px] items-center justify-around rounded-[100%] bg-black">
                    <Image
                      src={statsObj.img}
                      alt="delivery"
                      width={35}
                      height={35}
                    />
                  </div>
                </div>
                <p className="font-bold">{statsObj.header}</p>
                <p>{statsObj.paragraph}</p>
              </div>
            ))}
        </div>
      </div>

      <div className="mb-24 flex flex-col justify-around xl:flex-row">
        <Worker
          name="Tom Cruise"
          desc="Founder & Chairman"
          img="/about/human3.png"
        />
        <Worker
          name="Emma Watson"
          desc="Managing Director"
          img="/about/human2.png"
        />
        <Worker
          name="Will Smith"
          desc="Product Designer"
          img="/about/human1.png"
        />
      </div>

      <Benefits />
    </div>
  );
}
