import { getChild } from "@/modules/Child/config/services/getChild";
import { IGetChildRequest } from "@/modules/Child/data/models/request/IGetChildRequest";
import { ServiceResponse } from "@/modules/config/ServiceResponse";

export namespace ChildService {
  export async function getChildByCode(getChildRequest: IGetChildRequest): Promise<ServiceResponse<any>> {
    try {
      const result = await getChild(getChildRequest);
      return {
        data: result,
        status: "SUCCESS",
        error: null,
      };
    } catch (error) {
      console.log("🚀 ~ getChildByCode ~ error:", error);
      return {
        data: null,
        status: "FAILED",
        error: {
          message: "Error al intentar obtener los datos del niño. Por favor, intente nuevamente.",
          code: 500,
        },
      };
    }
  }
}
