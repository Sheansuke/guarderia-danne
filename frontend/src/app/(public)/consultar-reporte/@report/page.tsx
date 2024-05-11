import { ReportPagination } from "@/app/(public)/consultar-reporte/@report/components/ReportPagination";
import { TableReport } from "@/app/(public)/consultar-reporte/@report/components/TableReport";
import { getReportByCodeUseCase } from "@/modules/Report/domain/usecase/getReportByCodeUseCase";
import { Suspense } from "react";

export default async function Report({
  searchParams,
}: {
  searchParams?: {
    parentCode?: string;
    reportPage?: string;
  };
}) {
  const parentCode = searchParams?.parentCode || "";
  const reportPage = searchParams?.reportPage || "";

  const { data, error } = await getReportByCodeUseCase({
    reportEndpoint: "report",
    code: parentCode,
    pagination: {
      limit: 5,
      page: Number(reportPage),
    },
  });

  if (data == null) {
    return <p className="text-error text-center text-[2rem]">{error?.message}</p>;
  }

  return (
    <div className="container">
      {parentCode !== "" && (
        <>
          <div>
            <h1 className="text-orange-950 md:text-[2rem] text-[1.5rem] font-bold text-opacity-90">Reportes</h1>
          </div>

          <Suspense fallback={"loading..."}>
            <TableReport reports={data} />
          </Suspense>
          <ReportPagination page={reportPage} />
        </>
      )}
    </div>
  );
}
