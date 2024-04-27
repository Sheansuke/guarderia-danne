import { IReviewModel } from "@/modules/Review/domain/models/IReviewModel";
import { ReviewService } from "@modules/Review/config/services/ReviewService";


export namespace ReviewRepository {
    export function getReviews(page: number, limit: number) {
        return ReviewService.getReviews(page, limit);
    }
    export function createReview(newReview: IReviewModel) {
    
        return ReviewService.createNewReview(newReview);
    }
}