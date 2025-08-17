import Image from "next/image";
import React from "react";
import GlassyStatCard from "./GlassyStatCard";

function Association() {
  return (
    <div className="container-custom relative z-10 mt-10 md:mt-20 flex flex-col items-center justify-center text-center px-4">
      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
        Au cœur de l&apos;association
      </h2>

      <div className="mt-6 w-full max-w-7xl">
        <div className="flex flex-col lg:flex-row lg:space-x-8 space-y-6 lg:space-y-0 items-center lg:items-start">
          <div className="w-full sm:w-auto lg:w-1/2 xl:w-[45%]">
            <Image
              src="/conference.png"
              alt="Conference"
              width={583}
              height={400}
              className="
                w-full sm:w-auto
                h-[400px] sm:h-[456px] lg:h-[516px]
                rounded-lg shadow-md border border-foreground/10
                object-cover
              "
              style={{
                width: "auto",
              }}
            />
          </div>

          <div className="w-full lg:w-1/2 xl:w-[55%]">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 lg:gap-4 xl:gap-6">
              <GlassyStatCard
                statText="+150"
                title="Projets complétés"
                description="PoC entreprend de nombreux projets et s'organise autour de sessions de 6 mois."
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
      </div>
    </div>
  );
}

export default Association;
