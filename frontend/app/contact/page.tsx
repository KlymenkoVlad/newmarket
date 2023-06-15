import Benefits from "@/components/MainPageComponents/Benefits";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Contact",
  description: "",
};

export default function Page() {
  return (
    <>
      <div className="flex justify-around my-20">
        <div>
          <div className="flex items-center mb-5">
            <div className="rounded-full w-[40px] h-[40px] bg-red-500 flex justify-center items-center">
              <Image
                src="/icons/call.svg"
                width={20}
                height={20}
                alt="call icon"
              />
            </div>
            <p className="ml-4 font-medium text-lg">Call to us</p>
          </div>
          <p className="mb-5">We are available 24/7, 7 days a week.</p>
          <p>Phone: +8801611112222</p>
        </div>

        <div>
          <div className="flex items-center mb-5">
            <div className="rounded-full w-[40px] h-[40px] bg-red-500 flex justify-center items-center">
              <Image
                src="/icons/call.svg"
                width={20}
                height={20}
                alt="call icon"
              />
            </div>
            <p className="ml-4 font-medium text-lg">Write To US</p>
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
    </>
  );
}
