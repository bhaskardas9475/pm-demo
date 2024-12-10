"use client";
import { Autoplay, Navigation, Pagination } from "swiper";
import SectionHeader from "../Common/SectionHeader";

import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

const Brands = () => {
  // const imageList = [
  //   'Adarsh-Developers-Logo.png',
  //   'Apex Group.png',
  //   'Ashoka.png',
  //   'Brigade-logo.png',
  //   'Godrej Properties.png',
  //   'Kalyani Developers.png',
  //   'Lodha Group.png',
  //   'Nambiar.png',
  //   'Prestige Group.png',
  //   'Quebec.jpeg',
  //   'Realty.png',
  //   'Sun flower.webp',
  //   'Tata Carnatica.jpeg',
  //   'The Pearl by Auro.png'
  // ];
  const imageList = [
    "Prestige Group.png",
    "Godrej Properties.png",
    "Tata Carnatica.jpeg",
    "Lodha Group.png",
    "Sobha_Ltd_Logo.jpg",
    "Brigade-logo.png",
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
            subtitle: `Top developers under one roof`,
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
              {/* <Image
                src={`/images/developers/${brand}`}
                alt={brand}
                fill
                key={brand}
              /> */}
              <div
                style={{backgroundImage: `url('/images/developers/${brand}')`}}
                className="h-[100px] w-[100px] border bg-contain bg-no-repeat bg-center m-auto"
              ></div>
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
