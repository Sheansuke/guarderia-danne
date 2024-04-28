import { HobbieCard } from "@/components/molecule/HobbieCard";
import Image from "next/image";

export const HomeFirstSection = () => {
  return (
    <div>
      <Image priority src={"/shapes/HeaderWave.svg"} alt="Home Wave Shape" width={100} height={100} className="w-full" />

      <div className="md:flex justify-around mt-16 items-center md:items-start w-full md:container">
        <article className="md:w-1/3 w-full text-center">
          <HomeFirstSectionArticleOne />
        </article>
        <article className="flex-col flex gap-4 items-center mt-16 md:mt-0 ">
          <HomeFirstSectionArticleTwo />
        </article>
      </div>
    </div>
  );
};

export const HomeFirstSectionArticleOne = () => {
  return (
    <div className="p-4 md:p-0">
      <h2 className="md:text-start text-center text-orange-950 font-bold text-[2rem] text-opacity-90 mb-2">Cuidar niños es nuestra pasión.</h2>
      <p className="text-orange-800 font-bold text-opacity-90 text-[1.3rem] md:text-start text-center">
        Cuidar niños es más que una tarea; es una vocación que nos invita a ser guardianes de su bienestar, mentores de su crecimiento y protectores de sus sueños. En cada abrazo, en cada sonrisa que
        florece gracias a nuestro cuidado, encontramos la razón más poderosa para dedicar nuestras vidas a este noble propósito.
      </p>
    </div>
  );
};

export const HomeFirstSectionArticleTwo = () => {
  return (
    <div className="flex flex-col gap-8 p-8 md:p-0 ">
      <div className="flex md:flex-row flex-col gap-8">
        <HobbieCard src="/icons/manualidades_icon.svg" alt="icono de manualidades" backgroundColor="bg-bianca-200" titleColor="text-bianca-950" descriptionColor="text-bianca-800" />
        <HobbieCard src="/icons/juegos_icon.svg" alt="icono de actividades" backgroundColor="bg-gray-200" titleColor="text-gray-950" descriptionColor="text-gray-800" />
      </div>

      <div className="flex md:flex-row flex-col gap-8">
        <HobbieCard src="/icons/actividades_icon.svg" alt="icono de juegos" backgroundColor="bg-green-300" titleColor="text-green-950" descriptionColor="text-green-800" />
        <HobbieCard src="/icons/socializacion_icon.svg" alt="icono de socializacion" backgroundColor="bg-dandelion-200" titleColor="text-dandelion-950" descriptionColor="text-dandelion-800" />
      </div>
    </div>
  );
};
