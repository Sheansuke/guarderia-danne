export interface IReviewServiceResponse<T> {
  data?: T;
  status?: "SUCCESS" | "FAILED"
  error?: {
    message: string;
  } | null;
}
