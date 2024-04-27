import { IGetReviewRequest } from "@/modules/Review/data/models/request/IGetReviewRequest";
import { sanityClient } from "@infrastructure/sanity/sanityClient";
import type { IReviewResponseModel } from "@modules/Review/data/models/response/IReviewResponseModel";

export const getReview = async (pagination: IGetReviewRequest): Promise<IReviewResponseModel[]> => {
  const startPagination = (pagination.page - 1) * pagination.limit;
  const finishPagination = startPagination + pagination.limit;


  const query = `*[_type == "review"] | order(_createdAt desc) [${startPagination}...${finishPagination}] {
    name,
    description,
    score
  }`;

  const reviewResponseModel = await sanityClient.fetch<IReviewResponseModel[]>(query);
  return reviewResponseModel;
};