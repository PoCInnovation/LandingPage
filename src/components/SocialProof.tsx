import React from "react";
import FadeInImage from "./FadeInImage";

function SocialProof() {
  const logos = Array.from({ length: 4 }).fill("/logo_poc.png");

  return (
    <div className="container-custom relative z-10 mt-20 md:mt-40 flex flex-col items-center justify-center text-center px-4">
      <p className="text-md md:text-lg text-muted-foreground max-w-4xl mb-7">
        Ils font partie de nos innovations
      </p>

      <div className="w-full max-w-7xl">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-6 md:gap-8 lg:gap-10 items-center justify-items-center">
          {logos.concat(logos).map((logo, index) => (
            <div
              key={index}
              className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 flex items-center justify-center"
            >
              <FadeInImage
                src={logo as string}
                alt={`Logo ${index + 1}`}
                width={112}
                height={112}
                className="object-contain opacity-70 hover:opacity-100 transition-opacity duration-300 w-full h-full"
                fallbackHeight={112}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SocialProof;
