import React from "react";
import Image from "next/image";

const PageHeader = ({
  title,
  image,
  opacity = 40,
}: {
  title: string;
  image?: string;
  opacity?: number;
}) => {
  const imageSource = image ? image : "/images/features/head-2.jpg";
  return (
    <div className="relative flex h-[200px] w-[100%] content-center">
      <Image src={imageSource} fill alt="Hi" />
      <div
        className={`absolute h-full h-full w-full bg-black/50 opacity-${opacity} w-full`}
      ></div>
      <h1 className="relative z-50 m-auto text-2xl text-3xl capitalize text-white">
        {title}
      </h1>
    </div>
  );
};

export default PageHeader;
