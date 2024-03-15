export interface IGetReportRequest {
    code: string;
    childEndpoint: string;
    pagination: {
      page: number;
      limit: number;
    };
}