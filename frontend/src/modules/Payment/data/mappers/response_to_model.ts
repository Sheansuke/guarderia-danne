import { IPaymentResponseModel } from "@/modules/Payment/data/models/response/IPaymentResponseModel";
import { IPaymentModel } from "@/modules/Payment/domain/models/IPaymentModel";

export const responseToModel = (response: IPaymentResponseModel[]): IPaymentModel[] => {
  return response.map((item) => ({
    payment_id: item.payment_id,
    status: item.status,
    amount: item.amount,
    payment_concept: item.payment_concept,
  }));
};
