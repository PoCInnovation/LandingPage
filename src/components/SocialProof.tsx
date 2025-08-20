"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

function SocialProof() {
  const logos = Array.from({ length: 4 }).fill("/logo_poc.png");

  return (
    <div data-section="social-proof" className="container-custom relative z-10 mt-35 md:mt-50 flex flex-col items-center justify-center text-center px-4">
      <p className="text-md md:text-xl text-foreground max-w-4xl mb-7">
      Ils nous accompagnent dans nos projets les plus ambitieux
      </p>

      <div className="w-full max-w-7xl">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-6 md:gap-8 lg:gap-10 items-center justify-items-center">
          {logos.concat(logos).map((logo, index) => (
            <motion.div
              key={index}
              className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 flex items-center justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.25, 0.25, 0.25, 0.75],
              }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.2 },
              }}
            >
              <Image
                src={logo as string}
                alt={`Logo ${index + 1}`}
                width={112}
                height={112}
                className="object-contain opacity-70 hover:opacity-100 transition-opacity duration-300 w-full h-full"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SocialProof;
