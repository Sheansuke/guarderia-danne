import { ReportService } from "@modules/Report/config/services/ReportService";
import type { IGetReportRequest } from "@modules/Report/data/models/request/IGetReportRequest";


export namespace ReportRepository {
    export function getReportByCode(getReportRequest: IGetReportRequest) {
        return ReportService.getReportByCode(getReportRequest);
    }
}