"use client";

import Image from "next/image";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background-main">
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute top-0 left-0 md:w-full w-[400vw] overflow-hidden z-[2]">
          <Image
            src="/blue_lines.svg"
            alt=""
            width={1920}
            height={1080}
            className="md:w-full md:h-auto opacity-25"
            priority
          />
        </div>

        <div className="absolute bottom-32 md:w-full w-[400vw] left-0 overflow-hidden z-[1]">
          <div className="relative">
            <Image
              src="/red_lines.svg"
              alt=""
              width={1920}
              height={1080}
              className="md:w-full md:h-auto opacity-25 rotate-[180deg]"
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
      </div>

      {/* AI-Generated Content for testing purposes (Copilot) */}
      <div className="container-custom relative z-10">
        <div className="flex flex-col items-center justify-center h-full text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Bienvenue au PoC
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl">
            Découvrez notre association étudiante dédiée à l'innovation et à la
            transformation des idées en projets concrets.
          </p>

          <a
            href="/about"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            En savoir plus
          </a>
        </div>
      </div>
    </section>
  );
}
