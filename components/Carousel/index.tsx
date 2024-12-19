"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

const ProjectSearch = () => {
  const router = useRouter()

  const [location, setLocation] = useState('');
  
  const redirectMe = () => {
    if (!location) {
      alert('Please select the location.');
      return;
    }
    router.push(`/projects/${location}`);
  }
  return (
    <div className="mt-5 sm:mt-[-28px] z-10 relative">
      <div className="flex w-full max-w-2xl rounded-full border p-2 shadow-md m-auto border-primary bg-white">
        {/* Speciality Dropdown */}
        <div className="relative flex-1 border-r border-gray-300">
          <select onChange={(e) => setLocation(e.target.value)} value={location} className="w-full cursor-pointer appearance-none bg-transparent px-4 py-2 font-semibold text-primary outline-none">
            <option value="" disabled selected>
              Select Location
            </option>
            <option value="bangalore">Bangalore</option>
            <option value="hyderabad">Hyderabad</option>
            <option value="noida">Noida</option>
          </select>
          {/* Dropdown Icon */}
          <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 transform">
            ▼
          </div>
        </div>
        {/* Search Button */}
        <button onClick={() => redirectMe()} className="ml-4 flex items-center rounded-full bg-gradient-to-r from-orange-700 to-orange-400 px-6 py-2 font-semibold text-white">
          Search
        </button>
      </div>
    </div>
  );
};

export default function Carousel() {
  const heroImages = [
    "/images/hero/1.jpeg",
    "/images/hero/Service-4.png",
    "/images/hero/Service-3.png",
    "/images/hero/Service-2.png",
  ];

  return (
    <section className="overflow-hidden pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-30">
      <Swiper
        className=" relative aspect-[700/230] w-full"
        spaceBetween={0}
        slidesPerView={1}
        navigation
        autoplay={{
          delay: 6 * 1000,
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
