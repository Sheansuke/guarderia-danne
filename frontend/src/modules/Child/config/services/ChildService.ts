import { getChild } from "@modules/Child/config/services/getChild";
import type { IGetChildRequest } from "@modules/Child/data/models/request/IGetChildRequest";
import type { IChildServiceResponse } from "@modules/Child/config/IChildServiceResponse";
import type { ChildModel } from "@modules/Child/domain/models/ChildModel";
import { responseToModel } from "@modules/Child/data/mappers/response_to_model";

export namespace ChildService {
  export async function getChildByCode(getChildRequest: IGetChildRequest): Promise<IChildServiceResponse<ChildModel>> {
    try {
      const result = await getChild(getChildRequest);
      const model = responseToModel(result);

      return {
        data: model,
        status: "SUCCESS",
      };

    } catch (error) {
      console.log("🚀 ~ getChildByCode ~ error:", error);
      return {
        status: "FAILED",
        error: {
          message: "Error al intentar obtener los datos del niño. Por favor, intente nuevamente.",
        },
      };
    }
  }
}
