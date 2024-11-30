"use client";
import React from "react";
import SingleBrand from "./SingleBrand";
import brandData from "./brandData";
import SectionHeader from "../Common/SectionHeader";
import { Autoplay, Navigation, Pagination } from "swiper";


import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

const Brands = () => {
  const imageList = [
    'Adarsh-Developers-Logo.png',
    'Apex Group.png',
    'Ashoka.png',
    'Brigade-logo.png',
    'Godrej Properties.png',
    'Kalyani Developers.png',
    'Lodha Group.png',
    'Nambiar.png',
    'Prestige Group.png',
    'Quebec.jpeg',
    'Realty.png',
    'Sun flower.webp',
    'Tata Carnatica.jpeg',
    'The Pearl by Auro.png'
  ];
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
        <Swiper
          className=" relative w-full h-[100px]"
          spaceBetween={100}
          slidesPerView={6}
          autoplay={{
            delay: 2000,
          }}
          modules={[Autoplay, Pagination, Navigation]}
        >
          {imageList.map((brand) => (
            <SwiperSlide key={brand} >
              <Image
                src={`/images/developers/${brand}`}
                alt={brand}
                fill
                key={brand}
              />
            </SwiperSlide>
          ))}

        </Swiper>
        {/* <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="grid grid-cols-3 items-center justify-center gap-7.5 md:grid-cols-5 lg:gap-12.5 xl:gap-29">
            {Array.from(Array(5).keys()).map((brand) => (
              <SingleBrand brand={brand + 1} key={brand + 1} />
            ))}
          </div>
        </div> */}
      </section>
      {/* <!-- ===== Clients End ===== --> */}
    </>
  );
};

export default Brands;
