import { IReviewModel } from "@/modules/Review/domain/models/IReviewModel";
import { sanityClient } from "@infrastructure/sanity/sanityClient";

export const createReview = async (newReview: IReviewModel): Promise<void> => {
  const prepareReview = {
    _type: "review",

    ...newReview,
    score: parseInt(newReview.score),
  };

  await sanityClient.create(prepareReview);
};
