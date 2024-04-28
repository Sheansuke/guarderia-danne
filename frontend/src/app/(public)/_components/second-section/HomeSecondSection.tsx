import { ClassesCard } from "@/components/molecule/ClassesCard";

export const HomeSecondSection = () => {
  return (
    <div className="p-4 flex flex-col items-center text-[2rem]">
      <h2 className="text-orange-950 font-bold md:text-[2rem] text-[1.8rem] text-opacity-90 text-center">¡Tenemos clases para tu peque!</h2>

      <div className="flex-col flex md:flex-row md:gap-16 gap-10 mt-16">
        <div className="flex gap-8 md:flex-none md:gap-16">
          <ClassesCard backgroundColor="bg-bianca-200" textColor="text-bianca-950" iconSrc="/icons/calculator_icon.svg" alt="icono de calculadora" title="Matematicas" />
          <ClassesCard backgroundColor="bg-gray-200" textColor="text-gray-950" iconSrc="/icons/book_icon.svg" alt="icono de libro" title="Literatura" />
        </div>

        <div className="flex gap-8 md:flex-none md:gap-16">
          <ClassesCard backgroundColor="bg-green-300" textColor="text-green-950" iconSrc="/icons/world_icon.svg" alt="icono de mundo" title="Ingles" />
          <ClassesCard backgroundColor="bg-dandelion-200" textColor="text-dandelion-950" iconSrc="/icons/game_icon.svg" alt="icono de juego" title="¡Mucho más!" />
        </div>
      </div>
    </div>
  );
};
