"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface HeroSectionProps {
  mainText: ReactNode;
  subText: ReactNode;
}

export default function HeroSection({ mainText, subText }: HeroSectionProps) {
  // Variants for the container to stagger the children (H1 then H3)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.8, // Delays the slogan slightly after the heading
      },
    },
  };

  // Variants for individual text elements
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 1 },
    },
  };

  return (
    <motion.div
      className="flex flex-col text-center gap-5"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 1,
      }}
    >
      <motion.h1 className="text-5xl font-bold" variants={itemVariants}>
        {mainText}
      </motion.h1>

      <motion.h3 className="text-xl" variants={itemVariants}>
        {subText}
      </motion.h3>
    </motion.div>
  );
}
