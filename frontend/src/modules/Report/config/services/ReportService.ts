import type { IGetReportRequest } from "@modules/Report/data/models/request/IGetReportRequest";
import type { IReportServiceResponse } from "@modules/Report/config/IReportServiceResponse";
import type { ReportModel } from "@modules/Report/domain/models/ReportModel";
import { responseToModel } from "@modules/Report/data/mappers/response_to_model";
import { getReport } from "@modules/Report/config/services/getReport";

export namespace ReportService {
  export async function getReportByCode(getChildRequest: IGetReportRequest): Promise<IReportServiceResponse<ReportModel[]>> {
    try {
      const result = await getReport(getChildRequest);
      const model = responseToModel(result);

      return {
        data: model,
        status: "SUCCESS",
      };

    } catch (error) {
      console.log("🚀 ~ getReportByCode ~ error:", error);
      return {
        status: "FAILED",
        error: {
          message: "Error al intentar obtener los datos del reporte. Por favor, intente nuevamente.",
        },
      };
    }
  }
}
