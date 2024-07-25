import Link from "next/link";

export default function LoadingUsers() {
  return (
    <div className="mx-6 mb-16 mt-32 sm:mx-24 lg:mt-40">
      <div className="mb-16 flex">
        <Link href="/" className="text-gray-500">
          Home
        </Link>
        <p className="ml-3">/</p>
        <p className="ml-3">My Account</p>
      </div>
      <div
        role="status"
        className="mx-auto max-w-md animate-pulse space-y-4 divide-y divide-gray-200 rounded border border-gray-200 p-4 shadow md:p-6"
      >
        <div className="flex items-center justify-between">
          <div>
            <div className="mb-2.5 h-2.5 w-24 rounded-full bg-gray-300"></div>
            <div className="h-2 w-32 rounded-full bg-gray-200"></div>
          </div>
          <div className="h-2.5 w-12 rounded-full bg-gray-300"></div>
        </div>
        <div className="flex items-center justify-between pt-4">
          <div>
            <div className="mb-2.5 h-2.5 w-24 rounded-full bg-gray-300"></div>
            <div className="h-2 w-32 rounded-full bg-gray-200"></div>
          </div>
          <div className="h-2.5 w-12 rounded-full bg-gray-300"></div>
        </div>
        <div className="flex items-center justify-between pt-4">
          <div>
            <div className="mb-2.5 h-2.5 w-24 rounded-full bg-gray-300"></div>
            <div className="h-2 w-32 rounded-full bg-gray-200"></div>
          </div>
          <div className="h-2.5 w-12 rounded-full bg-gray-300"></div>
        </div>
        <div className="flex items-center justify-between pt-4">
          <div>
            <div className="mb-2.5 h-2.5 w-24 rounded-full bg-gray-300"></div>
            <div className="h-2 w-32 rounded-full bg-gray-200"></div>
          </div>
          <div className="h-2.5 w-12 rounded-full bg-gray-300"></div>
        </div>
        <div className="flex items-center justify-between pt-4">
          <div>
            <div className="mb-2.5 h-2.5 w-24 rounded-full bg-gray-300"></div>
            <div className="h-2 w-32 rounded-full bg-gray-200"></div>
          </div>
          <div className="h-2.5 w-12 rounded-full bg-gray-300"></div>
        </div>
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}
