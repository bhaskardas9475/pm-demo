'use client'
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const AnimatedGallery = () => {
  const [cards, setCards] = useState(["Card 1", "Card 2", "Card 3", "Card 4"]);

  // Shuffle function
  const shuffleCards = () => {
    const shuffled = [...cards].sort(() => Math.random() - 0.5);
    setCards(shuffled);
  };

  return (
    <div className="flex flex-col items-center">
      <button
        onClick={shuffleCards}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600 transition"
      >
        Shuffle Cards
      </button>
      <div className="grid grid-cols-2 gap-4">
        <AnimatePresence>
          {cards.map((card, index) => (
            <motion.div
              key={`${card}-${index}`} // Ensures key changes on shuffle
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: -20 }}
              transition={{ duration: 0.3 }}
              className="p-4 bg-white shadow-md rounded text-center border border-gray-200"
            >
              {card}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default AnimatedGallery;
