import { CardText } from "@/app/(public)/consultar-reporte/components/CardText";
import { ChildModel } from "@/modules/Child/domain/models/ChildModel";
import Image from "next/image";

export const ParentCard = ({ parentInfo }: { parentInfo: ChildModel}) => {
    return (
      <div className="card w-full bg-gray-200 p-8">
        <div>
          <h2 className="text-orange-950 md:text-[2rem] text-[2rem] font-bold text-opacity-90 text-center md:text-start">Informacion Parental</h2>
        </div>
  
        <div className="flex flex-col md:flex-row  items-center md:gap-4  gap-2 mt-4 text-center">
          <Image priority src={"/images/parent_image.webp"} alt={"imagen de padres"} width={200} height={200} className="rounded-full  border-2 border-green-500" />
          <div className="flex flex-col gap-2 mt-4">
            <CardText title={"Padre"} value={parentInfo.father_name} />
            <CardText title={"Madre"} value={parentInfo.mother_name} />
            <CardText title={"Tutor"} value={parentInfo?.guardian} />
          </div>
        </div>
      </div>
    );
  };