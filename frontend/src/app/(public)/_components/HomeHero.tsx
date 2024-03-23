import { HeroImage } from "@/app/(public)/_components/HeroImage";

export const HomeHero = () => {
  return (
    <div className="bg-green-400 p-4">
      <div className="md:container flex gap-16 md:my-8 my-4">
        {/* // TEXT */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-green-950 md:text-[4rem] text-[3rem] opacity-70 font-bold">Guarderia De Danne</h1>
          <h3 className="text-green-800 md:text-[3rem] text-[2rem] opacity-70 mt-2">¡Donde cada niño encuentra su mundo de juego y aprendizaje!</h3>
          <button className="btn btn-lg bg-green-950 font-bold text-green-100 hover:bg-green-100 hover:text-green-950 border-none rounded-2xl opacity-50 mt-6">Quiero Inscribir a mi hijo</button>
        </div>

        {/* IMAGE */}
        <div className="hidden md:block items-center">
          <HeroImage />
        </div>
      </div>
    </div>
  );
};
