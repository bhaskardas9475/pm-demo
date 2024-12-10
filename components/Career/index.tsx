import Link from "next/link";
import React from "react";

export default function Career() {
  const positions = [
    {
      title: "HR Manager ( Minimum 2 years )",
      duration: "Full Time",
      category: "Marketing",
      location: "Bengaluru",
      link: "https://docs.google.com/forms/d/e/1FAIpQLSfnYiw9S4Wg0jrkkS0VBUJWW4RIhb8RIYQh7zvDdytLh6CxEg/viewform",
    },
    {
      title: "Graphic Designer (1 - 3 years)",
      duration: "Full Time",
      category: "Marketing",
      location: "Bengaluru",
      link: "https://docs.google.com/forms/d/e/1FAIpQLSfnYiw9S4Wg0jrkkS0VBUJWW4RIhb8RIYQh7zvDdytLh6CxEg/viewform",
    },
    {
      title: "Sr. Sales Consultant (3 - 6 years)",
      duration: "Full Time",
      category: "Sales",
      location: "Bengaluru",
      link: "https://docs.google.com/forms/d/e/1FAIpQLSfnYiw9S4Wg0jrkkS0VBUJWW4RIhb8RIYQh7zvDdytLh6CxEg/viewform",
    },
    {
      title: "Pre Sales Consultant (2 - 5 years)",
      duration: "Full Time",
      category: "Sales",
      location: "Bengaluru",
      link: "https://docs.google.com/forms/d/e/1FAIpQLSfnYiw9S4Wg0jrkkS0VBUJWW4RIhb8RIYQh7zvDdytLh6CxEg/viewform",
    },
    {
      title: "Sr. Sales Consultant (3 - 6 years)",
      duration: "Full Time",
      category: "Sales",
      location: "Noida",
      link: "https://docs.google.com/forms/d/e/1FAIpQLSfnYiw9S4Wg0jrkkS0VBUJWW4RIhb8RIYQh7zvDdytLh6CxEg/viewform",
    },
    {
      title: "Pre Sales Consultant (2 - 5 years)",
      duration: "Full Time",
      category: "Sales",
      location: "Noida",
      link: "https://docs.google.com/forms/d/e/1FAIpQLSfnYiw9S4Wg0jrkkS0VBUJWW4RIhb8RIYQh7zvDdytLh6CxEg/viewform",
    },
  ];
  return (
    <div>
      <div className="bg-slate-50 px-10 py-10 md:py-16 lg:py-24 xl:px-0">
        <h2 className="font-manrope mb-14 text-center text-3xl font-bold leading-10 text-gray-900 lg:text-4xl">
          Open positions
        </h2>

        <div className="mx-auto max-w-sm rounded-2xl border border-slate-200 bg-white p-6 sm:max-w-md sm:p-12 md:max-w-xl lg:max-w-3xl">
          <div className="text-center mb-5">
            <Link
              href="/roles-and-responsibilities"
              role="button"
              className="rounded-full bg-red-200 px-5 py-1 text-xs font-semibold leading-4 text-red-600 transition-all duration-700 hover:bg-red-100"
            >
              View Roles and Responsibilities
            </Link>
          </div>
          {positions.map((position, index) => (
            <React.Fragment key={position.title}>
              {index ? <hr /> : null}
              <div className="my-3 flex flex-col justify-between gap-x-8 sm:flex-row ">
                <div>
                  <h3 className="text-xl font-medium leading-8 text-gray-900">
                    {position.title}
                  </h3>
                  <div className="mt-2 text-sm">
                    {position.duration} <span>&#8226;</span> {position.category}{" "}
                    <span>&#8226;</span> {position.location}
                  </div>
                </div>
                <div className="mt-5 sm:mt-0">
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
