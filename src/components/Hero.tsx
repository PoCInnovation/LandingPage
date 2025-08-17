"use client";

import FadeInImage from "./FadeInImage";
import GlassyButton from "./GlassyButton";
import PoCButton from "./PocButton";

export function Hero() {
  return (
    <>
      <div className="container-custom relative z-10 mt-36 md:mt-72">
        <div className="flex flex-col items-center justify-center h-full text-center">
          <FadeInImage
            src="/logo_poc.png"
            alt="Logo"
            width={440}
            height={1}
            className="mb-2 w-64 md:w-[440px]"
            fallbackHeight={200}
          />

          <div className="flex items-center justify-center space-x-2 mb-5">
            <div className="bg-foreground h-[2px] w-6" />
            <h1 className="text-lg md:text-xl font-semibold text-foreground">
              Centre d'Innovation Étudiant
            </h1>
            <div className="bg-foreground h-[2px] w-6" />
          </div>

          <p className="text-md md:text-lg text-muted-foreground mb-8 max-w-4xl px-5">
            PoC est le premier centre d'innovation français rassemblant les
            élèves les plus motivés. Les étudiants se rassemblent autour de
            projets open-source regroupés en 4 pôles principaux.
          </p>

          <div className="flex items-center justify-center space-x-4 md:space-x-8">
            <GlassyButton>En savoir plus</GlassyButton>
            <PoCButton>Nous contacter</PoCButton>
          </div>
        </div>
      </div>
    </>
  );
}
