import clsx from "clsx";
import Image from "next/image";

interface ClassesCardProps {
  backgroundColor: string;
  textColor: string;
  iconSrc: string;
  alt: string;
  title: string;
}

export const ClassesCard = ({ backgroundColor, iconSrc, alt, title, textColor }: ClassesCardProps) => {
  return (
    <div className={clsx("h-36 w-36 rounded-xl flex flex-col justify-center items-center gap-2", backgroundColor)}>
      <Image src={iconSrc} width={44} height={44} alt={alt} />
      <p className={clsx("font-bold text-xl", textColor)}>{title}</p>
    </div>
  );
};
