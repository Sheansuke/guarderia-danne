import { REPORT_ENDPOINTS } from "@modules/Report/config/ReportEndpoints";
import type { IGetReportRequest } from "@modules/Report/data/models/request/IGetReportRequest";
import type { IReportResponseModel } from "@modules/Report/data/models/response/IReportResponseModel";
import { sanityClient } from "@infrastructure/sanity/sanityClient";

export const getReport = async ({ code, childEndpoint, pagination }: IGetReportRequest): Promise<IReportResponseModel[]> => {
  const startPagination = (pagination.page - 1) * pagination.limit;
  const finishPagination = startPagination + pagination.limit;

  const report = await sanityClient.fetch<
    IReportResponseModel[]
  >(`*[_type == "${REPORT_ENDPOINTS.REPORT}" && *[_type == "${childEndpoint}" && references(^._id) && parent_consultation_code == "${code}"] != []][${startPagination}...${finishPagination}] {
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
