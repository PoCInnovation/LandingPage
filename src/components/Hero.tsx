"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import GlassyButton from "./GlassyButton";
import PoCButton from "./PocButton";

export function Hero() {
  return (
    <>
      <div className="container-custom relative z-10 mt-36 md:mt-72">
        <div className="flex flex-col items-center justify-center h-full text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <Image
              src="/logo_poc.png"
              alt="Logo"
              width={440}
              height={1}
              className="mb-2 w-64 md:w-[440px]"
            />
          </motion.div>

          <motion.div
            className="flex items-center justify-center space-x-2 mb-5"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.4,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            <motion.div
              className="bg-foreground h-[2px] w-6"
              initial={{ width: 0 }}
              animate={{ width: 24 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            />
            <h1 className="text-lg md:text-xl font-semibold text-foreground">
              Centre d'Innovation Étudiant
            </h1>
            <motion.div
              className="bg-foreground h-[2px] w-6"
              initial={{ width: 0 }}
              animate={{ width: 24 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            />
          </motion.div>

          <motion.p
            className="text-md md:text-lg text-muted-foreground mb-8 max-w-4xl px-5"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.6,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            PoC est le premier centre d'innovation français rassemblant les
            élèves les plus motivés. Les étudiants se rassemblent autour de
            projets open-source regroupés en 4 pôles principaux.
          </motion.p>

          <motion.div
            className="flex items-center justify-center space-x-4 md:space-x-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.8,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            <GlassyButton>En savoir plus</GlassyButton>
            <PoCButton>Nous contacter</PoCButton>
          </motion.div>
        </div>
      </div>
    </>
  );
}
