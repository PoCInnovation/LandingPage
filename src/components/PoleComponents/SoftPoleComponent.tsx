import React from "react";
import ProfileCard from "../PoleCards/ProfileCard";
import StatsCard from "../PoleCards/StatsCard";
import EventImageCard from "../PoleCards/MediumEventCard";
import LargeEventCard from "../PoleCards/LargeEventCard";

export default function AIPoleComponent() {
  const handleContactClick = () => {
    // Handle contact click for Léandre Ramos
    console.log("Contact Léandre Ramos");
  };

  return (
    <div className="grid grid-cols-1 xl:grid-cols-4 gap-6 xl:auto-rows-fr">
      {/* Col 1: Profile Card spanning two rows */}
      <div className="xl:row-span-2">
        <ProfileCard
          name="Pierre Lissopé"
          role="Responsable Software"
          imageSrc="/conference.png" // Using existing image as placeholder
          imageAlt="Pierre Lisspoé, Responsable Software"
          onContactClick={handleContactClick}
        />
      </div>

      {/* Col 2: Two Stats Cards stacked */}
      <div className="flex flex-col gap-6">
        <StatsCard
          number="20+"
          title="Projets complétés"
          description="Du SDK serverless à la génération d’API ou la migration front, nos projets explorent les outils et frameworks les plus actuels."
        />
        <StatsCard
          number="30+"
          title="Workshops de découverte"
          description="Découverte des frameworks les plus utilisés, les différents langages, les bases de données, tests, déploiement et bien plus encore."
        />
      </div>

      {/* Col 3: Two Medium Event Cards stacked */}
      <div className="flex flex-col gap-6">
        <EventImageCard
          imageSrc="/conference.png" // Using existing image as placeholder
          imageAlt="Hackathon Google"
          title="Hackathon Google"
          date="5 Juillet 2025"
        />
        <EventImageCard
          imageSrc="/conference.png" // Using existing image as placeholder
          imageAlt="Salon IA ministère de l'intérieur"
          title="Salon IA ministère de l'intérieur"
          date="8 Octobre 2024"
        />
      </div>

      {/* Col 4: Large Event Card spanning two rows */}
      <div className="xl:row-span-2">
        <LargeEventCard
          imageSrc="/conference.png" // Using existing image as placeholder
          imageAlt="Hackathon Mistral"
          title="Hackathon Mistral"
          date="19 Avril 2025"
        />
      </div>
    </div>
  );
} 