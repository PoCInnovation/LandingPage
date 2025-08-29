import React from "react";
import ProfileCard from "../PoleCards/ProfileCard";
import StatsCard from "../PoleCards/StatsCard";
import EventImageCard from "../PoleCards/MediumEventCard";
import LargeEventCard from "../PoleCards/LargeEventCard";
import FeaturedProjects, { FeaturedProject } from "./FeaturedProjects";

export default function CyberPoleComponent() {
  const handleContactClick = () => {
    // Handle contact click for Responsable Cyber
    console.log("Contact Responsable Cybersécurité");
  };

  const featuredProjects: FeaturedProject[] = [
    {
      id: "malware-analyzer",
      title: "Malware Analyzer",
      description:
        "Plateforme d'analyse automatisée de malwares avec sandboxing, extraction de signatures et reverse engineering assisté par IA.",
      tools: ["Python", "IDA Pro", "YARA"],
      contributors: [
        "Alex Security",
        "Marie Forensic",
        "Paul Reverse",
        "Julie Defense",
      ],
      heroImage: { src: "/conference.png", alt: "Malware Analyzer hero" },
      repoUrl: "https://github.com/PoCInnovation/malware-analyzer",
    },
    {
      id: "pentest-toolkit",
      title: "Pentest Toolkit",
      description:
        "Suite complète d'outils de pentesting avec modules pour web, réseau, wireless et social engineering.",
      tools: ["Go", "Python", "Metasploit"],
      contributors: ["Thomas Hack", "Emma Pen"],
      heroImage: { src: "/conference.png", alt: "Pentest Toolkit hero" },
      repoUrl: "#",
    },
    {
      id: "soc-platform",
      title: "SOC Platform",
      description:
        "Plateforme SOC avec SIEM intégré, corrélation d'événements et réponse automatisée aux incidents.",
      tools: ["Elastic Stack", "Python", "Kafka"],
      contributors: ["Nicolas Blue", "Sophie Red"],
      heroImage: { src: "/logo_poc.png", alt: "SOC Platform hero" },
      repoUrl: "#",
    },
    {
      id: "crypto-breaker",
      title: "Crypto Breaker",
      description:
        "Outils d'analyse cryptographique pour audit de protocoles, détection de faiblesses et cryptanalyse.",
      tools: ["Rust", "SageMath", "C++"],
      contributors: ["Kevin Crypto", "Laura Math"],
      heroImage: { src: "/conference.png", alt: "Crypto Breaker hero" },
      repoUrl: "#",
    },
  ];

  return (
    <div className="w-full">
      {/* Mobile: single column */}
      <div className="grid grid-cols-1 gap-4 md:hidden px-4">
        <ProfileCard
          name="Responsable Cyber"
          role="Responsable Cybersécurité"
          imageSrc="/conference.png"
          imageAlt="Responsable Cybersécurité"
          onContactClick={handleContactClick}
        />
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
            name="Responsable Cyber"
            role="Responsable Cybersécurité"
            imageSrc="/conference.png"
            imageAlt="Responsable Cybersécurité"
            onContactClick={handleContactClick}
          />
        </div>
        
        {/* Right column with other cards */}
        <div className="flex flex-col gap-4">
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
            name="Responsable Cyber"
            role="Responsable Cybersécurité"
            imageSrc="/conference.png"
            imageAlt="Responsable Cybersécurité"
            onContactClick={handleContactClick}
          />
        </div>
        
        {/* Stats Cards - Column 2 */}
        <div className="col-span-1 grid grid-rows-2 gap-4 2xl:gap-6">
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