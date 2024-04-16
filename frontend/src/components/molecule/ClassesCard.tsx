import clsx from "clsx";

interface ClassesCardProps {
  backgroundColor: string;
}

export const ClassesCard = ({ backgroundColor }: ClassesCardProps) => {
  return <div className={clsx("h-36 w-36 rounded-xl", backgroundColor)}></div>;
};
