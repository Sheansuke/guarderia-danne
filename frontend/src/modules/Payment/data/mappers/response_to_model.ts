import { PaymentResponseModel } from "@modules/Payment/data/models/response/PaymentResponseModel";
import { PaymentModel } from "@modules/Payment/domain/models/PaymentModel";

export const responseToModel = (response: PaymentResponseModel): PaymentModel => {
  return {
    payment_id: response.payment_id,
    status: response.status,
    amount: response.amount,
    payment_concept: response.payment_concept,
  };
};
