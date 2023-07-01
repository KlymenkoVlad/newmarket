import Image from "next/image";

export default function LoadingUsers() {
  return (
    <div className="flex justify-center my-64">
      <div>
        <h1 className=" text-4xl font-bold">Loading...</h1>
        <Image src="/loading.svg" width={100} height={100} alt="Loading..." />
      </div>
    </div>
  );
}
