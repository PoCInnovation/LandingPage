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
      {/* RESPONSIVE GRID LAYOUT */}
      
      {/* Mobile to XL: 3 columns x 2 rows layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 2xl:hidden gap-4 sm:gap-6">
        {/* Row 1 */}
        <div className="lg:col-start-1 lg:row-start-1">
          <ProfileCard
            name="Léandre Ramos"
            role="Responsable IA"
            imageSrc="/conference.png"
            imageAlt="Léandre Ramos, Responsable IA"
            onContactClick={handleContactClick}
          />
        </div>
        
        <div className="lg:col-start-2 lg:row-start-1">
          <StatsCard
            number="20+"
            title="Projets complétés"
            description="Des modèles d'IA multimodal à la détection de deepfakes. Ces projets mêlent recherche appliquée et innovation technique."
          />
        </div>
        
        <div className="lg:col-start-3 lg:row-start-1">
          <EventImageCard
            imageSrc="/conference.png"
            imageAlt="Hackathon Google"
            title="Hackathon Google"
            date="5 Juillet 2025"
          />
        </div>
        
        {/* Row 2 */}
        <div className="lg:col-start-1 lg:row-start-2">
          <LargeEventCard
            imageSrc="/conference.png"
            imageAlt="Hackathon Mistral"
            title="Hackathon Mistral"
            date="19 Avril 2025"
          />
        </div>
        
        <div className="lg:col-start-2 lg:row-start-2">
          <StatsCard
            number="15+"
            title="Workshops de découverte"
            description="Des workshops couvrant toutes les notions fondamentales : IA générative, traitement d'image, NLP, apprentissage supervisé et non-supervisé..."
          />
        </div>
        
        <div className="lg:col-start-3 lg:row-start-2">
          <EventImageCard
            imageSrc="/conference.png"
            imageAlt="Salon IA ministère de l'intérieur"
            title="Salon IA ministère de l'intérieur"
            date="8 Octobre 2024"
          />
        </div>
      </div>
      
      {/* 2XL and above: 4x2 grid layout */}
      <div className="hidden 2xl:grid 2xl:grid-cols-4 2xl:grid-rows-2 gap-6">
          {/* Profile Card - spans 2 rows */}
          <div className="2xl:row-span-2 2xl:col-start-1 2xl:row-start-1">
            <ProfileCard
              name="Léandre Ramos"
              role="Responsable IA"
              imageSrc="/conference.png"
              imageAlt="Léandre Ramos, Responsable IA"
              onContactClick={handleContactClick}
            />
          </div>

          {/* Stats Cards Column */}
          <div className="2xl:col-start-2 2xl:row-start-1">
            <StatsCard
              number="20+"
              title="Projets complétés"
              description="Des modèles d'IA multimodal à la détection de deepfakes. Ces projets mêlent recherche appliquée et innovation technique."
            />
          </div>
          <div className="2xl:col-start-2 2xl:row-start-2">
            <StatsCard
              number="15+"
              title="Workshops de découverte"
              description="Des workshops couvrant toutes les notions fondamentales : IA générative, traitement d'image, NLP, apprentissage supervisé et non-supervisé..."
            />
          </div>

          {/* Event Cards Column */}
          <div className="2xl:col-start-3 2xl:row-start-1">
            <EventImageCard
              imageSrc="/conference.png"
              imageAlt="Hackathon Google"
              title="Hackathon Google"
              date="5 Juillet 2025"
            />
          </div>
          <div className="2xl:col-start-3 2xl:row-start-2">
            <EventImageCard
              imageSrc="/conference.png"
              imageAlt="Salon IA ministère de l'intérieur"
              title="Salon IA ministère de l'intérieur"
              date="8 Octobre 2024"
            />
          </div>

          {/* Large Event Card - spans 2 rows */}
          <div className="2xl:row-span-2 2xl:col-start-4 2xl:row-start-1">
            <LargeEventCard
              imageSrc="/conference.png"
              imageAlt="Hackathon Mistral"
              title="Hackathon Mistral"
              date="19 Avril 2025"
            />
          </div>
        </div>

      <FeaturedProjects projects={featuredProjects} />
    </div>
  );
} 
