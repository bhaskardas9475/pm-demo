"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { SocialIcon } from "react-social-icons";

const iconSize = 30;

const Footer = () => {
  return (
    <>
      <footer className="border-t border-stroke bg-white dark:border-strokedark dark:bg-blacksection">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          {/* <!-- Footer Top --> */}
          <div className="py-20 lg:py-25">
            <div className="flex flex-wrap gap-8 lg:justify-between lg:gap-0">
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
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
                className="animate_top w-1/2 lg:w-1/4"
              >
                <a href="/" className="relative">
                  <Image
                    width={110}
                    height={80}
                    src="/images/logo/app-logo.png"
                    alt="Logo"
                    className="dark:hidden"
                  />
                  <Image
                    width={110}
                    height={80}
                    src="/images/logo/logo-dark.svg"
                    alt="Logo"
                    className="hidden dark:block"
                  />
                </a>

                <p className="mb-10 mt-5">Premier real estate platform</p>
                <ul className="flex items-center gap-5">
                  <li>
                    <SocialIcon
                      url="https://www.facebook.com/propertymatrimony"
                      target="_blank"
                    />
                  </li>
                  <li>
                    <SocialIcon
                      url="https://www.linkedin.com/company/property-matrimony/"
                      target="_blank"
                    />
                  </li>
                  <li>
                    <SocialIcon
                      url="https://www.instagram.com/propertymatrimony2023/"
                      target="_blank"
                    />
                  </li>
                  <li>
                    <SocialIcon
                      url="https://www.youtube.com/@PropertyMatrimony"
                      target="_blank"
                    />
                  </li>
                </ul>
              </motion.div>

              <div className="flex w-full flex-col gap-8 md:flex-row md:justify-between md:gap-0 lg:w-2/3 xl:w-7/12">
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
                  className="animate_top sm:w-1/2"
                >
                  <h4 className="mb-9 text-itemtitle2 font-medium text-black dark:text-white">
                    Quick Links
                  </h4>

                  <ul>
                    <li>
                      <Link
                        href="/"
                        className="mb-3 inline-block hover:text-primary"
                      >
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/#features"
                        className="mb-3 inline-block hover:text-primary"
                      >
                        Services
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/gallery"
                        className="mb-3 inline-block hover:text-primary"
                      >
                        Gallery
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/about-us"
                        className="mb-3 inline-block hover:text-primary"
                      >
                        Company
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/career"
                        className="mb-3 inline-block hover:text-primary"
                      >
                        Careers
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/contact"
                        className="mb-3 inline-block hover:text-primary"
                      >
                        Contact Us
                      </Link>
                    </li>
                  </ul>
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
                  className="animate_top"
                >
                  <div className="">
                    <div className="content-centre mb-2 flex items-center gap-2.5">
                      <Image
                        src={"/images/icon/OneBangalore.png"}
                        alt={"Bangalore"}
                        height={iconSize}
                        width={iconSize}
                      />
                      <h3 className="text-metatitle3 font-medium text-black dark:text-white">
                        Bangalore:
                      </h3>
                    </div>
                    <p className="mb-2 text-sm">
                      Evolve Work Studio, 3rd Floor, EPIP Zone, Behind RxDx
                      Hospital, Whitefield, Bangalore - 560048, Karnataka <br />
                      Contact No:{" "}
                      <a className="text-blue-600" href="tel:+919663513061">
                        +91-9663513061
                      </a>{" "}
                      <br />
                      Email:{" "}
                      <a
                        className="text-blue-600"
                        href="mailto:info@propertymatrimony.com"
                      >
                        info@propertymatrimony.com
                      </a>{" "}
                      <br />
                      RERA: PRM/KA/RERA/1251/446/AG/230412/003574
                    </p>
                    <div className="content-centre mb-2 flex items-center gap-2.5">
                      <Image
                        src={"/images/icon/onedelhi.png"}
                        alt={"Bangalore"}
                        height={iconSize}
                        width={iconSize}
                      />
                      <h3 className="text-metatitle3 font-medium text-black dark:text-white">
                        Noida:
                      </h3>
                    </div>
                    <p className="mb-2 text-sm">
                      # 710, 7th Floor, Tower B, KLJ Noida One, Block B,
                      Sector 62, Noida - 201309, Uttar Pradesh <br />
                      Contact No:{" "}
                      <a className="text-blue-600" href="tel:+918904435307">
                        +91-8904435307
                      </a>{" "}
                      <br />
                      Email:{" "}
                      <a
                        className="text-blue-600"
                        href="mailto:info@propertymatrimony.com"
                      >
                        info@propertymatrimony.com
                      </a>
                    </p>
                    <div className="content-centre mb-2 flex items-center gap-2.5">
                      <Image
                        src={"/images/icon/OneHyderabad.png"}
                        alt={"Bangalore"}
                        height={iconSize}
                        width={iconSize}
                      />
                      <h3 className="text-metatitle3 font-medium text-black dark:text-white">
                        Hyderabad:
                      </h3>
                    </div>
                    <p className="mb-2 text-sm">
                      Provident Kenworth, Bhavani Colony, Shivarampally Jagir,
                      Premavathipet, Hyderabad - 500030, Telangana <br />
                      Contact No:{" "}
                      <a className="text-blue-600" href="tel:+918861423836">
                        +91-8861423836
                      </a>{" "}
                      <br />
                      Email:{" "}
                      <a
                        className="text-blue-600"
                        href="mailto:info@propertymatrimony.com"
                      >
                        info@propertymatrimony.com
                      </a>{" "}
                      <br />
                      RERA: A28100003272
                    </p>
                  </div>
                  <div className="5 mb-7">
                    <h3 className="mb-4 text-metatitle3 font-medium text-black dark:text-white">
                      Coming Soon @
                    </h3>
                    <p className="text-sm">Goa | Pune | Gurugram</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
          {/* <!-- Footer Top --> */}

          {/* <!-- Footer Bottom --> */}
          <div className="flex flex-col flex-wrap items-center justify-center gap-5 border-t border-stroke py-7 dark:border-strokedark lg:flex-row lg:justify-between lg:gap-0">
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
              className="animate_top"
            >
              <ul className="flex items-center gap-8">
                <li>
                  <Link href="/privacy-policy" className="hover:text-primary">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-primary">
                    Support
                  </Link>
                </li>
              </ul>
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
              className="animate_top"
            >
              <p>
                &copy; {new Date().getFullYear()} Property Matrimony. All rights
                reserved
              </p>
            </motion.div>
          </div>
          {/* <!-- Footer Bottom --> */}
        </div>
      </footer>
    </>
  );
};

export default Footer;
