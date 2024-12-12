"use client";
import { ProjectType } from "@/types/project";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const phoneNumbers = {
  Bangalore: "tel:+919606400297",
  Noida: "tel:+918904435307",
  Hyderabad: "tel:+91 8951045001",
};

const ProjectItem = ({
  item,
  setSelectedItem,
}: {
  item: ProjectType;
  setSelectedItem: (item: ProjectType) => void;
}) => {
  const {
    project,
    image,
    city,
    location,
    type,
    totalLand,
    units,
    home_screen,
  } = item;

  const isNew = home_screen === "yes";

  const projectProperties = [
    {
      title: "Project Type",
      value: type || "N/A",
      icon: "/images/icon/project-type.svg",
    },
    {
      title: "Bed Rooms",
      value: "1, 2, 3 BHK (Details)",
      icon: "/images/icon/bedrooms.svg",
    },
    {
      title: "Development Size",
      value: totalLand || "N/A",
      icon: "/images/icon/development-size.svg",
    },
    {
      title: "Total Units",
      value: units,
      icon: "/images/icon/units.svg",
    },
  ];

  return (
    <>
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
        className="animate_top rounded-lg bg-white p-4 shadow-solid-8 dark:bg-blacksection"
      >
        <div className="relative overflow-hidden">
          {isNew ? (
            <div className="absolute left-[-22px] top-[18px] z-[1] rotate-[-38deg] bg-blue-500 px-7 py-0 text-[small] text-[white]">
              New Launch
            </div>
          ) : null}
          <Link href={``} className="relative block aspect-[368/239]">
            {image ? (
              <Image
                src={`/images/projects/${city}/${image}`}
                alt={project}
                fill
                className="transform transition-transform duration-300 hover:scale-125"
              />
            ) : (
              <Image
                src={`/images/projects/Bangalore/Assetz 63 degree East.jpg`}
                alt={project}
                fill
              />
            )}
          </Link>
        </div>

        <div className="">
          <h4 className="mb-1 mt-2 text-lg font-medium capitalize text-black hover:text-primary dark:text-white dark:hover:text-primary">
            <Link href={`/contact`}>{project.toLowerCase()}</Link>
          </h4>
          <div className="text-xs">
            {location}, {city}
          </div>
          <hr className="my-2" />
          <div className="grid grid-cols-2 gap-2">
            {projectProperties.map((property) => (
              <div key={property.title}>
                <div className="flex">
                  <div className="mr-1.5 content-center dark:rounded-md dark:bg-slate-400">
                    <Image src={property.icon} alt="" height={26} width={26} />
                  </div>
                  <div>
                    <div className="text-sm uppercase text-primary">
                      {property.title}
                    </div>
                    {property.title === "Bed Rooms" ? (
                      <div
                        className="cursor-pointer text-xs text-black text-indigo-700 dark:text-indigo-300"
                        onClick={() => setSelectedItem(item)}
                      >
                        {property.value || ""}
                      </div>
                    ) : (
                      <div className="text-xs text-black dark:text-white">
                        {property.value || ""}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <hr className="my-2" />
          <div className="flex">
            <Link
              href="/contact"
              className="duration-400 mr-2 rounded-full bg-red-200 px-5 py-1 text-sm font-semibold text-red-600 transition-all hover:bg-red-100"
            >
              Enquire Now
            </Link>
            <Link
              className="duration-400 mr-2 rounded-full bg-red-200 px-5 py-[3px] font-semibold text-red-600 transition-all hover:bg-red-100"
              href={phoneNumbers[city]}
            >
              <Image
                src={"/images/icon/call.svg"}
                height={19}
                width={19}
                alt=""
              />
            </Link>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default ProjectItem;
