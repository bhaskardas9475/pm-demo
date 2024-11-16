"use client";
import React from "react";
import SingleBrand from "./SingleBrand";
import brandData from "./brandData";
import SectionHeader from "../Common/SectionHeader";

const Brands = () => {
  return (
    <>
      {/* <!-- ===== Clients Start ===== --> */}
      <div className="animate_top mx-auto text-center" id="partners"> 
        <SectionHeader
          headerInfo={{
            title: `PARTNERS`,
            subtitle: `Our Partners`,
            description: `We collaborate with leading real estate experts to create innovative, sustainable spaces that deliver lasting value and growth.`,
          }}
        />
      </div>
      <section className="border border-x-0 border-y-stroke bg-alabaster py-11 dark:border-y-strokedark dark:bg-black mt-10">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="grid grid-cols-3 items-center justify-center gap-7.5 md:grid-cols-5 lg:gap-12.5 xl:gap-29">
            {Array.from(Array(5).keys()).map((brand) => (
              <SingleBrand brand={brand + 1} key={brand + 1} />
            ))}
          </div>
        </div>
      </section>
      {/* <!-- ===== Clients End ===== --> */}
    </>
  );
};

export default Brands;
