import { ReportResponseModel } from "@/modules/Report/data/models/response/ReportResponseModel";
import { ReportModel } from "@/modules/Report/domain/models/ReportModel";

export const responseToModel = (response: ReportResponseModel): ReportModel => {
    return {
        today_i_felt: response.today_i_felt,
        during_work_hours_i_was: response.during_work_hours_i_was,
        extra_comment_work_hour: response.extra_comment_work_hour,
        today_i_ate: response.today_i_ate,
        extra_comment_today_i_ate: response.extra_comment_today_i_ate,
        in_the_bathroom: response.in_the_bathroom,
        extra_comment_bathroom: response.extra_comment_bathroom,
        needs: response.needs,
        extra_comment_needs: response.extra_comment_needs,
    };
}