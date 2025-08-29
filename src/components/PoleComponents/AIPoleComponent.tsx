import React from "react";
import ProfileCard from "../PoleCards/ProfileCard";
import StatsCard from "../PoleCards/StatsCard";
import EventImageCard from "../PoleCards/MediumEventCard";
import LargeEventCard from "../PoleCards/LargeEventCard";
import FeaturedProjects, { FeaturedProject } from "./FeaturedProjects";

export default function AIPoleComponent() {
  const handleContactClick = () => {
    // Handle contact click for Léandre Ramos
    console.log("Contact Léandre Ramos");
  };

  const featuredProjects: FeaturedProject[] = [
    {
      id: "cyrebro",
      title: "Cyrebro",
      description:
        "Assistant de pré-consultation médicale basé sur l'IA, développé avec l'Institut de l’Audition et l’Institut Pasteur. Prise d'information conversationnelle, résumé automatisé et validation de cohérence médicale.",
      tools: ["Python", "Transformers", "MedGamma"],
      contributors: [
        "Léandre Ramos",
        "Sacha Henneveux",
        "Antoine Béa",
        "Manmohit-Singh Lal",
      ],
      heroImage: { src: "/conference.png", alt: "Cyrebro hero" },
      repoUrl: "https://github.com/PoCInnovation/cyrebro",
    },
    {
      id: "deepvision",
      title: "DeepVision",
      description:
        "Pipeline de classification et détection d'images en production avec optimisation quantization-aware et suivi des métriques.",
      tools: ["PyTorch", "FastAPI", "ONNX Runtime"],
      contributors: ["Alice Martin", "Julien Caron"],
      heroImage: { src: "/conference.png", alt: "DeepVision hero" },
      repoUrl: "#",
    },
    {
      id: "textgen-studio",
      title: "TextGen Studio",
      description:
        "Studio d'expérimentation pour l'IA générative: prompts, RAG, outils et évaluation automatique de la qualité des réponses.",
      tools: ["TypeScript", "Next.js", "LangChain"],
      contributors: ["Camille Dupont", "Théo Garnier"],
      heroImage: { src: "/logo_poc.png", alt: "TextGen Studio hero" },
      repoUrl: "#",
    },
    {
      id: "audio-lab",
      title: "AudioLab",
      description:
        "Analyse audio et diarisation de locuteurs avec segmentation automatique et restitution en timeline interactive.",
      tools: ["Python", "Whisper", "NumPy"],
      contributors: ["Nina Bernard", "Paul Richard"],
      heroImage: { src: "/conference.png", alt: "AudioLab hero" },
      repoUrl: "#",
    },
  ];

  return (
    <div className="w-full">
      {/* Mobile: single column */}
      <div className="grid grid-cols-1 gap-4 md:hidden px-4">
        <ProfileCard
          name="Léandre Ramos"
          role="Responsable IA"
          imageSrc="/conference.png"
          imageAlt="Léandre Ramos, Responsable IA"
          onContactClick={handleContactClick}
        />
        <StatsCard
          number="20+"
          title="Projets complétés"
          description="Des modèles d'IA multimodal à la détection de deepfakes. Ces projets mêlent recherche appliquée et innovation technique."
        />
        <StatsCard
          number="15+"
          title="Workshops de découverte"
          description="Des workshops couvrant toutes les notions fondamentales : IA générative, traitement d'image, NLP, apprentissage supervisé et non-supervisé..."
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
            name="Léandre Ramos"
            role="Responsable IA"
            imageSrc="/conference.png"
            imageAlt="Léandre Ramos, Responsable IA"
            onContactClick={handleContactClick}
          />
        </div>
        
        {/* Right column with other cards */}
        <div className="flex flex-col gap-4">
          <StatsCard
            number="20+"
            title="Projets complétés"
            description="Des modèles d'IA multimodal à la détection de deepfakes. Ces projets mêlent recherche appliquée et innovation technique."
          />
          <StatsCard
            number="15+"
            title="Workshops de découverte"
            description="Des workshops couvrant toutes les notions fondamentales : IA générative, traitement d'image, NLP, apprentissage supervisé et non-supervisé..."
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
            name="Léandre Ramos"
            role="Responsable IA"
            imageSrc="/conference.png"
            imageAlt="Léandre Ramos, Responsable IA"
            onContactClick={handleContactClick}
          />
        </div>
        
        {/* Stats Cards - Column 2 */}
        <div className="col-span-1 grid grid-rows-2 gap-4 2xl:gap-6">
          <StatsCard
            number="20+"
            title="Projets complétés"
            description="Des modèles d'IA multimodal à la détection de deepfakes. Ces projets mêlent recherche appliquée et innovation technique."
          />
          <StatsCard
            number="15+"
            title="Workshops de découverte"
            description="Des workshops couvrant toutes les notions fondamentales : IA générative, traitement d'image, NLP, apprentissage supervisé et non-supervisé..."
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
      

      <div className="max-w-7xl mx-auto">
        <FeaturedProjects projects={featuredProjects} />
      </div>
    </div>
  );
} 
