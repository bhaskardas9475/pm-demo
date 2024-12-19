"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const AboutUs = () => {
  return (
    <>
      {/* <!-- ===== About Two Start ===== --> */}
      <section>
        <div className="mx-auto mt-10 max-w-c-1235 overflow-hidden px-4 md:px-8 2xl:px-0">
          <div className="flex items-center gap-8 lg:gap-32.5">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: -20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_left md:w-1/2"
            >
              <h2 className="relative mb-6 text-3xl font-bold text-black dark:text-white xl:text-hero">
                <span className="relative inline-block">
                  Property Matrimony
                </span>
              </h2>
              <p className="mb-4 text-black last:mb-0 dark:text-manatee">
                At Property Matrimony, we are dedicated to transforming the real
                estate experience for our clients As a premier real estate
                platform, we specialize in offering a wide range of premium
                apartments, villas, and plots, tailored to meet the diverse
                needs of our discerning clientele. Backed by a committed team of
                professionals, we leverage advanced technology and comprehensive
                market insights to guide our clients through every step of their
                property journey—from the initial search to the final
                possession.
              </p>
              <p className="mb-4 text-black last:mb-0 dark:text-manatee">
                Our approach is rooted in trust, transparency, and a deep
                understanding of the market, ensuring that every client secures
                not just a property, but their best investment.
              </p>
              <p className="mb-4 text-black last:mb-0 dark:text-manatee">
                Founded by industry veterans in 2011 and supported by a robust
                network, Property Matrimony has rapidly expanded its reach. With
                offices across key cities like Bangalore , Hyderabad and Noida a
                growing portfolio, we have successfully helped numerous clients
                secure their dream plots, villas, and apartments.
              </p>
            </motion.div>
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: 20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_right relative mx-auto hidden aspect-[588/300] md:block md:w-1/2"
            >
              <Image
                width={200}
                height={200}
                src="/images/features/image3.png"
                alt="About"
                className="m-auto rounded-lg shadow-sm"
              />
              <h2 className="text-center relative mb-6 font-bold text-black dark:text-white">
                Director and CEO, Property Matrimony
              </h2>
            </motion.div>
          </div>
        </div>
        <div className="relative mt-10 aspect-[1200/400]">
          <Image
            fill
            src="/images/features/image12.png"
            alt="About"
            className="m-auto rounded-lg shadow-sm"
          />
        </div>
      </section>
      {/* <!-- ===== About Two End ===== --> */}
    </>
  );
};

export default AboutUs;
