export default function GlassyButton({
  children,
  onClick,
  className,
}: {
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
}) {
  return (
    <button
      onClick={onClick}
      className={`
        relative px-6 py-4 text-white font-medium text-md
        bg-[#E2E2E21A]/90 bg-opacity-40 
        rounded-3xl 
        backdrop-blur-2xl 
        transition-all duration-300 ease-in-out 
        hover:bg-opacity-50 hover:border-opacity-20 hover:-translate-y-0.5 
        hover:shadow-2xl hover:shadow-black/20
        active:translate-y-0 
        shadow-xl shadow-black/10
        tracking-wide
        ${className}
      `}
    >
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/10 to-white/5 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      <span className="relative z-10">{children}</span>
    </button>
  );
}
