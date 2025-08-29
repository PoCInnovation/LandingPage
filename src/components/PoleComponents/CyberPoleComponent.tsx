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
          name="Léandre Ramos"
          role="Responsable IA"
          imageSrc="/conference.png" // Using existing image as placeholder
          imageAlt="Léandre Ramos, Responsable IA"
          onContactClick={handleContactClick}
        />
      </div>

      {/* Col 2: Two Stats Cards stacked */}
      <div className="flex flex-col gap-6">
        <StatsCard
          number="20+"
          title="Projets complétés"
          description="Du reverse engineering de malwares à la création de RAT nos projets couvrent la partie offensive et défensive de la cybersécurité."
        />
        <StatsCard
          number="15+"
          title="Workshops de découverte"
          description="Nos workshops couvrent les fondamentaux de la cybersécurité : forensic, ransomware, reverse engineering, cryptographie et bien plus."
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
