import { ReportCard } from "@/app/(public)/consultar-reporte/@report/components/ReportCard";
import { ReportModel } from "@/modules/Report/domain/models/ReportModel";

export const TableReport = ({ reports }: { reports?: ReportModel[] }) => {
  return (
    <div className="overflow-x-auto mt-4">
      <table className="table bg-bianca-200">
        {/* head */}
        <thead>
          <tr className="bg-gray-200 text-gray-900">
            <th className="text-[1.5rem]">Fecha Creacion</th>
          </tr>
        </thead>
        {reports && reports.length !== 0 ? (
          <tbody>
            {reports?.map((report, index) => {
              const date = new Date(report._createdAt);

              var formatter = new Intl.DateTimeFormat("en-US", {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
              });

              return (
                <tr key={index}>
                  <td>
                    <div className="collapse bg-bianca-200 rounded-none ">
                      <input type="radio" name="my-accordion-1" />
                      <div className="collapse-title text-xl font-bold text-bianca-900">{formatter.format(date)}</div>
                      <div className="collapse-content bg-opacity-50 rounded-md p-2 flex flex-col gap-4">
                        {/* ESTADOS */}
                        <div className="flex flex-col">
                          <h2 className="text-lg text-bianca-950 font-bold">Estados:</h2>
                          <div className="flex flex-col md:flex-row  gap-2 mt-1">
                            <ReportCard title="Materiales que necesito" report={report.needs} />
                            <ReportCard title="Hoy me senti" report={report.today_i_felt} />
                            <ReportCard title="Durante las horas de trabajo estuve" report={report.during_work_hours_i_was} />
                            <ReportCard title="Hoy comi" report={report.today_i_ate} />
                            <ReportCard title="En el baño hice" report={report.in_the_bathroom} />
                          </div>
                        </div>

                        {/* COMENTARIOS */}
                        <div className="flex flex-col">
                          <h2 className="text-lg text-bianca-950 font-bold">Comentarios:</h2>
                          <div className="flex flex-col md:flex-row gap-2">
                            <div className="flex flex-col md:flex-row gap-2 mt-1">
                              <ReportCard title="Materiales necesarios" comment={report.extra_comment_needs ?? "Sin Comentarios"} />
                            </div>
                            <div className="flex flex-col md:flex-row gap-2 mt-1">
                              <ReportCard title="Horas de trabajo" comment={report.extra_comment_needs ?? "Sin Comentarios"} />
                            </div>
                            <div className="flex flex-col md:flex-row gap-2 mt-1">
                              <ReportCard title="Comidas" comment={report.extra_comment_needs ?? "Sin Comentarios"} />
                            </div>
                            <div className="flex flex-col md:flex-row gap-2 mt-1">
                              <ReportCard title="Baño" comment={report.extra_comment_needs ?? "Sin Comentarios"} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        ) : (
          <tbody  >
            <tr>
              <td className="text-center text-[1.5rem] text-orange-500" >No se encontraron datos</td>
            </tr>
          </tbody>
        )}
      </table>
    </div>
  );
};
