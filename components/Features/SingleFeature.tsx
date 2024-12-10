import { Service } from "@/types/service";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const SingleFeature = ({ feature }: { feature: Service }) => {
  const { image, title, description, slug } = feature;

  return (
    <>
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: -10,
          },

          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="animate_top z-40 rounded-lg border border-white bg-white p-7.5 shadow-solid-3 transition-all hover:shadow-solid-4 dark:border-strokedark dark:bg-blacksection dark:hover:bg-hoverdark xl:p-12.5"
      >
        <div
          style={{ backgroundImage: `url('${image[0]}')` }}
          className="m-auto h-[190px] border bg-cover bg-center bg-no-repeat"
        ></div>
        <h3 className="mb-5 mt-7.5 text-xl font-semibold text-black dark:text-white xl:text-itemtitle">
          <Link href={`/service/${slug}`}>{title}</Link>
        </h3>
        <p>{description}</p>
      </motion.div>
    </>
  );
};

export default SingleFeature;
