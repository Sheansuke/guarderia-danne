import Image from "next/image";

export const HomeFirstSection = () => {
  return (
    <div className="">
      <Image priority src={"/shapes/HeaderWave.svg"} alt={"Hola"} width="0" height="0" className="w-full" />
    </div>
  );
};
