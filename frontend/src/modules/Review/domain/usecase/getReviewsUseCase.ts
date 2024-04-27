"use server";
import "server-only";

import { ReviewRepository } from "@modules/Review/data/repository/ReviewRepository";
import type { IReviewServiceResponse } from "@modules/Review/config/IReviewServiceResponse";
import type { IReviewModel } from "@modules/Review/domain/models/IReviewModel";

export const getReviewsUseCase = async ({ page, limit }: { page: number; limit: number }): Promise<IReviewServiceResponse<IReviewModel[]>> => {
  const result = await ReviewRepository.getReviews(page, limit);

  switch (result.status) {
    case "SUCCESS": {
      return {
        data: result.data,
      };
    }

    case "FAILED": {
      return {
        error: result.error,
        status: "SUCCESS",
      };
    }

    default: {
      return {
        status: "FAILED",
        error: result.error,
      };
    }
  }
};
