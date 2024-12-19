"use client";
import React, { useState } from "react";
import positions from "./CareerList";

export default function Career() {
  const [viewIndex, setViewIndex] = useState<null | number>(null);
  return (
    <div>
      <div className="bg-slate-50 px-10 pb-10 xl:px-0">
        <br />
        <p className="mx-auto rounded-md border border-sky-500 bg-sky-100 p-5 font-light text-sky-500 sm:max-w-md sm:py-6 md:max-w-xl lg:max-w-3xl">
          <b>Vision :</b> To become the premium real estate partner, recognized
          for consistent excellence, innovative solutions, and an unwavering
          dedication to long-term investment growth. <br /> <br />
          <b>Mission :</b> Deliver professional, transparent, and honest real
          estate services, empowering clients to make informed decisions and
          discover their ideal properties.
        </p>
        <br />
        <h2 className="font-manrope mb-2 text-center text-3xl font-bold leading-10 text-gray-900 lg:text-4xl">
          Open positions
        </h2>
        <div className="mb-10 text-center text-xs text-red-500 ">
          Join Our Dynamic Team – Where Innovation Meets Impact (below open
          positions)
        </div>

        <div className="mx-auto max-w-sm rounded-2xl border border-slate-200 bg-white p-6 sm:max-w-md sm:p-12 md:max-w-xl lg:max-w-3xl">
          {positions.map((position, index) => (
            <React.Fragment key={position.title}>
              {index ? <hr /> : null}
              <div className="my-3 flex flex-col justify-between gap-x-8 sm:flex-row ">
                <div>
                  <h3 className="text-xl font-medium leading-8 text-gray-900">
                    {position.title}
                  </h3>
                  <div className="mt-2 flex text-sm">
                    {position.duration} <span className="mx-2">&#8226;</span>{" "}
                    {position.category} <span className="mx-2">&#8226;</span>{" "}
                    {position.experience}
                  </div>
                  <div>
                    <button
                      className="text-sm text-blue-500"
                      onClick={() => index === viewIndex ? setViewIndex(null) : setViewIndex(index)}
                    >
                      {index === viewIndex ? 'Hide' : 'View'} Job Description
                    </button>
                  </div>
                  {viewIndex === index ? (
                    <div
                    className="text-sm text-black p-10"
                      dangerouslySetInnerHTML={{
                        __html: position.description || "",
                      }}
                    ></div>
                  ) : null}
                </div>
                <div className="mt-5 text-right sm:mt-0">
                  <a
                    href={position.link}
                    role="button"
                    target="_blank"
                    className="rounded-full bg-red-200 px-5 py-2.5 text-xs font-semibold leading-4 text-red-600 transition-all duration-700 hover:bg-red-100"
                  >
                    Apply
                  </a>
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
