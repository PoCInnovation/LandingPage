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
    <div>
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
            description="Des modèles d'IA multimodal à la détection de deepfakes. Ces projets mêlent recherche appliquée et innovation technique."
          />
          <StatsCard
            number="15+"
            title="Workshops de découverte"
            description="Des workshops couvrant toutes les notions fondamentales : IA générative, traitement d'image, NLP, apprentissage supervisé et non-supervisé..."
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

      <FeaturedProjects projects={featuredProjects} />
    </div>
  );
} 