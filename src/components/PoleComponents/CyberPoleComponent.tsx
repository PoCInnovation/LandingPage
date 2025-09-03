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
      id: "whitecomet-research",
      title: "Whitecomet-Research",
      description:
        "Whitecomet-Research est un projet de recherche sur les logiciels malveillants. L'objectif de ce projet est d'étudier différents types de techniques permettant de contourner les antivirus, comme les programmes polymorphes et métamorphiques.",
      tools: ["C", "Polymorphism", "Metamorphism"],
      contributors: [
        "Edouard Sengeissen",
        "Loïc Titren",
        "Roman Gascoin",
      ],
      heroImage: { src: "/cyber/whitecomet-research.png", alt: "WhiteComet Research hero" },
      repoUrl: "https://github.com/PoCInnovation/Whitecomet-Research",
    },
    {
      id: "smartshark",
      title: "Smartshark",
      description:
        "SmartShark est un système de détection d'intrusion (IDS) basé sur l'apprentissage automatique pour reconnaître des attaques DDoS (Distributed Denial-of-Service) qui peuvent paralyser un réseau et MITM (Man-In-The-Middle) qui permet d’espionner votre connexion ainsi que de voler des données importantes, et à y faire face plus efficacement.",
      tools: ["TensorFlow", "Python", "tshark", "Flask"],
      contributors: ["Valentin De Matos", "Quentin Fringhian"],
      heroImage: { src: "/cyber/smartshark.png", alt: "Smartshark hero" },
      repoUrl: "https://github.com/PoCInnovation/SmartShark",
    },
    {
      id: "reverse-malware",
      title: "Reverse-Malware",
      description:
        "Reverse-Malware a pour objectif d'analyser, de procéder à un reverse engineering et de déjouer l'obfuscation d'un virus. Il rédige ensuite un rapport de recherche présentant les méthodes d'analyse et les découvertes concernant ce virus.",
      tools: ["JS", "Esprima", "Escodegen"],
      contributors: ["Georges Kypriadis", "Thomas Pommier", "Tom Sancho", "Yanis Boumedad", "Lenny Vongphouthone"],
      heroImage: { src: "/cyber/reverse-malware.png", alt: "Reverse Malware hero" },
      repoUrl: "https://github.com/PoCInnovation/Reverse-Malware",
    },
    {
      id: "sharkticon",
      title: "Sharkticon",
      description:
        "Sharkticon est un système de détection d'intrusion utilisant un système de détection d'anomalies et d'apprentissage automatique qui le rend capable de détecter des attaques qu'il n'a jamais vues auparavant. ",
      tools: ["TensorFlow", "PyShark", "Python"],
      contributors: ["Mikaël Vallenet", "Evan Sabre"],
      heroImage: { src: "/cyber/sharkticon.png", alt: "Sharkticon hero" },
      repoUrl: "https://github.com/PoCInnovation/Sharkticon",
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
          imageSrc="/cyber/ec2.jpg"
          imageAlt="European Cyber Cup"
          title="European Cyber Cup"
          date="8 septembre 2021"
        />
        <EventImageCard
          imageSrc="/cyber/incyber.png"
          imageAlt="Salon InCyber"
          title="Salon InCyber"
          date="1 Avril 2025"
        />
        <LargeEventCard
          imageSrc="/cyber/pathwar.png"
          imageAlt="CTF Pathwar"
          title="CTF Pathwar"
          date="25 Mai 2023"
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
          imageSrc="/cyber/incyber.png"
          imageAlt="Salon InCyber"
          title="Salon InCyber"
          date="1 Avril 2025"
        />
        <EventImageCard
          imageSrc="/cyber/ec2.jpg"
          imageAlt="European Cyber Cup"
          title="European Cyber Cup"
          date="8 septembre 2021"
        />
        
        {/* Large Event Card spans full width */}
        <div className="col-span-2">
          <LargeEventCard
            imageSrc="/cyber/pathwar.png"
            imageAlt="CTF Pathwar"
            title="CTF Pathwar"
            date="25 Mai 2023"
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
            imageSrc="/cyber/ec2.jpg"
            imageAlt="European Cyber Cup"
            title="European Cyber Cup"
            date="8 septembre 2021"
          />
          <EventImageCard
            imageSrc="/cyber/incyber.png"
            imageAlt="Salon InCyber"
            title="Salon InCyber"
            date="1 Avril 2025"
          />
        </div>
        
        {/* Large Event Card - Column 4 */}
        <div className="col-span-1">
          <LargeEventCard
            imageSrc="/cyber/pathwar.png"
            imageAlt="CTF Pathwar"
            title="CTF Pathwar"
            date="25 Mai 2023"
          />
        </div>
      </div>
      

      <div className="w-full px-4">
        <FeaturedProjects projects={featuredProjects} />
      </div>
    </div>
  );
}