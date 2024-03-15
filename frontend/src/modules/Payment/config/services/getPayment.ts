import { sanityClient } from "@infrastructure/sanity/sanityClient";
import { PAYMENT_ENDPOINTS } from "@modules/Payment/config/PaymentEndpoints";
import type { IGetPaymentRequest } from "@modules/Payment/data/models/request/IGetPaymentRequest";
import type { IPaymentResponseModel } from "@modules/Payment/data/models/response/IPaymentResponseModel";
import type { IPaymentModel } from "@modules/Payment/domain/models/IPaymentModel";

export const getPayment = async ({ code, childEndpoint, pagination }: IGetPaymentRequest): Promise<IPaymentModel[]> => {
  const startPagination = (pagination.page - 1) * pagination.limit;
  const finishPagination = startPagination + pagination.limit;

  const paymentResponseModel = await sanityClient.fetch<
    IPaymentResponseModel[]
  >(`*[_type == "${PAYMENT_ENDPOINTS.PAYMENT}" && *[_type == "${childEndpoint}" && references(^._id) && parent_consultation_code == "${code}"] != []][${startPagination}...${finishPagination}]{
    payment_id,
       status,
       amount,
       payment_concept
   }`);
  return paymentResponseModel;
};
