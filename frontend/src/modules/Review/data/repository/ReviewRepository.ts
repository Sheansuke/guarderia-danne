import { ReviewService } from "@/modules/Review/config/services/ReviewService";


export namespace ReviewRepository {
    export function getReviews() {
        return ReviewService.getReviews();
    }
}