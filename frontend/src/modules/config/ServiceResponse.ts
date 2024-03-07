export interface ServiceResponse<T> {
  data: T | null;
  status?: "SUCCESS" | "FAILED"
  error?: {
    message: string;
    code: number;
  } | null;
}
