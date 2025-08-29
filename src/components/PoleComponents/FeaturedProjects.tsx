"use client";

import Image from "next/image";
import React, { useMemo, useState } from "react";
import PoCButton from "../PocButton";

export type FeaturedProject = {
  id: string;
  title: string;
  description: string;
  tools: string[]; // languages, frameworks, libs
  contributors: string[];
  heroImage: { src: string; alt: string };
  gallery?: { src: string; alt: string }[]; // optional extra images for thumbnails
  repoUrl?: string;
};

type FeaturedProjectsProps = {
  title?: string;
  projects: FeaturedProject[];
};

export default function FeaturedProjects({ title = "Les projets phares de notre pôle", projects }: FeaturedProjectsProps) {
  const [activeId, setActiveId] = useState(projects[0]?.id);

  const active = useMemo(() => projects.find(p => p.id === activeId) ?? projects[0], [activeId, projects]);

  return (
    <section className="md:mt-18">
      <h2 className="text-2xl md:text-4xl font-bold text-white mb-6">{title}</h2>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Left: Large image + thumbnails below */}
        <div className="lg:col-span-7">
          <div className="bg-[#E2E2E21A]/40 rounded-2xl border border-foreground/10 overflow-hidden w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] relative">
            <Image
              src={active.heroImage.src}
              alt={active.heroImage.alt}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Thumbnails row (other projects) */}
          <div className="mt-4 flex justify-center">
            <div className="flex gap-5 flex-wrap justify-center pb-2">
              {projects.map((p) => (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => setActiveId(p.id)}
                  className={`cursor-pointer relative flex-shrink-0 w-40 h-24 rounded-lg overflow-hidden border ${p.id === active.id ? "border-white/60" : "border-foreground/10"}`}
                  aria-label={`Afficher ${p.title}`}
                >
                  <Image src={p.heroImage.src} alt={p.heroImage.alt} width={320} height={180} className="w-full h-full object-cover" />
                  {p.id === active.id && (
                    <div className="absolute inset-0 ring-2 ring-white/50 pointer-events-none" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Details */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          <h3 className="text-2xl md:text-3xl font-semibold text-foreground">{active.title}</h3>
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
            {active.description}
          </p>

          <div className="mt-2">
            <p className="text-l text-foreground mb-2">Outils utilisées</p>
            <div className="flex flex-wrap gap-2">
              {active.tools.map((tool) => (
                <span
                  key={tool}
                  className="px-2 py-1 rounded-md bg-transparent border border-foreground/50 text-xs md:text-sm text-foreground/90"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-3">
            <p className="text-l text-foreground mb-2">Contributeurs</p>
            <div className="flex flex-wrap gap-2">
              {active.contributors.map((c) => (
                <span
                  key={c}
                  className="px-2 py-1 rounded-md bg-transparent border border-foreground/50 text-xs md:text-sm text-foreground/90"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>

          {active.repoUrl && (
            <div className="mt-4">
              <PoCButton onClick={() => {
                window.location.href = active.repoUrl ?? "https://github.com/PoCInnovation";
              }}
              bgColor="bg-[#050610]"
              textColor="text-white">
                Github
              </PoCButton>
            </div>
          )}
        </div>
      </div>
    </section>
  );
} 
