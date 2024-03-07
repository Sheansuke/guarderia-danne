import { ReviewResponseModel } from "@/modules/Review/data/models/response/ReviewResponseModel";
import { ReviewModel } from "@/modules/Review/domain/models/ReviewModel";

export const responseToModel = (response: ReviewResponseModel): ReviewModel => {
    return {
        name: response.name,
        description: response.description,
        score: response.score,
    };
}