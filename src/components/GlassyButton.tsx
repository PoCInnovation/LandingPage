"use client";

import { motion } from "framer-motion";

export default function GlassyButton({
  children,
  onClick,
  className,
}: {
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
}) {
  return (
    <motion.button
      onClick={onClick}
      className={`
        relative px-6 py-4 text-white font-medium text-md
        bg-[#E2E2E21A]/90 bg-opacity-40 
        rounded-3xl 
        backdrop-blur-2xl 
        transition-all duration-300 ease-in-out 
        hover:bg-opacity-50 hover:border-opacity-20
        hover:shadow-2xl hover:shadow-black/20
        shadow-xl shadow-black/10
        tracking-wide
        cursor-pointer
        ${className}
      `}
      whileHover={{
        y: -2,
        scale: 1.02,
        transition: { duration: 0.2 },
      }}
      whileTap={{
        y: 0,
        scale: 0.98,
        transition: { duration: 0.1 },
      }}
    >
      <div
        className="absolute inset-0 rounded-full bg-gradient-to-br from-white/10 to-white/5 pointer-events-none hover:opacity-100 opacity-0 transition-opacity duration-300"
      />

      <span className="relative z-10">{children}</span>
    </motion.button>
  );
}
