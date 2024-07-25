"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Modal() {
  const searchParams = useSearchParams();

  const search = searchParams.get("success");

  const searchBoolean = search === "true" ? true : false;

  const [showModal, setShowModal] = useState(Boolean(search));

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  useEffect(() => {
    if (showModal) {
      const timer = setTimeout(() => {
        setShowModal(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [showModal]);

  return (
    <div className="flex items-center justify-center">
      {showModal && (
        <div
          id="defaultModal"
          tabIndex={-1}
          aria-hidden="true"
          className="fixed bottom-0 left-0 right-0 top-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-75"
        >
          <div className="relative max-h-full w-full max-w-2xl">
            <div className="relative rounded-lg bg-white shadow dark:bg-gray-700">
              <div className="flex items-start justify-between rounded-t border-b p-4 dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {searchBoolean
                    ? "Your purchase was successfully completed"
                    : "Your purchase was cancelled"}
                </h3>
                <button
                  type="button"
                  onClick={toggleModal}
                  className="ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
                  data-modal-hide="defaultModal"
                >
                  <svg
                    aria-hidden="true"
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              <div className="space-y-6 p-6">
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  {searchBoolean
                    ? "Thank you for using our store. You can continue your shopping"
                    : "Something went wrong and your purchase was canceled"}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
