'use server'
import "server-only";

import { IGetChildRequest } from "@/modules/Child/data/models/request/IGetChildRequest";
import { ChildRepository } from "@/modules/Child/data/repository/ChildRepository";
import { ServiceResponse } from "@/modules/config/ServiceResponse";

export const getChildByCodeUseCase = async (getChildRequest: IGetChildRequest): Promise<ServiceResponse<any>> => {
  const result = await ChildRepository.getChildByCode(getChildRequest);

  switch (result.status) {
    case "SUCCESS": {
      return result.data;
    }

    case "FAILED": {
      return {
        data: null,
        error: {
          message: "Error al intentar obtener los datos del niño. Por favor, intente nuevamente.",
          code: 500,
        },
      };
    }

    default: {
      return {
        data: null,
        error: {
          message: "Error al intentar obtener los datos del niño. Por favor, intente nuevamente.",
          code: 0,
        },
      };
    }
  }
};
