import Image from "next/image";

export const HomeFirstSection = () => {
  return (
    <div>
      <Image priority src={"/shapes/HeaderWave.svg"} alt="Home Wave Shape" width={100} height={100} className="w-full" />

      <div className="md:flex justify-around mt-16 items-center md:items-start">
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
      <h2 className="md:text-start text-center text-orange-950 font-bold text-[2rem] text-opacity-70 mb-2">Cuidar niños es nuestra pasión.</h2>
      <p className="text-orange-800 font-bold text-opacity-70 text-[1.3rem] md:text-start text-center">
        Cuidar niños es más que una tarea; es una vocación que nos invita a ser guardianes de su bienestar, mentores de su crecimiento y protectores de sus sueños. En cada abrazo, en cada sonrisa que
        florece gracias a nuestro cuidado, encontramos la razón más poderosa para dedicar nuestras vidas a este noble propósito.
      </p>
    </div>
  );
};

export const HomeFirstSectionArticleTwo = () => {
  return (
    <>
      <div className="flex md:flex-row flex-col gap-4">
        {/* CARD 1 */}
        <div className="h-[290px] md:w-[300px] w-96  rounded-xl bg-bianca-200 p-4">
          <Image src="/icons/manualidades_icon.svg" width={44} height={44} alt={"icono de manualidades"} />
          <h3 className="text-[1.5rem] font-bold text-bianca-950 text-opacity-70 mt-1">Manualidades</h3>
          <p className="mt-1 text-bianca-800 text-[1.3rem]">
            En este espacio dedicado a las manualidades, nuestros pequeños artistas explorarán su imaginación y destrezas mientras dan vida a sus ideas.
          </p>
        </div>

        {/* CARD 2 */}
        <div className="h-[290px] md:w-[300px] w-96 rounded-xl bg-gray-200 p-4">
          <Image src="/icons/juegos_icon.svg" width={44} height={44} alt={"icono de actividades"} />
          <h3 className="text-[1.5rem] font-bold text-gray-950 text-opacity-70 mt-1">Juegos</h3>
          <p className="mt-1 text-gray-800 text-[1.3rem]">
            En este espacio dedicado a las manualidades, nuestros pequeños artistas explorarán su imaginación y destrezas mientras dan vida a sus ideas.
          </p>
        </div>
      </div>

      <div className="flex md:flex-row flex-col gap-4">
        {/* CARD 3 */}
        <div className="h-[290px] md:w-[300px] w-96  rounded-xl bg-green-300 p-4">
          <Image src="/icons/actividades_icon.svg" width={44} height={44} alt={"icono de actividades"} />
          <h3 className="text-[1.5rem] font-bold text-green-950 text-opacity-70 mt-1">Actividades</h3>
          <p className="mt-1 text-green-800 text-[1.3rem]">
            En este espacio dedicado a las manualidades, nuestros pequeños artistas explorarán su imaginación y destrezas mientras dan vida a sus ideas.
          </p>
        </div>

        {/* CARD 4 */}
        <div className="h-[290px] md:w-[300px] w-96 rounded-xl bg-dandelion-200 p-4">
          <Image src="/icons/socializacion_icon.svg" width={44} height={44} alt={"icono de actividades"} />
          <h3 className="text-[1.5rem] font-bold text-dandelion-950 text-opacity-70 mt-1">Socializacion</h3>
          <p className="text-dandelion-800 text-[1.3rem] mt-1">
            En este espacio dedicado a las manualidades, nuestros pequeños artistas explorarán su imaginación y destrezas mientras dan vida a sus ideas.
          </p>
        </div>
      </div>
    </>
  );
};
