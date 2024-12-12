"use client";

import { useState } from "react";
import { GalleryData } from "./GalleryData";
import { motion, AnimatePresence } from "framer-motion";

export default function Gallery() {
  const [defaultItem] = GalleryData;
  const [selected, setSelected] = useState(defaultItem.title);
  const defaultClass = `mr-2 rounded-full bg-red-200 px-5 py-2.5 text-xl font-semibold leading-4 text-red-600 transition-all duration-700 hover:bg-red-100`;
  const selectedClass = `mr-2 rounded-full bg-red-500 px-5 py-2.5 text-xl font-semibold leading-4 text-white transition-all duration-700 hover:bg-red-800`;
  const galleryItem = GalleryData.find((itm) => itm.title === selected);

  return (
    <div className="mx-auto mt-10 max-w-c-1235 overflow-hidden px-4 md:px-8 2xl:px-0">
      {GalleryData.map((item) => (
        <button
          className={item.title === selected ? selectedClass : defaultClass}
          onClick={() => setSelected(item.title)}
        >
          {item.title}
        </button>
      ))}
      <AnimatePresence>
        <div className="mt-10 grid grid-cols-12 gap-4">
          {galleryItem?.items.map((item) => (
            <motion.div
              key={`card-${item}`} // Ensures key changes on shuffle
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: -20 }}
              transition={{ duration: 0.3 }}
              className="col-span-12 md:col-span-4 "
            >
              <div
                style={{ backgroundImage: `url('${galleryItem.path}${item}')` }}
                className="m-auto h-[400px] w-[100%] rounded border bg-slate-200 bg-contain bg-center bg-no-repeat "
              ></div>
            </motion.div>
          ))}
        </div>
      </AnimatePresence>
    </div>
  );
}
