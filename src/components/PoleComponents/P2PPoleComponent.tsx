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
          name="Lucas Leclerc"
          role="Responsable Blockchain"
          imageSrc="/conference.png" // Using existing image as placeholder
          imageAlt="Lucas Leclerc, Responsable Blockchain"
          onContactClick={handleContactClick}
        />
      </div>

      {/* Col 2: Two Stats Cards stacked */}
      <div className="flex flex-col gap-6">
        <StatsCard
          number="20+"
          title="Projets complétés"
          description="Nos membres développent des dApps open-source : protocoles DeFi, crowdfunding, outils DAO ou stockage décentralisé."
        />
        <StatsCard
          number="10+"
          title="Workshops de découverte"
          description="Des workshops couvrant toutes les bases : Ethereum, smart contracts en Solidity, gestion de tokens, DAOs, sécurité et interactions on-chain."
        />
      </div>

      {/* Col 3: Two Medium Event Cards stacked */}
      <div className="flex flex-col gap-6">
        <EventImageCard
          imageSrc="/conference.png" // Using existing image as placeholder
          imageAlt="Hackathon ETHGlobal Cannes"
          title="Hackathon ETHGlobal Cannes"
          date="4 Juillet 2025"
        />
        <EventImageCard
          imageSrc="/conference.png" // Using existing image as placeholder
          imageAlt="Hackathon Haks"
          title="Hackathon Haks"
          date="12 Mai 2023"
        />
      </div>

      {/* Col 4: Large Event Card spanning two rows */}
      <div className="xl:row-span-2">
        <LargeEventCard
          imageSrc="/conference.png" // Using existing image as placeholder
          imageAlt="Salon Krypto Tour Lyon"
          title="Salon Krypto Tour Lyon"
          date="11 octobre 2024"
        />
      </div>
    </div>
  );
} 