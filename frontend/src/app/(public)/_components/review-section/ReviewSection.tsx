import { ReviewCard } from "@/app/(public)/_components/review-section/components/ReviewCard";
import { getReviewsUseCase } from "@/modules/Review/domain/usecase/getReviewsUseCase";

export const ReviewSection = async () => {
  const reviews = await getReviewsUseCase({
    page: 1,
    limit: 3,
  });

  return (
    <div className="w-full bg-dandelion-50 bg-opacity-20 p-10">
      <h2 className="text-orange-950 font-bold md:text-[2rem] text-[1.8rem] text-opacity-90 text-center mt-4">Que opinan de nosotros</h2>
      <div className="flex flex-col md:flex-row gap-16 justify-center mt-16 md:container items-center">
        {reviews.data?.map((review, index) => (
          <div key={index}>
            <ReviewCard review={review} />
          </div>
        ))}
      </div>
    </div>
  );
};
