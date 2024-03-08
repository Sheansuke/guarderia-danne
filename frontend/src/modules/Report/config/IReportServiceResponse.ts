export interface IReportServiceResponse<T> {
  data?: T;
  status?: "SUCCESS" | "FAILED"
  error?: {
    message: string;
  } | null;
}
