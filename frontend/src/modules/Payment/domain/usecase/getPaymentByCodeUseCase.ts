"use server";
import "server-only";

import type { IGetPaymentRequest } from "@modules/Payment/data/models/request/IGetPaymentRequest";
import { PaymentRepository } from "@modules/Payment/data/repository/ChildRepository";
import type { IPaymentServiceResponse } from "@modules/Payment/config/IPaymentServiceResponse";
import type { IPaymentModel } from "@modules/Payment/domain/models/IPaymentModel";

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
