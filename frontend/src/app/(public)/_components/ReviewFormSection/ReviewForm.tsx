"use client";

import { ReviewFormButton } from "@/app/(public)/_components/ReviewFormSection/components/ReviewFormButton";
import { createReviewUseCase } from "@/modules/Review/domain/usecase/createReviewUseCase";
import { useFormState } from "react-dom";

export const ReviewForm = () => {
  const initialState = { errors: null, data: null, status: null };
  const [state, action] = useFormState(createReviewUseCase, initialState);


  return (
    <>
      {state.status == "FAILED" && <h2 className="flex justify-center font-bold text-lg text-orange-600">{state.errors?.message}</h2>}
      {state.status == "SUCCESS" && <h2 className="flex justify-center font-bold text-lg text-green-600">GRACIAS POR ENVIAR TU OPINION LA USAREMOS PARA MEJORAR!</h2>}
      <form action={action}>
        <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-6 md:gap-16 ">
          <div className="flex flex-col w-full md:w-auto">
            <label htmlFor="name" className="font-bold text-[1.5rem] text-orange-950 text-opacity-70">
              Nombre
            </label>
            <input type="text" id="name" name="name" placeholder="Su nombre" className="input input-bordered input-lg w-full md:max-w-xs bg-gray-50" />

            <div className="rating rating-lg mt-2">
              <input type="radio" id="1" name="score" value={1} className="mask mask-star-2 bg-green-500" />
              <input type="radio" id="2" name="score" value={2} className="mask mask-star-2 bg-green-500" />
              <input type="radio" id="3" name="score" value={3} className="mask mask-star-2 bg-green-500" />
              <input type="radio" id="4" name="score" value={4} className="mask mask-star-2 bg-green-500" />
              <input type="radio" id="5" name="score" value={5} className="mask mask-star-2 bg-green-500" />
            </div>
          </div>

          <div className="flex flex-col w-full md:w-auto">
            <label htmlFor="description" className="font-bold text-[1.5rem] text-orange-950 text-opacity-70">
              Descripcion
            </label>
            <textarea name="description" id="description" cols={30} rows={30} className="textarea textarea-bordered textarea-lg  md:w-[376px] h-[220px] bg-gray-50"></textarea>

            <ReviewFormButton />
          </div>
        </div>
      </form>
    </>
  );
};
