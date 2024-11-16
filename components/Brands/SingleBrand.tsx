import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { Brand } from "@/types/brand";
import { motion } from "framer-motion";

const SingleBrand = ({ brand }) => {

  return (
    <>
      <motion.a
        variants={{
          hidden: {
            opacity: 0,
            y: -20,
          },

          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1, delay: brand }}
        viewport={{ once: true }}
        className="animate_top mx-w-full relative block h-20 w-[98px]"
      >
        <Image
          className="transition-all duration-300 hover:opacity-80 dark:hidden"
          src={`/images/partners/${brand}.jpeg`}
          alt={''}
          fill
        />
      </motion.a>
    </>
  );
};

export default SingleBrand;
