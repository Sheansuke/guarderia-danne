import { HeroImage } from "@/app/(public)/_components/first-section/HeroImage";
import { Suspense } from "react";

export const HomeHero = () => {
  return (
    <div className="bg-green-400 p-4 shadow-inner shadow-green-500">
      <div className="md:container flex gap-16 md:my-8 my-4">
        {/* // TEXT */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-green-950 md:text-[4rem] text-[3rem] font-bold text-opacity-90">Guarderia De Danne</h1>
          <h2 className="text-green-800 md:text-[3rem] text-[2rem] text-opacity-90 mt-2">¡Donde cada niño encuentra su mundo de juego y aprendizaje!</h2>
          <button className="btn btn-lg bg-green-950 font-bold text-green-100 hover:bg-green-100 hover:text-green-950 border-none rounded-2xl bg-opacity-90 mt-6">Quiero Inscribir a mi hijo</button>
        </div>

        {/* IMAGE */}
        <div className="hidden md:block items-center">
          <HeroImage />
        </div>
      </div>
    </div>
  );
};
