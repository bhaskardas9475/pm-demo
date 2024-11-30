import { ProjectType } from "@/types/project";
import Link from "next/link";
import React from "react";

export default function Modal({
  item,
  setSelectedItem,
}: {
  item: ProjectType;
  setSelectedItem: (item: null) => void;
}) {
  return (
    <div className="fixed inset-0 z-10 overflow-y-auto">
      <div className="flex min-h-screen items-center justify-center px-4 pb-20 pt-4 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity">
          <div className="absolute inset-0 bg-gray-500 opacity-75" />
        </div>
        <span className="hidden sm:inline-block sm:h-screen sm:align-middle" />
        <div className="inline-block transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left align-bottom shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6 sm:align-middle">
          <div className="sm:flex sm:items-start">
            <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
              <svg
                className="h-6 w-6 text-green-600"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                {item.project}
              </h3>
              <div className="mt-2">
                <p
                  className="text-sm leading-5 text-gray-500"
                  dangerouslySetInnerHTML={{ __html: item.sizes || "N/A" }}
                ></p>
              </div>
            </div>
          </div>
          <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
            <span className="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
              <Link
              href={`/contact`}
                type="button"
                className="focus:shadow-outline-green inline-flex w-full justify-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-base font-medium leading-6 text-white shadow-sm transition duration-150 ease-in-out hover:bg-green-500 focus:outline-none sm:text-sm sm:leading-5"
              >
                Contact
              </Link>
            </span>
            <span className="mt-3 flex w-full rounded-md shadow-sm sm:mt-0 sm:w-auto">
              <button
              onClick={() => setSelectedItem(null)}
                type="button"
                className="focus:shadow-outline-blue inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium leading-6 text-gray-700 shadow-sm transition duration-150 ease-in-out hover:text-gray-500 focus:border-blue-300 focus:outline-none sm:text-sm sm:leading-5"
              >
                Close
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
