import { CardText } from "@/app/(public)/consultar-reporte/components/CardText";
import { ChildModel } from "@/modules/Child/domain/models/ChildModel";
import Image from "next/image";

export const ChildCard = ({ childInfo }: { childInfo: ChildModel }) => {
  return (
    <div className="card w-full bg-bianca-200 p-8">
      <div>
        <h2 className="text-bianca-900 md:text-[2rem] text-[2rem] font-bold text-opacity-90 text-center md:text-start">Datos del hijo</h2>
      </div>

      <div className="flex flex-col md:flex-row  items-center gap-8 mt-4">
        <Image priority src={"/images/child_image.webp"} alt={"imagen de padres"} width={200} height={200} className="rounded-full border-2 border-gray-200" />
        <div className="flex flex-col gap-2 mt-4 text-center ">
          <CardText title={"Nombre Completo"} value={childInfo?.full_name} textColor="text-bianca-700" />
          <CardText title={"Apodo"} value={childInfo?.nickname} textColor="text-bianca-700" />
          <CardText title={"Edad"} value={childInfo?.age} textColor="text-bianca-700" />
          <CardText title={"Fecha Nacimiento"} value={childInfo?.date_of_birth} textColor="text-bianca-700" />
        </div>
      </div>
    </div>
  );
};
