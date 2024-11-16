"use client";
import Image from "next/image";
import { useState } from "react";

import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

const Hero = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const heroImages = [
    '/images/hero/hero-1.webp',
    '/images/hero/hero-2.webp',
    '/images/hero/hero-3.webp',
  ]

  return (
    <>
      <section className="overflow-hidden pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-46">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex lg:items-center lg:gap-8 xl:gap-32.5">
            <div className=" md:w-1/2">

              <h1 className="mb-5 pr-16 text-3xl font-bold text-black dark:text-white xl:text-hero ">

                Property Matrimony
              </h1>
              <h4 className="mb-4.5 text-lg font-medium text-black dark:text-white">
                Premier real estate platform
              </h4>
              <p>
                We specialize in offering a wide range of premium plots, villas, and apartments, tailored to meet the diverse needs of our discerning clients.
              </p> <br />
              <p>
                Our mission is to make the property buying process the safest, most transparent, and memorable experience for every customer.
              </p>

              <div className="mt-10 hidden">
                <form onSubmit={handleSubmit}>
                  <div className="flex flex-wrap gap-5">
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="text"
                      placeholder="Enter your email address"
                      className="rounded-full border border-stroke px-6 py-2.5 shadow-solid-2 focus:border-primary focus:outline-none dark:border-strokedark dark:bg-black dark:shadow-none dark:focus:border-primary"
                    />
                    <button
                      aria-label="get started button"
                      className="flex rounded-full bg-black px-7.5 py-2.5 text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho"
                    >
                      Get Started
                    </button>
                  </div>
                </form>

                <p className="mt-5 text-black dark:text-white">
                  Try for free no credit card required.
                </p>
              </div>
            </div>

            <div className="animate_right hidden md:w-1/2 lg:block">
              <div className="relative 2xl:-mr-7.5">
                <Image
                  src="/images/shape/shape-01.png"
                  alt="shape"
                  width={46}
                  height={246}
                  className="absolute -left-11.5 top-0"
                />
                <Image
                  src="/images/shape/shape-02.svg"
                  alt="shape"
                  width={36.9}
                  height={36.7}
                  className="absolute bottom-0 right-0 z-10"
                />
                <Image
                  src="/images/shape/shape-03.svg"
                  alt="shape"
                  width={21.64}
                  height={21.66}
                  className="absolute -right-6.5 bottom-0 z-1"
                />
                <Swiper
                  className=" relative aspect-[700/350] w-full shadow-md rounded-[10px]"
                  spaceBetween={0}
                  slidesPerView={1}
                  navigation
                  autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                  }}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Autoplay, Pagination, Navigation]}
                >
                  {heroImages.map(image => (
                    <SwiperSlide className="w-100" >
                      <Image
                        className="shadow-solid-l"
                        src={image}
                        alt="Hero"
                        fill
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
