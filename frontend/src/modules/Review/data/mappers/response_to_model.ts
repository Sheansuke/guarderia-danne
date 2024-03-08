import { IReviewResponseModel } from "@/modules/Review/data/models/response/IReviewResponseModel";
import { IReviewModel } from "@/modules/Review/domain/models/IReviewModel";

export const responseToModel = (response: IReviewResponseModel[]): IReviewModel[] => {
    return response.map((item) => ({
        name: item.name,
        description: item.description,
        score: item.score,
    }));
}