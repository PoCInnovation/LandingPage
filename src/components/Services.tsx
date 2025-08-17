import React from "react";
import PoCButton from "./PocButton";

function Services() {
  return (
    <div className="container-custom relative z-10 mt-10 md:mt-20 flex justify-center">
      <div className="max-w-7xl relative mb-4 rounded-xl w-full text-center px-7 py-24 space-y-5 overflow-hidden justify-center items-center">
        <div className="absolute inset-0 rounded-xl p-0.5">
          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-red-500 to-blue-500" />
        </div>
        <div className="absolute inset-0.5 rounded-xl bg-background-main" />
        <div className="absolute inset-0.5 rounded-xl bg-gradient-to-r from-red-500/10 via-background-main to-blue-500/10" />
        <h2 className="relative z-10 text-xl md:text-4xl font-bold text-foreground">
          PoC, c'est plus qu'une association. <br />
          C'est votre allié pour tous vos projets.
        </h2>
        <p className="relative z-10 text-md md:text-lg text-muted-foreground mt-8">
          PoC évolue et franchit une nouvelle étape ! En plus d'être une
          association, PoC lance sa branche services pour réaliser vos projets
          informatiques. Du logiciel à l'application web, notre équipe
          transforme vos idées en solutions sur mesure avec expertise et
          créativité.
        </p>
        <div className="relative z-10 flex justify-center mt-8">
          <PoCButton bgColor="bg-black">
            <p className="text-foreground">En savoir plus</p>
          </PoCButton>
        </div>
      </div>
    </div>
  );
}

export default Services;
