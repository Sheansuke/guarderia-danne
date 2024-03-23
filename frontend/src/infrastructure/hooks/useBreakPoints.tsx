"use client";

import { useEffect, useState } from "react";

export const useBreakPoints = (): {
  isMobile: boolean;
  isDesktop: boolean;
} => {
  const [isMobile, setIsMobile] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const isMobile = width < 768;
      const isDesktop = width >= 768;

      setIsMobile(isMobile);
      setIsDesktop(isDesktop);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return {
    isMobile,
    isDesktop,
  };
};
