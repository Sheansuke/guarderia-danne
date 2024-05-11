export interface IGetPaymentRequest {
    code: string;
    paymentEndpoint: string;
    pagination: {
        page: number;
        limit: number;
      };
}