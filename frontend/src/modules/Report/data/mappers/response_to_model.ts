import type { IReportResponseModel } from "@modules/Report/data/models/response/IReportResponseModel";
import type { ReportModel } from "@modules/Report/domain/models/ReportModel";

export const responseToModel = (response: IReportResponseModel[]): ReportModel[] => {
    return response.map((item) => ({
        today_i_felt: item.today_i_felt,
        during_work_hours_i_was: item.during_work_hours_i_was,
        extra_comment_work_hour: item.extra_comment_work_hour,
        today_i_ate: item.today_i_ate,
        extra_comment_today_i_ate: item.extra_comment_today_i_ate,
        in_the_bathroom: item.in_the_bathroom,
        extra_comment_bathroom: item.extra_comment_bathroom,
        needs: item.needs,
        extra_comment_needs: item.extra_comment_needs,
    }));
}