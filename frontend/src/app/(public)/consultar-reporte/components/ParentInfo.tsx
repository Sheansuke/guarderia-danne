import { getChildByCodeUseCase } from "@/modules/Child/domain/usecase/getChildByCodeUseCase";
import dynamic from "next/dynamic";
const ParentCard = dynamic(() => import("@/app/(public)/consultar-reporte/components/ParentCard").then((mod) => mod.ParentCard));
const ChildCard = dynamic(() => import("@/app/(public)/consultar-reporte/components/ChildCard").then((mod) => mod.ChildCard));

export const ParentInfo = async ({ parentCode }: { parentCode: string }) => {
  const information = await getChildByCodeUseCase({
    code: parentCode || "",
  });



  if (information.data == null) {
    return <p className="text-error text-center text-[2rem]">{information.error?.message}</p>;
  }

  return (
    <>
      {information.data && (
        <>
          <div className="flex flex-col items-center">
            <h1 className="text-orange-950 md:text-[2rem] text-[2rem] font-bold text-opacity-90">Informacion</h1>
          </div>

          <div className="container flex flex-col md:flex-row justify-center mt-8 gap-10">
            <>
              <ParentCard parentInfo={information.data} />
              <ChildCard childInfo={information.data} />
            </>
          </div>
        </>
      )}
    </>
  );
};
