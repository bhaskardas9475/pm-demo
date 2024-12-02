"use client";
import React from "react";
import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Link from "next/link";

export default function Carousel() {
  const heroImages = [
    // "/images/hero/banner-1.jpeg",
    "/images/hero/banner-2.jpeg",
  ];

  return (
    <section className="overflow-hidden pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-30">
      <Swiper
        className=" relative aspect-[700/270] w-full"
        spaceBetween={0}
        slidesPerView={1}
        navigation
        autoplay={{
          delay: 4000,
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
              <div className="absolute bottom-8 left-[45%]">
                <div>
                  <Link
                    href="#new-lauch"
                    className="mr-2 rounded-full bg-red-200 px-5 py-2.5 text-xs font-semibold leading-4 text-red-600 transition-all duration-700 hover:bg-red-100"
                  >
                    Search Properties
                  </Link>
                  <Link
                    href="/contact"
                    className="rounded-full bg-red-200 px-5 py-2.5 text-xs font-semibold leading-4 text-red-600 transition-all duration-700 hover:bg-red-100"
                  >
                    Get a Free Consultation
                  </Link>
                </div>
                <div className="text-sm text-black bg-yellow-300 mt-5">RERA No : PRM/KA/RERA/1251/446/AG/230412/003574 </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
