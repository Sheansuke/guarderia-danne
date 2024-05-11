import type { IGetReportRequest } from "@modules/Report/data/models/request/IGetReportRequest";
import type { IReportResponseModel } from "@modules/Report/data/models/response/IReportResponseModel";
import { sanityClient } from "@infrastructure/sanity/sanityClient";

export const getReport = async ({ code, reportEndpoint, pagination }: IGetReportRequest): Promise<IReportResponseModel[]> => {
  const startPagination = (pagination.page - 1) * pagination.limit;
  const finishPagination = (startPagination + pagination.limit) - 1;

  const report = await sanityClient.fetch<
    IReportResponseModel[]
  >(`*[_type == "${reportEndpoint}" && report_for->parent_consultation_code == "${code}"][${startPagination}..${finishPagination}] {
    today_i_felt,
    during_work_hours_i_was,
    extra_comment_work_hour,
    today_i_ate,
    extra_comment_today_i_ate,
    in_the_bathroom,
    extra_comment_bathroom,
    needs,
    extra_comment_needs,
    _createdAt
  }`);

  return report;
};
