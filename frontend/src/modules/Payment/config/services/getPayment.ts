import { sanityClient } from "@infrastructure/sanity/sanityClient";
import type { IGetPaymentRequest } from "@modules/Payment/data/models/request/IGetPaymentRequest";
import type { IPaymentResponseModel } from "@modules/Payment/data/models/response/IPaymentResponseModel";
import type { IPaymentModel } from "@modules/Payment/domain/models/IPaymentModel";

export const getPayment = async ({ code, paymentEndpoint, pagination }: IGetPaymentRequest): Promise<IPaymentModel[]> => {
  const startPagination = (pagination.page - 1) * pagination.limit;
  const finishPagination = (startPagination + pagination.limit) -1;

  const paymentResponseModel = await sanityClient.fetch<
    IPaymentResponseModel[]
  >(`*[_type == "${paymentEndpoint}" && payment_for->parent_consultation_code == "${code}"][${startPagination}..${finishPagination}]
  {
    payment_id,
       status,
       amount,
       payment_concept,
       _createdAt,
       _updatedAt,
   }`);
  return paymentResponseModel;
};
