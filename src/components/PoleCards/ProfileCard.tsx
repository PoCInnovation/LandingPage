import React from "react";

type ProfileCardProps = {
  name: string;
  role: string;
  imageSrc: string;
  imageAlt: string;
  onContactClick?: () => void;
};

export default function ProfileCard({ name, role, imageSrc, imageAlt, onContactClick }: ProfileCardProps) {
  return (
    <div className="relative bg-[#E2E2E21A]/70 backdrop-blur-2xl rounded-xl border border-foreground/10 overflow-hidden h-150 w-90">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={imageSrc} 
          alt={imageAlt}
          className="w-full h-full object-cover"
        />
        {/* Gradient noir de bas en haut pour plus de contraste */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
      </div>
      
      {/* Content positioned at bottom */}
      <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-between items-end">
        {/* Left side - Name and Role */}
        <div className="text-white">
          <h3 className="text-lg font-semibold mb-1">{name}</h3>
          <p className="text-sm text-white/80">{role}</p>
        </div>
        
        {/* Right side - Contact Button */}
        <button
          onClick={onContactClick}
          className="px-4 py-2 bg-transparent border border-white text-white rounded-lg hover:bg-white/10 transition-colors text-sm"
        >
          Contact
        </button>
      </div>
    </div>
  );
} 