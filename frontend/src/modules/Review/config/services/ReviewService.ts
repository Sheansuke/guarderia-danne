import type { IReviewServiceResponse } from "@modules/Review/config/IReviewServiceResponse";
import { getReview } from "@modules/Review/config/services/getReview";
import { createReview } from "@modules/Review/config/services/createReview";
import { responseToModel } from "@modules/Review/data/mappers/response_to_model";
import type { IReviewModel } from "@modules/Review/domain/models/IReviewModel";

export namespace ReviewService {
  export async function getReviews(page: number, limit: number): Promise<IReviewServiceResponse<IReviewModel[]>> {
    try {
      const result = await getReview({ page, limit });
      const model = responseToModel(result);

      return {
        data: model,
        status: "SUCCESS",
      };
    } catch (error) {
      console.log("🚀 ~ getReviews ~ error:", error);
      return {
        status: "FAILED",
        error: {
          message: "Error al intentar obtener los datos del niño. Por favor, intente nuevamente.",
        },
      };
    }
  }

  export async function createNewReview(newReview: IReviewModel): Promise<IReviewServiceResponse<boolean>> {
    try {
      await createReview(newReview);
      return {
        status: "SUCCESS",
        data: true,
      };
    } catch (error) {
      console.log("🚀 ~ getReviews ~ error:", error);
      return {
        data: false,
        status: "FAILED",
        error: {
          message: "Algo salio mal creando enviando la opinion",
        },
      };
    }
  }
}
