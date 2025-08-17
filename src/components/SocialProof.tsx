import Image from "next/image";
import React from "react";

function SocialProof() {
  const logos = Array.from({ length: 8 }).fill("/logo_poc.png");

  return (
    <div className="container-custom relative z-10 mt-20 md:mt-40 flex flex-col items-center justify-center text-center">
      <p className="text-md md:text-lg text-muted-foreground max-w-4xl">
        Ils font partie de nos innovations
      </p>

      <div className="w-full max-w-6xl overflow-hidden -mt-3">
        <div className="flex gap-12 items-center">
          {logos.concat(logos).map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-24 h-24 md:w-32 md:h-32 flex items-center justify-center"
            >
              <Image
                src={logo}
                alt={`Logo ${index + 1}`}
                width={96}
                height={96}
                className="object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SocialProof;
