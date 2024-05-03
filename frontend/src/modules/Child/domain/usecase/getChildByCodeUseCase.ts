"use server";
import "server-only";

import type { IGetChildRequest } from "@modules/Child/data/models/request/IGetChildRequest";
import  { ChildRepository } from "@modules/Child/data/repository/ChildRepository";
import type { IChildServiceResponse } from "@modules/Child/config/IChildServiceResponse";
import type { ChildModel } from "@modules/Child/domain/models/ChildModel";

export const getChildByCodeUseCase = async (getChildRequest: IGetChildRequest): Promise<IChildServiceResponse<ChildModel>> => {
  const result = await ChildRepository.getChildByCode(getChildRequest);

  switch (result.status) {
    case "SUCCESS": {
      return {
        data: result.data,
      };
    }

    case "FAILED": {
      return {
        data: null,
        error: result.error,
      };
    }

    default: {
      return {
        data: null,
        error: result.error,
      };
    }
  }
};
