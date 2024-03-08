import { REPORT_ENDPOINTS } from "@/modules/Report/config/ReportEndpoints";
import { IGetReportRequest } from "@/modules/Report/data/models/request/IGetReportRequest";
import { IReportResponseModel } from "@/modules/Report/data/models/response/IReportResponseModel";



export const getReport = async ({ code, childEndpoint }: IGetReportRequest): Promise<IReportResponseModel[]> => {
  const {sanityClient} = await import("@/infrastructure/sanity/sanityClient")
  const report = await sanityClient.fetch<IReportResponseModel[]>(`*[_type == "${REPORT_ENDPOINTS.REPORT}" && *[_type == "${childEndpoint}" && references(^._id) && parent_consultation_code == "${code}"] != []] {
    today_i_felt,
    during_work_hours_i_was,
    extra_comment_work_hour,
    today_i_ate,
    extra_comment_today_i_ate,
    in_the_bathroom,
    extra_comment_bathroom,
    needs,
    extra_comment_needs
  }`);

  return report;
};
