"use client";
import React from "react";

export default function ProjectsSearch({
  keyword,
  setKeyword,
}: {
  keyword: string;
  setKeyword: (k: string) => void;
}) {
  return (
    <div className="mb-5 max-w-md">
      <label
        htmlFor="default-search"
        className="sr-only mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Search
      </label>
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
          <svg
            className="h-4 w-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          type="search"
          id="default-search"
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-4 ps-10 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-orange-500"
          placeholder="Search by Project name"
          required
        />
      </div>
    </div>
  );
}
