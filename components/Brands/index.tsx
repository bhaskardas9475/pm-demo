"use client";
import { Autoplay, Navigation, Pagination } from "swiper";
import SectionHeader from "../Common/SectionHeader";

import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

const Brands = () => {

  const imageList = [
    "Prestige Group.png",
    "Godrej Properties.png",
    "tata.jpeg",
    "Lodha Group.png",
    "Sobha_Ltd_Logo.jpg",
    "bridage.jpeg",
  ];
  return (
    <>
      {/* <!-- ===== Clients Start ===== --> */}
      <div
        className="animate_top mx-auto pt-20 text-center lg:pt-25 xl:pt-30"
        id="partners"
      >
        <SectionHeader
          headerInfo={{
            title: `PARTNERS`,
            subtitle: `Top Developers Under One Roof`,
            description: `Bringing You the Best, From the Best.`,
          }}
        />
      </div>
      <section className="mt-10 border border-x-0 border-y-stroke bg-alabaster py-11 dark:border-y-strokedark dark:bg-black">
        <Swiper
          className=" relative h-[100px] w-full"
          spaceBetween={100}
          slidesPerView={6}
          autoplay={{
            delay: 2000,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          breakpoints={{
            320: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            480: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
            640: {
              slidesPerView: 6,
              spaceBetween: 30,
            },
          }}
        >
          {imageList.map((brand) => (
            <SwiperSlide key={brand}>
              <div
                style={{backgroundImage: `url('/images/developers/${brand}')`}}
                className="h-[100px] w-[100px] border bg-contain bg-no-repeat bg-center m-auto"
              ></div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      {/* <!-- ===== Clients End ===== --> */}
    </>
  );
};

export default Brands;
