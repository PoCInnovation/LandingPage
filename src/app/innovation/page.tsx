"use client";

import Image from "next/image";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { motion } from "framer-motion";
import InnovationPoles from "@/components/InnovationPoles";

export default function InnovationPage() {
  return (
    <main>
      <section className="relative min-h-screen flex flex-col items-center overflow-hidden bg-background-main">
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute top-0 left-0 md:w-full w-[400vw] overflow-hidden z-[2]">
            <Image
              src="/blue_lines.svg"
              alt=""
              width={1920}
              height={1080}
              className="md:w-full md:h-auto opacity-35"
              priority
            />
          </div>
        </div>
        <div className="absolute top-[45%] md:w-full w-[400vw] left-0 overflow-hidden z-[1]">
          <div className="relative">
            <Image
              src="/red_lines.svg"
              alt=""
              width={1920}
              height={1080}
              className="md:w-full md:h-auto opacity-40 rotate-[180deg]"
              priority
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, #050610 0%, rgba(5, 6, 16, 0.00) 27.4%, rgba(5, 6, 16, 0.00) 61.54%, #050610 100%)",
              }}
            ></div>
          </div>
        </div>
        <div className="container-custom relative z-10 mt-36 md:mt-72 text-center">
            <motion.h1 
              className="text-3xl md:text-5xl font-extrabold text-foreground"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              A propos de nous
            </motion.h1>
        </div>
        <motion.div
            className="text-md md:text-lg text-muted-foreground mb-8 max-w-4xl px-5 mt-5 text-center mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.4,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            PoC Innovation est une communauté de développeurs passionnés qui développent des projets 
            open-source, organise et participe à des évènements dans toute la France. Organisée en pôles 
            d'expertise, l'association fonctionne par vagues de projets de 6 mois pour favoriser la montée en 
            compétence, la collaboration, et l'innovation.
          </motion.div>
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.6,
              ease: "linear",
            }}
          >
            <InnovationPoles />
          </motion.div>
          <ScrollReveal delay={0.1}>
          <Footer />
        </ScrollReveal>
      </section>
    </main>
  );
} 
