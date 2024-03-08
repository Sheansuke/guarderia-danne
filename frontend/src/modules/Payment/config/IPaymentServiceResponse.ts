export interface IPaymentServiceResponse<T> {
  data?: T;
  status?: "SUCCESS" | "FAILED"
  error?: {
    message: string;
  } | null;
}
