import { sanityClient } from "@/infrastructure/sanity/sanityClient";
import { IReviewResponseModel } from "@/modules/Review/data/models/response/IReviewResponseModel";

export const getReview = async (): Promise<IReviewResponseModel[]> => {
  const reviewResponseModel = await sanityClient.fetch<IReviewResponseModel[]>(`*[_type == "review"]{
    name,
    description,
    score
  }`);
  return reviewResponseModel;
};
