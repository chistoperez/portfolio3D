"use client";
import React from "react";
import { motion } from "framer-motion";

export default function MotionArrow() {
  return (
    <motion.div
      animate={{ y: [0, 24, 0] }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        repeatType: "loop",
      }}
      className="w-3 h-3 mb-1 rounded-full bg-secondary"
    />
  );
}
