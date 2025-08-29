"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";

type ScrollRevealProps = {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  className?: string;
};

export default function ScrollReveal({
  children,
  delay = 0,
  direction = "up",
  className = "",
}: ScrollRevealProps) {
  const directionOffset = {
    up: { y: 60, x: 0 },
    down: { y: -60, x: 0 },
    left: { y: 0, x: 60 },
    right: { y: 0, x: -60 },
  };

  return (
    <motion.div
      className={className}
      initial={{
        ...directionOffset[direction],
      }}
      whileInView={{
        y: 0,
        x: 0,
      }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{
        duration: 1.4,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
