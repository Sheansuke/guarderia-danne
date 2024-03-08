"use server";
import "server-only";

import { ReviewRepository } from "@/modules/Review/data/repository/ReviewRepository";
import { IReviewServiceResponse } from "@/modules/Review/config/IReviewServiceResponse";
import { IReviewModel } from "@/modules/Review/domain/models/IReviewModel";

export const getReviewsUseCase = async (): Promise<IReviewServiceResponse<IReviewModel[]>> => {
  const result = await ReviewRepository.getReviews();

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
