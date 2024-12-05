import React from "react";

export default function Career() {
  const positions = [
    {
      title: "Associate/Paid Media Specialist - Minimum 1 year",
      duration: "Full Time",
      category: "Marketing",
      location: "Bengaluru",
      link: "https://docs.google.com/forms/d/e/1FAIpQLSfnYiw9S4Wg0jrkkS0VBUJWW4RIhb8RIYQh7zvDdytLh6CxEg/viewform",
    },
  ];
  return (
    <div>
      <div className="bg-slate-50 px-10 py-10 md:py-16 lg:py-24 xl:px-0">
        <h2 className="font-manrope mb-14 text-center text-3xl font-bold leading-10 text-gray-900 lg:text-4xl">
          Open positions
        </h2>
        <div className="mx-auto max-w-sm rounded-2xl border border-slate-200 bg-white p-6 sm:p-12 sm:max-w-md md:max-w-xl lg:max-w-3xl">
          {positions.map((position) => (
            <div className="flex justify-between gap-x-8 flex-col sm:flex-row">
              <div>
                <h3 className="text-xl font-medium leading-8 text-gray-900">
                  {position.title}
                </h3>
                <div className="text-sm mt-2">
                  {position.duration} <span>&#8226;</span> {position.category}{" "}
                  <span>&#8226;</span> {position.location}
                </div>
              </div>
              <div className="mt-5 sm:mt-0">
                <a
                  href={position.link}
                  role="button"
                  target="_blank"
                  className="px-5 py-2.5 rounded-full bg-red-200 text-xs font-semibold leading-4 text-red-600 transition-all duration-700 hover:bg-red-100"
                >
                  Apply
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
