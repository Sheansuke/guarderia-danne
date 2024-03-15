import { ReviewService } from "@modules/Review/config/services/ReviewService";


export namespace ReviewRepository {
    export function getReviews(page: number, limit: number) {
        return ReviewService.getReviews(page, limit);
    }
}