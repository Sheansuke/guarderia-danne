"use client";

import { useFormStatus } from "react-dom";

export const ReviewFormButton = () => {
  const { pending } = useFormStatus();

  return (
    <button disabled={pending} className="btn btn-lg bg-orange-950 font-bold text-orange-100 hover:bg-orange-100 hover:text-orange-950 border-none rounded-2xl bg-opacity-70 mt-6">
      {pending ? <span className="loading loading-spinner"></span> : " Quiero Inscribir a mi hijo"}
    </button>
  );
};
