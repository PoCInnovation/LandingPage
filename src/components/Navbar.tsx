"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import PoCButton from "./PocButton";

function GlassyNavbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 flex bg-[#E2E2E21A]/80 border-foreground/10 rounded-4xl backdrop-blur-3xl shadow-lg pl-5 pr-2 items-center space-x-8 transition-transform duration-300 h-16 ${isVisible ? "translate-y-0" : "-translate-y-[calc(100%+2rem)]"}`}
    >
      <Image
        src="/logo_poc.png"
        alt="Logo PoC"
        width={80}
        height={80}
        className="md:pl-2 object-contain w-12 h-12 sm:w-14 sm:h-14 opacity-0 animate-[fadeIn_0.3s_ease-in-out_forwards]"
        priority
      />
      <div className="flex items-center space-x-6 justify-center">
        <Link href="/" className="cursor-pointer group">
          <button className="cursor-pointer">
            <span className="text-muted-foreground group-hover:text-white transition-colors duration-200 text-sm md:text-lg font-medium">
              Acceuil
            </span>
          </button>
        </Link>
        <Link href="/innovation" className="cursor-pointer group">
          <button className="cursor-pointer">
            <span className="text-muted-foreground group-hover:text-white transition-colors duration-200 text-sm md:text-lg font-medium">
              Innovation
            </span>
          </button>
        </Link>
        <PoCButton
          className="cursor-pointer"
          onClick={() => {
            window.location.href = "mailto:contact@poc-innovation.fr";
          }}
        >
          <span className="text-black text-sm md:text-base font-medium">Contact</span>
        </PoCButton>
      </div>
    </div>
  );
}

export default GlassyNavbar;
