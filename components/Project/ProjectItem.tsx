"use client";
import { ProjectType } from "@/types/project";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const ProjectItem = ({
  item,
  setSelectedItem,
}: {
  item: ProjectType;
  setSelectedItem: (item: ProjectType) => void;
}) => {
  const { project, image, city, location, type, totalLand, units } = item;

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
        className="animate_top rounded-lg bg-white p-4 pb-9 shadow-solid-8 dark:bg-blacksection"
      >
        <Link href={``} className="relative block aspect-[368/239]">
          {image ? (
            <Image
              src={`/images/projects/${city}/${image}`}
              alt={project}
              fill
            />
          ) : (
            <Image
            className="backdrop-sepia	"
              src={`/images/projects/Bangalore/Assetz 63 degree East.jpg`}
              alt={project}
              fill
            />
          )}
        </Link>

        <div className="">
          <h4 className="mb-1 mt-2 text-lg font-medium text-black hover:text-primary dark:text-white dark:hover:text-primary">
            <Link href={`/contact`}>{project}</Link>
          </h4>
          <div className="text-xs">
            {location}, {city}
          </div>
          <hr className="my-2" />
          <div className="grid grid-cols-2 gap-2">
            {projectProperties.map((property) => (
              <div key={property.title}>
                <div className="flex">
                  <div className="mr-1.5 content-center dark:bg-slate-400 dark:rounded-md">
                    <Image src={property.icon} alt="" height={26} width={26} />
                  </div>
                  <div>
                    <div className="text-sm uppercase text-primary">
                      {property.title}
                    </div>
                    {property.title === "Bed Rooms" ? (
                      <div
                        className="text-xs text-black text-indigo-700 cursor-pointer dark:text-indigo-300"
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
        </div>
      </motion.div>
    </>
  );
};

export default ProjectItem;
