"use client";

import { useBreakPoints } from "@/infrastructure/hooks/useBreakPoints";
import dynamic from "next/dynamic";

const Image = dynamic(() => import("next/image"));
export const HeroImage = () => {
  const { isDesktop } = useBreakPoints();
  return <>{isDesktop ? <Image  priority src="/svg/HeroImage.svg" width={500} height={500} alt="" /> : null}</>;
};
