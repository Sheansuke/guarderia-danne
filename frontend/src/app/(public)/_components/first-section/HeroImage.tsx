"use client";
import { useBreakPoints } from "@/infrastructure/hooks/useBreakPoints";
import Image from "next/image";

export const HeroImage = () => {
  const { isMobile } = useBreakPoints();
  return <>{isMobile ? null : <Image className="hero-image-mask " priority src="/images/HeroImage_optimized.webp" width={500} height={500} alt="Hero Logo" />}</>;
};
