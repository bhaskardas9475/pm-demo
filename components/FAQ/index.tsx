"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import FAQItem from "./FAQItem";
import faqData from "./faqData";
import Link from "next/link";
import SectionHeader from "../Common/SectionHeader";

const FAQ = () => {
  const [activeFaq, setActiveFaq] = useState(1);

  const handleFaqToggle = (id: number) => {
    activeFaq === id ? setActiveFaq(0) : setActiveFaq(id);
  };

  return (
    <>
      {/* <!-- ===== FAQ Start ===== --> */}
      <section className="overflow-hidden">
        <div className="mx-auto mt-15 max-w-c-1280 py-10 md:px-8 xl:mt-20 xl:px-0">
          <SectionHeader
            headerInfo={{
              title: `PROJECTS`,
              subtitle: `Frequently Asked Questions`,
              description: ``,
            }}
          />
          {/* <div className="absolute -bottom-16 -z-1 h-full w-full">
            <Image
              fill
              src="/images/shape/shape-dotted-light.svg"
              alt="Dotted"
              className="dark:hidden"
            />
            <Image
              fill
              src="/images/shape/shape-dotted-light.svg"
              alt="Dotted"
              className="hidden dark:block"
            />
          </div> */}
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
              className="animate_right"
            >
              <div className="rounded-lg bg-white shadow-solid-8 dark:border dark:border-strokedark dark:bg-blacksection xl:mt-20 mt-12.5 lg:mt-15">
                {faqData.map((faq, key) => (
                  <FAQItem
                    key={key}
                    faqData={{ ...faq, activeFaq, handleFaqToggle }}
                  />
                ))}
              </div>
            </motion.div>
        </div>
      </section>
      {/* <!-- ===== FAQ End ===== --> */}
    </>
  );
};

export default FAQ;
