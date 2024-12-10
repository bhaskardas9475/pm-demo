"use client";
import Image from "next/image";
import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

export default function ServiceCarousel({ images }: { images: string[] }) {
  return (
    <Swiper
      className=" relative aspect-[700/270] w-full"
      spaceBetween={0}
      slidesPerView={1}
      navigation
      autoplay={{
        delay: (10 * 1000),
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay, Pagination, Navigation]}
    >
      {images.map((image) => (
        <SwiperSlide key={image} className="w-100">
          <div
            style={{ backgroundImage: `url('${image}')` }}
            className="m-auto h-[300px] border bg-contain bg-center bg-no-repeat"
          ></div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
