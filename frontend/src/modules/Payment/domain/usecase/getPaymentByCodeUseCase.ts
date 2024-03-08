"use server";
import "server-only";

import { IGetPaymentRequest } from "@/modules/Payment/data/models/request/IGetPaymentRequest";
import { PaymentRepository } from "@/modules/Payment/data/repository/ChildRepository";
import { IPaymentServiceResponse } from "@/modules/Payment/config/IPaymentServiceResponse";
import { IPaymentModel } from "@/modules/Payment/domain/models/IPaymentModel";

export const getPaymentByCodeUseCase = async (getPaymentRequest: IGetPaymentRequest): Promise<IPaymentServiceResponse<IPaymentModel[]>> => {
  const result = await PaymentRepository.getPaymentByCode(getPaymentRequest);

  switch (result.status) {
    case "SUCCESS": {
      return {
        data: result.data,
      };
    }

    case "FAILED": {
      return {
        error: result.error,
      };
    }

    default: {
      return {
        error: result.error,
      };
    }
  }
};
