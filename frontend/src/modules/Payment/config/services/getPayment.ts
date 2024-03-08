import { sanityClient } from "@/infrastructure/sanity/sanityClient";
import { PAYMENT_ENDPOINTS } from "@/modules/Payment/config/PaymentEndpoints";
import { IGetPaymentRequest } from "@/modules/Payment/data/models/request/IGetPaymentRequest";
import { IPaymentResponseModel } from "@/modules/Payment/data/models/response/IPaymentResponseModel";
import { IPaymentModel } from "@/modules/Payment/domain/models/IPaymentModel";

export const getPayment = async ({ code, childEndpoint }: IGetPaymentRequest): Promise<IPaymentModel[]> => {
  const paymentResponseModel = await sanityClient.fetch<
    IPaymentResponseModel[]
  >(`*[_type == "${PAYMENT_ENDPOINTS.PAYMENT}" && *[_type == "${childEndpoint}" && references(^._id) && parent_consultation_code == "${code}"] != []]{
    payment_id,
       status,
       amount,
       payment_concept
   }`);
  return paymentResponseModel;
};
