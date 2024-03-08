export interface IChildServiceResponse<T> {
  data?: T;
  status?: "SUCCESS" | "FAILED"
  error?: {
    message: string;
  } | null;
}
