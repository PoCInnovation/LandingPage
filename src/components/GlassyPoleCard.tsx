import React from "react";

function GlassyPoleCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div
      className="
      bg-[#E2E2E21A]/90 bg-opacity-40
      rounded-xl
      border
      border-foreground/10
      flex
      items-center
      justify-between
      backdrop-blur-2xl
      w-full
      min-h-[85px]
      max-w-[400px]
      px-3 sm:px-4
      py-2
      mx-auto
      transition-all duration-300
      hover:bg-opacity-60
    "
    >
      <div className="flex-shrink-0">{icon}</div>
      <div className="flex-1 flex flex-col px-3 sm:px-4 justify-center text-left min-w-0">
        <h3 className="text-sm sm:text-md text-foreground font-semibold truncate">
          {title}
        </h3>
        <p className="text-xs text-foreground/70 line-clamp-1">{description}</p>
      </div>
    </div>
  );
}
export default GlassyPoleCard;
