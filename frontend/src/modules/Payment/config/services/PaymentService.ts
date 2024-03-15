import { getPayment } from "@modules/Payment/config/services/getPayment";
import type { IGetPaymentRequest } from "@modules/Payment/data/models/request/IGetPaymentRequest";
import { responseToModel } from "@modules/Payment/data/mappers/response_to_model";
import type { IPaymentServiceResponse } from "@modules/Payment/config/IPaymentServiceResponse";
import type { IPaymentModel } from "@modules/Payment/domain/models/IPaymentModel";

export namespace PaymentService {
  export async function getPaymentByCode(getPaymentRequest: IGetPaymentRequest): Promise<IPaymentServiceResponse<IPaymentModel[]>> {
    try {
      const result = await getPayment(getPaymentRequest);
      const model = responseToModel(result);

      return {
        data: model,
        status: "SUCCESS",
      };

    } catch (error) {
      console.log("🚀 ~ getPaymentByCode ~ error:", error);
      return {
        status: "FAILED",
        error: {
          message: "Error al intentar obtener los datos de pago. Por favor, intente nuevamente.",
        },
      };
    }
  }
}
