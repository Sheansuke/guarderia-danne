"use client";
import { useBreakPoints } from "@/infrastructure/hooks/useBreakPoints";
import Image from "next/image";

export const HeroImage = () => {
  const { isMobile } = useBreakPoints();
  return <>{isMobile ? null : <Image className="hero-image-mask w-full h-full" loading="eager" rel="preconnect" priority src="/svg/HeroImage.svg" width={500} height={500} alt="Hero Logo" />}</>;
};
