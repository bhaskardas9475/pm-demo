"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeader from "../Common/SectionHeader";

const Integration = () => {
  const size = 90;
  const logos = [
    [
      '/images/developers/Adarsh-Developers-Logo.png',
      '/images/developers/Apex Group.png',
      '/images/developers/Ashoka.png',
      '/images/developers/Brigade-logo.png',
      '/images/developers/Godrej Properties.png',
      '/images/developers/Kalyani Developers.png'
    ],
    [
      '/images/developers/Lodha Group.png',
      '/images/developers/Nambiar.png',
      '/images/developers/Prestige Group.png',
      '/images/developers/Quebec.jpeg',
      '/images/developers/Realty.png',
      '/images/developers/Sun flower.webp'
    ],
    [
      '/images/developers/Tata Carnatica.jpeg',
      '/images/developers/The Pearl by Auro.png'
    ]
  ]
  return (
    <>
      <section>
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          {/* <!-- Section Title Start --> */}
          <SectionHeader
            headerInfo={{
              title: `DEVELOPERS`,
              subtitle: `Top developers under one roof`,
              description: `Leading developers known for innovative designs, quality construction, and delivering exceptional value in prime locations.`,
            }}
          />

          {/* <!-- Section Title End --> */}
        </div>
        {logos.map((logo, index) => (
          <div className="pattern-dots pattern-blue-500 pattern-bg-[#9CA3AF] pattern-size-4 pattern-opacity-10 relative z-50 mx-auto mt-15 max-w-c-1154 px-4 md:px-8 xl:mt-20 xl:px-0">
            <div className="absolute -top-3/4 left-0 right-0 -z-1 mx-auto h-full w-full">
              <Image
                width={1200}
                height={400}
                sizes="(max-width: 768px) 100vw"
                src="/images/shape/shape-dotted-light.svg"
                alt="Dotted"
                className="dark:hidden"
                style={{ position: "static" }}
              />
              <Image
                fill
                src="/images/shape/shape-dotted-dark.svg"
                alt="Dotted"
                className="hidden dark:block"
              />
            </div>
            <div className="flex flex-wrap justify-around gap-y-10">
              <motion.div
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
                transition={{ duration: 1, delay: 0.1 }}
                viewport={{ once: true }}
                className="animate_top w-1/6"
              >
                <div className="inline-block rounded-[10px] bg-[#9CA3AF] p-4.5 shadow-solid-7 dark:bg-btndark">
                  <Image
                    width={size}
                    height={size}
                    src={logo[0]}
                    alt="Brand"
                  />
                </div>
              </motion.div>

              <motion.div
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
                transition={{ duration: 1, delay: 0.1 }}
                viewport={{ once: true }}
                className="animate_top w-1/6"
              ></motion.div>

              <motion.div
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
                transition={{ duration: 1, delay: 0.1 }}
                viewport={{ once: true }}
                className="animate_top w-1/6"
              >
                <div className="inline-block rounded-[10px] bg-[#9CA3AF] p-4.5 shadow-solid-7 dark:bg-btndark">
                  <Image
                    width={size}
                    height={size}
                    src={logo[1]}
                    alt="Brand"
                  />
                </div>
              </motion.div>

              {index !== 2 ? <>

                <motion.div
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
                  transition={{ duration: 1, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="animate_top w-1/6"
                >
                  <div className="h-[11px] w-[11px] rounded-full bg-[#FFDB26]"></div>
                </motion.div>

                <motion.div
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
                  transition={{ duration: 1, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="animate_top w-1/6"
                >
                  <div className="inline-block rounded-[10px] bg-[#9CA3AF] p-4.5 shadow-solid-7 dark:bg-btndark">
                    <Image
                      width={size}
                      height={size}
                      src={logo[2]}
                      alt="Brand"
                    />
                  </div>
                </motion.div>

                <motion.div
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
                  transition={{ duration: 1, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="animate_top w-1/6"
                ></motion.div>

                <motion.div
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
                  transition={{ duration: 1, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="animate_top w-1/6"
                >
                  <div className="h-[15px] w-[15px] rounded-full bg-[#62E888]"></div>
                </motion.div>

                <motion.div
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
                  transition={{ duration: 1, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="animate_top w-1/6"
                >
                  <div className="inline-block rounded-[10px] bg-[#9CA3AF] p-4.5 shadow-solid-7 dark:bg-btndark">
                    <Image
                      width={size}
                      height={size}
                      src={logo[3]}
                      alt="Brand"
                    />
                  </div>
                </motion.div>

                <motion.div
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
                  transition={{ duration: 1, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="animate_top w-1/6"
                >
                  <div className="h-[23px] w-[23px] rounded-full bg-[#EF5C00]"></div>
                </motion.div>

                <motion.div
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
                  transition={{ duration: 1, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="animate_top w-1/6"
                >
                  <div className="inline-block rounded-[10px] bg-[#9CA3AF] p-4.5 shadow-solid-7 dark:bg-btndark">
                    <Image
                      width={size}
                      height={size}
                      src={logo[4]}
                      alt="Brand"
                    />
                  </div>
                </motion.div>

                <motion.div
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
                  transition={{ duration: 1, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="animate_top w-1/6"
                >
                  <div className="h-[15px] w-[15px] rounded-full bg-[#016BFF]"></div>
                </motion.div>

                <motion.div
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
                  transition={{ duration: 1, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="animate_top w-1/6"
                >
                  <div className="inline-block rounded-[10px] bg-[#9CA3AF] p-4.5 shadow-solid-7 dark:bg-btndark">
                    <Image
                      width={size}
                      height={size}
                      src={logo[5]}
                      alt="Brand"
                    />
                  </div>
                </motion.div>
              </> : null}
            </div>
          </div>
        ))}

      </section>
    </>
  );
};

export default Integration;
