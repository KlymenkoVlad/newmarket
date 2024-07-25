"use client";

import { baseUrl } from "@/utils/baseUrl";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";

export default function Search() {
  const router = useRouter();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formElement = event.currentTarget as HTMLFormElement;
    const searchInput = formElement.querySelector(
      'input[type="search"]',
    ) as HTMLInputElement | null;
    router.push(`/search/${searchInput?.value}`);
    formElement.reset();
  };

  return (
    <form onSubmit={handleSubmit} className="ml-2 sm:ml-8">
      <label
        htmlFor="default-search"
        className="sr-only mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Search
      </label>
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <svg
            aria-hidden="true"
            className="h-5 w-5 text-gray-500 dark:text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          className="block h-[50px] rounded-lg border border-gray-300 bg-white p-4 pl-10 text-sm text-gray-900 focus:border-red-500 focus:outline-none focus:ring-red-500 sm:w-[380px] md:w-[400px] lg:w-[320px] xl:w-[450px] 2xl:w-[700px] dark:border-gray-300 dark:text-black dark:placeholder-gray-400 dark:focus:border-red-500 dark:focus:ring-red-500"
          placeholder="Search apples, tie..."
          required
        />
        <button
          type="submit"
          className="absolute bottom-1.5 right-2.5 flex rounded-lg bg-red-700 px-4 py-2 text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 sm:hidden md:hidden lg:flex xl:hidden dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
        >
          <svg
            aria-hidden="true"
            className="h-5 w-5 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </button>
        <button
          type="submit"
          className="absolute bottom-1.5 right-2.5 hidden rounded-lg bg-red-700 px-4 py-2 text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 sm:flex md:flex lg:hidden xl:flex dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
        >
          Search
          <svg
            aria-hidden="true"
            className="ml-3 h-5 w-5 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </button>
      </div>
    </form>
  );
}
