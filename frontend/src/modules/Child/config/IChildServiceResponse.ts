export interface IChildServiceResponse<T> {
  data: T | null;
  status?: "SUCCESS" | "FAILED"
  error?: {
    message: string;
  } | null;
}
