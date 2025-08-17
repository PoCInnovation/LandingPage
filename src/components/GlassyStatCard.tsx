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
      className={`
        p-4 sm:p-6 lg:p-8 
        flex flex-col 
        space-y-3 sm:space-y-4 lg:space-y-5 
        w-full 
        h-[200px] sm:h-[220px] lg:h-[250px]
        bg-[#E2E2E21A]/80 
        rounded-xl 
        border border-foreground/10 
        backdrop-blur-2xl
        transition-all duration-300
        hover:bg-opacity-90
        ${className}
      `}
    >
      <div className="p-2 sm:p-3 lg:p-4">
        <span className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground opacity-100">
          {statText}
        </span>
      </div>

      <div className="flex flex-col items-start justify-center text-left flex-1">
        <h3 className="text-base sm:text-lg font-semibold text-foreground mb-1 sm:mb-2">
          {title}
        </h3>
        <p className="text-xs text-foreground/70 line-clamp-2 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}

export default GlassyStatCard;
