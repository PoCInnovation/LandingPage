"use client";

import Image from "next/image";
import Association from "@/components/Association";
import Footer from "@/components/Footer";
import { Hero } from "@/components/Hero";
import GlassyNavbar from "@/components/Navbar";
import OurPoles from "@/components/OurPoles";
import ScrollReveal from "@/components/ScrollReveal";
import Services from "@/components/Services";
import SocialProof from "@/components/SocialProof";

export default function Home() {
  return (
    <main>
      <section className="relative min-h-screen flex flex-col items-center overflow-hidden bg-background-main">
        <GlassyNavbar />
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute top-0 left-0 md:w-full w-[400vw] overflow-hidden z-[2]">
            <Image
              src="/blue_lines.svg"
              alt=""
              width={1920}
              height={1080}
              className="md:w-full md:h-auto opacity-25"
              priority
            />
          </div>
        </div>
        <div className="absolute bottom-32 md:w-full w-[400vw] left-0 overflow-hidden z-[1]">
          <div className="relative">
            <Image
              src="/red_lines.svg"
              alt=""
              width={1920}
              height={1080}
              className="md:w-full md:h-auto opacity-25 rotate-[180deg]"
              priority
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, #050610 0%, rgba(5, 6, 16, 0.00) 27.4%, rgba(5, 6, 16, 0.00) 61.54%, #050610 100%)",
              }}
            ></div>
          </div>
        </div>
        <Hero />
        <ScrollReveal delay={0.1}>
          <SocialProof />
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <OurPoles />
        </ScrollReveal>
        <Association />
        <Services />
        <ScrollReveal delay={0.1}>
          <Footer />
        </ScrollReveal>
      </section>
    </main>
  );
}
