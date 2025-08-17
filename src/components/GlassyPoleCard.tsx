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
    w-[400px]
    h-[85px]
    px-4
    py-2
    "
    >
      <div>{icon}</div>
      <div className="flex-1 flex flex-col px-4 justify-center text-left">
        <h3 className="text-md text-foreground font-semibold">{title}</h3>
        <p className="text-xs text-foreground/70 line-clamp-1">{description}</p>
      </div>
    </div>
  );
}

export default GlassyPoleCard;
