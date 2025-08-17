"use client";

import type { ImageProps } from "next/image";
import Image from "next/image";
import { useState } from "react";

type FadeInImageProps = {
  fallbackHeight?: number;
} & Omit<ImageProps, "onLoad">;

export default function FadeInImage({
  fallbackHeight,
  ...props
}: FadeInImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div
      className="relative overflow-hidden"
      style={{ minHeight: fallbackHeight }}
    >
      <Image
        {...props}
        className={`transition-opacity duration-500 ease-in-out ${
          isLoaded ? "opacity-100" : "opacity-0"
        } ${props.className || ""}`}
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  );
}
