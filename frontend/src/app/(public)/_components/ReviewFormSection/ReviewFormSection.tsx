import { ReviewForm } from "@/app/(public)/_components/ReviewFormSection/ReviewForm";

export const ReviewFormSection = () => {
  return (
    <div className="p-8" >
      <h2 className="text-orange-950 font-bold md:text-[2rem] text-[1.8rem] text-opacity-70 text-center mb-8">¡Déjanos tu opinión!</h2>
      
      <ReviewForm />
    </div>
  );
};
