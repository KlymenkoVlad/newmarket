import Image from "next/image";
import Link from "next/dist/client/link";

import Benefits from "@/components/MainPageComponents/Benefits";

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
    <div className="mx-12 mt-32 ms:mx-24 lg:mt-40">
      <div className="mb-16 flex">
        <Link href="/" className="text-gray-500">
          Home
        </Link>
        <p className="ml-3">/</p>
        <p className="ml-3">Contact</p>
      </div>
      <div className="my-20 flex flex-col justify-around md:flex-row">
        <div className="mx-4 mb-8">
          <div className="mb-5 flex items-center">
            <div className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-red-500">
              <Image
                src="/icons/call.svg"
                width={20}
                height={20}
                alt="call icon"
              />
            </div>
            <p className="ml-4 text-lg font-medium">Call to us</p>
          </div>
          <p className="mb-5">We are available 24/7, 7 days a week.</p>
          <p>Phone: +8801611112222</p>
        </div>

        <div className="mx-4">
          <div className="mb-5 flex items-center">
            <div className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-red-500">
              <Image
                src="/icons/call.svg"
                width={20}
                height={20}
                alt="call icon"
              />
            </div>
            <p className="ml-4 text-lg font-medium">Write To US</p>
          </div>
          <p className="mb-5">
            Fill out our form and we will contact you within 24 hours.
          </p>
          <p>
            Emails:{"     "}
            <a href="mailto:klymenvlad@gmail.com">klymenvlad@gmail.com</a>
          </p>
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
