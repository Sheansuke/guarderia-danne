import clsx from "clsx";
import Image from "next/image";

interface HobbieCardProps {
  src: string;
  alt: string;
  backgroundColor: string;
  titleColor: string;
  descriptionColor: string;
}

export const HobbieCard = ({ src, alt, backgroundColor, titleColor, descriptionColor }: HobbieCardProps) => {
  return (
    <div className={clsx("h-[290px] md:w-[300px] w-full rounded-xl p-4", backgroundColor)}>
      <Image src={src} width={44} height={44} alt={alt} />
      <h3 className={clsx("text-[1.5rem] font-bold text-opacity-70 mt-1", titleColor)}>Manualidades</h3>
      <p className={clsx("mt-1 text-[1.3rem]", descriptionColor)}>
        En este espacio dedicado a las manualidades, nuestros pequeños artistas explorarán su imaginación y destrezas mientras dan vida a sus ideas.
      </p>
    </div>
  );
};
