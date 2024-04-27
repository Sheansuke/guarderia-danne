import { ReviewCard } from "@/app/(public)/_components/review-section/components/ReviewCard";
import { getReviewsUseCase } from "@/modules/Review/domain/usecase/getReviewsUseCase";

export const ReviewSection = async () => {
  const reviews = await getReviewsUseCase({
    page: 1,
    limit: 10,
  });

  return (
    <div className="w-full bg-dandelion-50 bg-opacity-20 p-8">
      <h2 className="text-orange-950 font-bold md:text-[2rem] text-[1.8rem] text-opacity-70 text-center">Que opinan de nosotros</h2>
      <div className="flex gap-16 justify-center mt-20 container">
        {reviews.data?.map((review) => (
          <div key={review.name}>
            <ReviewCard review={review} />
          </div>
        ))}
      </div>
    </div>
  );
};
