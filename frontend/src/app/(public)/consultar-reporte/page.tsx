import { ParentInfo } from "@/app/(public)/consultar-reporte/components/ParentInfo";
import { SearchForm } from "@/app/(public)/consultar-reporte/components/SearchForm";
import { Suspense } from "react";

export default async function ConsultarReporte({
  searchParams,
}: {
  searchParams?: {
    parentCode?: string;
  };
}) {
  const parentCode = searchParams?.parentCode || "";

  return (
    <>
      <div className="container flex flex-col gap-8 mt-8 text-center">
        <h1 className="text-orange-950 md:text-[2rem] text-[1rem] font-bold text-opacity-90">Consulte su informacion y el reporte de su hijo ingresando el CODIGO que le fue asignado</h1>

        <Suspense fallback={null}>
        <SearchForm />
        </Suspense>
      </div>

      <div className="md:mt-24 mt-14">
        {parentCode !== "" && (
          <Suspense
            fallback={
              <div className="text-center">
                <p className="text-green-500 text-[3rem] loading loading-spinner loading-lg "></p>
              </div>
            }
          >
            <ParentInfo parentCode={parentCode} />
          </Suspense>
        )}
      </div>
    </>
  );
}
