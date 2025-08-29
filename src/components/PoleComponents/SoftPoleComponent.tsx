import React from "react";
import ProfileCard from "../PoleCards/ProfileCard";
import StatsCard from "../PoleCards/StatsCard";
import EventImageCard from "../PoleCards/MediumEventCard";
import LargeEventCard from "../PoleCards/LargeEventCard";
import FeaturedProjects, { FeaturedProject } from "./FeaturedProjects";

export default function SoftwarePoleComponent() {
  const handleContactClick = () => {
    // Handle contact click for Pierre Lissopé
    console.log("Contact Pierre Lissopé");
  };

  const featuredProjects: FeaturedProject[] = [
    {
      id: "serverless-sdk",
      title: "Serverless SDK",
      description:
        "SDK modulaire pour créer et déployer des applications serverless multi-cloud avec gestion automatique des ressources.",
      tools: ["TypeScript", "AWS Lambda", "Terraform"],
      contributors: [
        "Pierre Lissopé",
        "Antoine Martin",
        "Clara Bernard",
        "Hugo Lefevre",
      ],
      heroImage: { src: "/conference.png", alt: "Serverless SDK hero" },
      repoUrl: "https://github.com/PoCInnovation/serverless-sdk",
    },
    {
      id: "api-generator",
      title: "API Generator",
      description:
        "Générateur automatique d'APIs REST et GraphQL à partir de schémas de données avec documentation intégrée.",
      tools: ["Node.js", "Express", "GraphQL"],
      contributors: ["Léa Dubois", "Marc Antoine"],
      heroImage: { src: "/conference.png", alt: "API Generator hero" },
      repoUrl: "#",
    },
    {
      id: "migration-toolkit",
      title: "Migration Toolkit",
      description:
        "Suite d'outils pour migrer des applications legacy vers des architectures modernes avec analyse de code et refactoring automatisé.",
      tools: ["Python", "AST", "Docker"],
      contributors: ["Sophie Chen", "Nicolas Roux"],
      heroImage: { src: "/logo_poc.png", alt: "Migration Toolkit hero" },
      repoUrl: "#",
    },
    {
      id: "devops-platform",
      title: "DevOps Platform",
      description:
        "Plateforme CI/CD complète avec pipelines automatisés, monitoring et déploiement multi-environnements.",
      tools: ["GitLab CI", "Kubernetes", "Prometheus"],
      contributors: ["Thomas Garcia", "Emma Petit"],
      heroImage: { src: "/conference.png", alt: "DevOps Platform hero" },
      repoUrl: "#",
    },
  ];

  return (
    <div className="w-full">
      {/* Mobile: single column */}
      <div className="grid grid-cols-1 gap-4 md:hidden px-4">
        <ProfileCard
          name="Pierre Lissopé"
          role="Responsable Software"
          imageSrc="/conference.png"
          imageAlt="Pierre Lissopé, Responsable Software"
          onContactClick={handleContactClick}
        />
        <StatsCard
          number="20+"
          title="Projets complétés"
          description="Du SDK serverless à la génération d'API ou la migration front, nos projets explorent les outils et frameworks les plus actuels."
        />
        <StatsCard
          number="30+"
          title="Workshops de découverte"
          description="Découverte des frameworks les plus utilisés, les différents langages, les bases de données, tests, déploiement et bien plus encore."
        />
        <EventImageCard
          imageSrc="/conference.png"
          imageAlt="Hackathon Google"
          title="Hackathon Google"
          date="5 Juillet 2025"
        />
        <EventImageCard
          imageSrc="/conference.png"
          imageAlt="Salon IA ministère de l'intérieur"
          title="Salon IA ministère de l'intérieur"
          date="8 Octobre 2024"
        />
        <LargeEventCard
          imageSrc="/conference.png"
          imageAlt="Hackathon Mistral"
          title="Hackathon Mistral"
          date="19 Avril 2025"
        />
      </div>
      
      {/* Medium screens (md to xl): 2 columns layout using full width */}
      <div className="hidden md:grid md:grid-cols-2 xl:hidden gap-4 px-4 auto-rows-auto">
        {/* Profile Card spans 2 rows */}
        <div className="row-span-2">
          <ProfileCard
            name="Pierre Lissopé"
            role="Responsable Software"
            imageSrc="/conference.png"
            imageAlt="Pierre Lissopé, Responsable Software"
            onContactClick={handleContactClick}
          />
        </div>
        
        {/* Right column with other cards */}
        <div className="flex flex-col gap-4">
          <StatsCard
            number="20+"
            title="Projets complétés"
            description="Du SDK serverless à la génération d'API ou la migration front, nos projets explorent les outils et frameworks les plus actuels."
          />
          <StatsCard
            number="30+"
            title="Workshops de découverte"
            description="Découverte des frameworks les plus utilisés, les différents langages, les bases de données, tests, déploiement et bien plus encore."
          />
        </div>
        
        {/* Event Cards in bottom row */}
        <EventImageCard
          imageSrc="/conference.png"
          imageAlt="Salon IA ministère de l'intérieur"
          title="Salon IA ministère de l'intérieur"
          date="8 Octobre 2024"
        />
        <EventImageCard
          imageSrc="/conference.png"
          imageAlt="Hackathon Google"
          title="Hackathon Google"
          date="5 Juillet 2025"
        />
        
        {/* Large Event Card spans full width */}
        <div className="col-span-2">
          <LargeEventCard
            imageSrc="/conference.png"
            imageAlt="Hackathon Mistral"
            title="Hackathon Mistral"
            date="19 Avril 2025"
          />
        </div>
      </div>
      
      {/* Large screens (xl and above): 4 equal columns using full viewport width */}
      <div className="hidden xl:grid xl:grid-cols-4 gap-4 2xl:gap-6 px-4 2xl:px-8">
        {/* Profile Card - Column 1 */}
        <div className="col-span-1">
          <ProfileCard
            name="Pierre Lissopé"
            role="Responsable Software"
            imageSrc="/conference.png"
            imageAlt="Pierre Lissopé, Responsable Software"
            onContactClick={handleContactClick}
          />
        </div>
        
        {/* Stats Cards - Column 2 */}
        <div className="col-span-1 grid grid-rows-2 gap-4 2xl:gap-6">
          <StatsCard
            number="20+"
            title="Projets complétés"
            description="Du SDK serverless à la génération d'API ou la migration front, nos projets explorent les outils et frameworks les plus actuels."
          />
          <StatsCard
            number="30+"
            title="Workshops de découverte"
            description="Découverte des frameworks les plus utilisés, les différents langages, les bases de données, tests, déploiement et bien plus encore."
          />
        </div>
        
        {/* Event Cards - Column 3 */}
        <div className="col-span-1 grid grid-rows-2 gap-4 2xl:gap-6">
          <EventImageCard
            imageSrc="/conference.png"
            imageAlt="Hackathon Google"
            title="Hackathon Google"
            date="5 Juillet 2025"
          />
          <EventImageCard
            imageSrc="/conference.png"
            imageAlt="Salon IA ministère de l'intérieur"
            title="Salon IA ministère de l'intérieur"
            date="8 Octobre 2024"
          />
        </div>
        
        {/* Large Event Card - Column 4 */}
        <div className="col-span-1">
          <LargeEventCard
            imageSrc="/conference.png"
            imageAlt="Hackathon Mistral"
            title="Hackathon Mistral"
            date="19 Avril 2025"
          />
        </div>
      </div>
      

      <div className="w-full px-4">
        <FeaturedProjects projects={featuredProjects} />
      </div>
    </div>
  );
}