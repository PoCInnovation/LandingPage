import Image from "next/image";
import React from "react";
import GlassyStatCard from "./GlassyStatCard";

function Association() {
  return (
    <div className="container-custom relative z-10 mt-10 md:mt-20 flex flex-col items-center justify-center text-center">
      <h2 className="text-xl md:text-4xl font-bold text-foreground mb-4">
        Au cœur de l&apos;association
      </h2>
      <div className="mt-6 flex flex-row space-x-6">
        <div>
          <Image
            src="/conference.png"
            alt="Conference"
            width={583}
            height={1}
            className="rounded-lg shadow-md border border-foreground/10"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <GlassyStatCard
            statText="+150"
            title="Projets complétés"
            description={
              "PoC entreprend de nombreux projets et s'organise autour de sessions de 6 mois."
            }
          />
          <GlassyStatCard
            statText="20+"
            title="Membres actifs"
            description="Notre équipe passionnée travaille ensemble pour créer des solutions innovantes."
          />
          <GlassyStatCard
            statText="5"
            title="Partenaires"
            description="Nous collaborons avec des entreprises leaders pour maximiser notre impact."
          />
          <GlassyStatCard
            statText="24/7"
            title="Support continu"
            description="Un accompagnement permanent pour assurer le succès de chaque projet."
          />
        </div>
      </div>
    </div>
  );
}

export default Association;
