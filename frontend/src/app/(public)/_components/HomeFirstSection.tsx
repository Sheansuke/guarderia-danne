import Image from "next/image";

export const HomeFirstSection = () => {
  return (
    <div >
      <Image priority src={"/shapes/HeaderWave.svg"} alt={"Hola"} width={100} height={100} className="w-full" />
    </div>
  );
};
