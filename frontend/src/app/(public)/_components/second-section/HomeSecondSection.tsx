import { ClassesCard } from "@/components/molecule/ClassesCard";

export const HomeSecondSection = () => {
  return (
    <div className="p-4 flex flex-col items-center text-[2rem]">
      <h2 className="text-orange-950 font-bold text-[2rem] text-opacity-70 ">¡Tenemos clases para tu peque!</h2>

      <div className="flex gap-36 mt-24">
        <ClassesCard backgroundColor="bg-bianca-200" />
        <ClassesCard backgroundColor="bg-gray-200" />
        <ClassesCard backgroundColor="bg-green-300" />
        <ClassesCard backgroundColor="bg-dandelion-200" />
      </div>
    </div>
  );
};
