"use server";
import "server-only";

import { ReviewRepository } from "@modules/Review/data/repository/ReviewRepository";
import type { IReviewServiceResponse } from "@modules/Review/config/IReviewServiceResponse";
import type { IReviewModel } from "@modules/Review/domain/models/IReviewModel";
import { z } from "zod";
import { revalidatePath } from "next/cache";

interface State {
  data?: boolean | null;
  status?: "FAILED" | "SUCCESS" | null;
  errors?: {
    message?: string;
  } | null;
}

const ReviewSchema = z.object({
  name: z.string().min(1, { message: "El nombre no puede estar vacío" }),
  description: z.string().min(1, { message: "La descripcion no puede estar vacío" }),
  score: z.string().min(1, { message: "El puntaje mínimo es 1" }).max(5, { message: "El puntaje máximo es 5" }),
});

export const createReviewUseCase = async (prevState: State, formData: FormData): Promise<State> => {
  const name = formData.get("name");
  const score = formData.get("score") || "5";
  const description = formData.get("description");

  const validateData = ReviewSchema.safeParse({ name, score, description });

  if (validateData.error != undefined) {
    return {
      status: "FAILED",
      errors: {
        message: validateData.error?.errors[0].message,
      },
    };
  }

  const result = await ReviewRepository.createReview({
    name: name?.toString()!,
    score: parseInt(score.toString()),
    description: description?.toString()!,
  });

  switch (result.status) {
    case "SUCCESS": {
      revalidatePath("/");
      return {
        status: "SUCCESS",
        data: result.data,
      };
    }

    case "FAILED": {
      return {
        status: "FAILED",
        errors: {
          message: result.error?.message ?? "Algo salio mal",
        },
      };
    }

    default: {
      return {
        status: "FAILED",
        errors: {
          message: result.error?.message ?? "Algo salio mal",
        },
      };
    }
  }
};
