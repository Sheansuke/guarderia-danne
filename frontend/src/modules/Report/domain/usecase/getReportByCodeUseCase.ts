"use server";
import "server-only";

import { IReportServiceResponse } from "@/modules/Report/config/IReportServiceResponse";
import { IGetReportRequest } from "@/modules/Report/data/models/request/IGetReportRequest";
import { ReportRepository } from "@/modules/Report/data/repository/ChildRepository";
import { ReportModel } from "@/modules/Report/domain/models/ReportModel";

 
export const getReportByCodeUseCase = async (getReportRequest: IGetReportRequest): Promise<IReportServiceResponse<ReportModel[]>> => {
  const result = await ReportRepository.getReportByCode(getReportRequest);

  switch (result.status) {
    case "SUCCESS": {
      return {
        data: result.data,
      };
    }

    case "FAILED": {
      return {
        error: result.error,
      };
    }

    default: {
      return {
        error: result.error,
      };
    }
  }
};
