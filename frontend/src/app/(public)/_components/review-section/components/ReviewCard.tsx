import { IReviewModel } from "@/modules/Review/domain/models/IReviewModel";
import { v4 as uuidv4 } from 'uuid';

import Image from "next/image";

export const ReviewCard = ({ review }: { review: IReviewModel }) => {
  const starArray = Array.from({ length: review.score }, () => 0);
  const starOutlineArray = Array.from({ length: 5 - review.score }, () => 0);

  return (
    <div className="card card-normal bg-green-300 p-8 md:w-[500px] min-h-[350px]">
      <h3 className="card-title text-green-950 text-opacity-90 font-bold text-[1.8rem]">{review.name}</h3>
      <div className="flex gap-1">
        {starArray.map(() => <Image  key={uuidv4()} src="/icons/star_icon.svg" alt="icono de estrella" width={32} height={32} />
        )}

        {starOutlineArray.length > 0 && starOutlineArray.map(() => <Image key={uuidv4()} src="/icons/star_outline_icon.svg" alt="icono de estrella" width={32} height={32} />)}
      </div>
      <p className="text-green-800 text-[1.3rem]  mt-4">{review.description}</p>
    </div>
  );
};
