import React from "react";
import ProfileCard from "../PoleCards/ProfileCard";
import StatsCard from "../PoleCards/StatsCard";
import EventImageCard from "../PoleCards/MediumEventCard";
import LargeEventCard from "../PoleCards/LargeEventCard";
import FeaturedProjects, { FeaturedProject } from "./FeaturedProjects";

export default function P2PPoleComponent() {
  const handleContactClick = () => {
    // Handle contact click for Lucas Leclerc
    console.log("Contact Lucas Leclerc");
  };

  const featuredProjects: FeaturedProject[] = [
    {
      id: "defi-protocol",
      title: "DeFi Protocol",
      description:
        "Protocole de finance décentralisée pour le lending et borrowing avec gestion automatisée des liquidités et taux d'intérêt dynamiques.",
      tools: ["Solidity", "Hardhat", "ethers.js"],
      contributors: [
        "Lucas Leclerc",
        "Marie Dubois",
        "Thomas Bernard",
        "Sophie Martin",
      ],
      heroImage: { src: "/conference.png", alt: "DeFi Protocol hero" },
      repoUrl: "https://github.com/PoCInnovation/defi-protocol",
    },
    {
      id: "dao-toolkit",
      title: "DAO Toolkit",
      description:
        "Suite d'outils pour créer et gérer des DAOs avec gouvernance on-chain, trésorerie et système de propositions.",
      tools: ["Solidity", "React", "Web3.js"],
      contributors: ["Alex Chen", "Julie Moreau"],
      heroImage: { src: "/conference.png", alt: "DAO Toolkit hero" },
      repoUrl: "#",
    },
    {
      id: "nft-marketplace",
      title: "NFT Marketplace",
      description:
        "Marketplace décentralisée pour NFTs avec support multi-chaînes, royalties automatiques et enchères.",
      tools: ["Solidity", "Next.js", "IPFS"],
      contributors: ["Pierre Durand", "Emma Wilson"],
      heroImage: { src: "/logo_poc.png", alt: "NFT Marketplace hero" },
      repoUrl: "#",
    },
    {
      id: "bridge-protocol",
      title: "Bridge Protocol",
      description:
        "Bridge cross-chain pour transfert d'assets entre Ethereum et Layer 2s avec validation optimiste.",
      tools: ["Solidity", "Rust", "TypeScript"],
      contributors: ["Kevin Liu", "Sarah Johnson"],
      heroImage: { src: "/conference.png", alt: "Bridge Protocol hero" },
      repoUrl: "#",
    },
  ];

  return (
    <div className="w-full">
      {/* Mobile: single column */}
      <div className="grid grid-cols-1 gap-4 md:hidden px-4">
        <ProfileCard
          name="Lucas Leclerc"
          role="Responsable Blockchain"
          imageSrc="/conference.png"
          imageAlt="Lucas Leclerc, Responsable Blockchain"
          onContactClick={handleContactClick}
        />
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
        <EventImageCard
          imageSrc="/conference.png"
          imageAlt="Hackathon ETHGlobal Cannes"
          title="Hackathon ETHGlobal Cannes"
          date="4 Juillet 2025"
        />
        <EventImageCard
          imageSrc="/conference.png"
          imageAlt="Hackathon Haks"
          title="Hackathon Haks"
          date="12 Mai 2023"
        />
        <LargeEventCard
          imageSrc="/conference.png"
          imageAlt="Salon Krypto Tour Lyon"
          title="Salon Krypto Tour Lyon"
          date="11 octobre 2024"
        />
      </div>
      
      {/* Medium screens (md to xl): 2 columns layout using full width */}
      <div className="hidden md:grid md:grid-cols-2 xl:hidden gap-4 px-4 auto-rows-auto">
        {/* Profile Card spans 2 rows */}
        <div className="row-span-2">
          <ProfileCard
            name="Lucas Leclerc"
            role="Responsable Blockchain"
            imageSrc="/conference.png"
            imageAlt="Lucas Leclerc, Responsable Blockchain"
            onContactClick={handleContactClick}
          />
        </div>
        
        {/* Right column with other cards */}
        <div className="flex flex-col gap-4">
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
        
        {/* Event Cards in bottom row */}
        <EventImageCard
          imageSrc="/conference.png"
          imageAlt="Hackathon ETHGlobal Cannes"
          title="Hackathon ETHGlobal Cannes"
          date="4 Juillet 2025"
        />
        <EventImageCard
          imageSrc="/conference.png"
          imageAlt="Hackathon Haks"
          title="Hackathon Haks"
          date="12 Mai 2023"
        />
        
        {/* Large Event Card spans full width */}
        <div className="col-span-2">
          <LargeEventCard
            imageSrc="/conference.png"
            imageAlt="Salon Krypto Tour Lyon"
            title="Salon Krypto Tour Lyon"
            date="11 octobre 2024"
          />
        </div>
      </div>
      
      {/* Large screens (xl and above): 4 equal columns using full viewport width */}
      <div className="hidden xl:grid xl:grid-cols-4 gap-4 2xl:gap-6 px-4 2xl:px-8">
        {/* Profile Card - Column 1 */}
        <div className="col-span-1">
          <ProfileCard
            name="Lucas Leclerc"
            role="Responsable Blockchain"
            imageSrc="/conference.png"
            imageAlt="Lucas Leclerc, Responsable Blockchain"
            onContactClick={handleContactClick}
          />
        </div>
        
        {/* Stats Cards - Column 2 */}
        <div className="col-span-1 grid grid-rows-2 gap-4 2xl:gap-6">
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
        
        {/* Event Cards - Column 3 */}
        <div className="col-span-1 grid grid-rows-2 gap-4 2xl:gap-6">
          <EventImageCard
            imageSrc="/conference.png"
            imageAlt="Hackathon ETHGlobal Cannes"
            title="Hackathon ETHGlobal Cannes"
            date="4 Juillet 2025"
          />
          <EventImageCard
            imageSrc="/conference.png"
            imageAlt="Hackathon Haks"
            title="Hackathon Haks"
            date="12 Mai 2023"
          />
        </div>
        
        {/* Large Event Card - Column 4 */}
        <div className="col-span-1">
          <LargeEventCard
            imageSrc="/conference.png"
            imageAlt="Salon Krypto Tour Lyon"
            title="Salon Krypto Tour Lyon"
            date="11 octobre 2024"
          />
        </div>
      </div>
      

      <div className="w-full px-4">
        <FeaturedProjects projects={featuredProjects} />
      </div>
    </div>
  );
}