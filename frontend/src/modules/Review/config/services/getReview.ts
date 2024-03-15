import { IGetReviewRequest } from "@/modules/Review/data/models/request/IGetReviewRequest";
import { sanityClient } from "@infrastructure/sanity/sanityClient";
import type { IReviewResponseModel } from "@modules/Review/data/models/response/IReviewResponseModel";

export const getReview = async (pagination: IGetReviewRequest): Promise<IReviewResponseModel[]> => {
  const startPagination = (pagination.page - 1) * pagination.limit;
  const finishPagination = startPagination + pagination.limit;

  const reviewResponseModel = await sanityClient.fetch<IReviewResponseModel[]>(`*[_type == "review"][${startPagination}...${finishPagination}]{
    name,
    description,
    score
  }`);
  return reviewResponseModel;
};
