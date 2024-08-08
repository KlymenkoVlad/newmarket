import { MdOutlineImage } from "react-icons/md";

export default function ItemLoading() {
  return (
    <div className="flex justify-center">
      <div
        role="status"
        className="w-[260px] animate-pulse rounded border border-gray-200 p-4 shadow md:p-6"
      >
        <div className="mb-4 flex h-48 items-center justify-center rounded bg-gray-300">
          <MdOutlineImage className="text-5xl text-gray-400" />
        </div>
        <div className="mb-4 h-2.5 w-48 rounded-full bg-gray-200"></div>
        <div className="mb-2.5 h-2 rounded-full bg-gray-200"></div>
        <div className="mb-2.5 h-2 rounded-full bg-gray-200"></div>
        <div className="h-2 rounded-full bg-gray-200"></div>

        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}
