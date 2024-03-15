export interface IGetPaymentRequest {
    code: string;
    childEndpoint: string;
    pagination: {
        page: number;
        limit: number;
      };
}