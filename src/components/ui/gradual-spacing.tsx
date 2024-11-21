"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, Variants } from "framer-motion";

import { cn } from "@/lib/utils";

interface GradualSpacingProps {
  texts: string[]; // Ubah dari `text` menjadi `texts` sebagai array kata-kata
  duration?: number;
  delayMultiple?: number;
  framerProps?: Variants;
  className?: string;
  switchInterval?: number; // Tambahkan interval waktu untuk perubahan kata
}

export default function GradualSpacing({
  texts,
  duration = 0.5,
  delayMultiple = 0.04,
  framerProps = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  },
  className,
  switchInterval = 3000, // Interval waktu untuk berganti kata
}: GradualSpacingProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Mengatur interval untuk mengganti kata
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, switchInterval);

    return () => clearInterval(interval);
  }, [texts.length, switchInterval]);

  return (
    <div className="flex space-x-1">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={framerProps}
          transition={{ duration }}
          className="flex space-x-1"
        >
          {texts[currentIndex].split("").map((char, i) => (
            <motion.h1
              key={i}
              className={cn("drop-shadow-sm", className)}
              transition={{ delay: i * delayMultiple }}
            >
              {char === "" ? <span>&nbsp;</span> : char}
            </motion.h1>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
