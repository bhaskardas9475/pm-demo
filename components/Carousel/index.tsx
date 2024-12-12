"use client";
import React from "react";
import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Link from "next/link";

const ProjectSearch = () => {
  return (
      <div className="text-center mt-10">
        <Link
          href="/projects/bangalore"
          className="mr-2 text-xl rounded-full bg-red-200 px-5 py-2.5 font-semibold leading-4 text-red-600 transition-all duration-700 hover:bg-red-100"
        >
          Search Properties
        </Link>
      </div>
  );
};

export default function Carousel() {
  const heroImages = [
    "/images/hero/1.jpeg",
    "/images/hero/Service-2.png",
    "/images/hero/Service-3.png",
    "/images/hero/Service-4.png",
  ];

  return (
    <section className="overflow-hidden pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-30">
      <Swiper
        className=" relative aspect-[700/230] w-full"
        spaceBetween={0}
        slidesPerView={1}
        navigation
        autoplay={{
          delay: 10 * 1000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
      >
        {heroImages.map((image) => (
          <SwiperSlide key={image} className="w-100">
            <div className="">
              <Image className="shadow-solid-l" src={image} alt="Hero" fill />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <ProjectSearch />
    </section>
  );
}
