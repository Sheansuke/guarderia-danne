export interface IGetReportRequest {
    code: string;
    reportEndpoint: string;
    pagination: {
      page: number;
      limit: number;
    };
}