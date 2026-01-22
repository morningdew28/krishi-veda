"use client";

import animationData from "./KrishiVeda.json";
import { useLottie } from "lottie-react";
import { motion } from "motion/react";

const KrishiVeda = () => {
  const { View, play } = useLottie({
    animationData,
    loop: false,
    autoplay: false,
  });

  return (
    <motion.div
      viewport={{ amount: 1, once: true }} // 👈 plays once only
      onViewportEnter={() => play()} // or play(0, 140)
    >
      {View}
    </motion.div>
  );
};

export default KrishiVeda;
