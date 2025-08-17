import React from "react";

function GlassyStatCard({
  className,
  statText,
  title,
  description,
}: {
  className?: string;
  statText: string;
  title: string;
  description: string;
}) {
  return (
    <div
      className={`p-8 flex flex-col space-y-5 w-[400px] h-[250px] bg-[#E2E2E21A]/90 bg-opacity-40 rounded-xl border border-foreground/10 backdrop-blur-2xl 

    ${className}`}
    >
      <div className="p-4">
        <span className="text-7xl font-bold text-foreground">{statText}</span>
      </div>

      <div className="flex flex-col items-start justify-center text-left">
        <h3 className="text-lg text-foreground font-semibold">{title}</h3>
        <p className="text-sm text-foreground/70 line-clamp-3">{description}</p>
      </div>
    </div>
  );
}

export default GlassyStatCard;
