import { ChildResponseModel } from "@/modules/Child/data/models/response/ChildResponseModel";
import { ChildModel } from "@modules/Child/domain/models/ChildModel";

export const responseToModel = (response: ChildResponseModel): ChildModel => {
  return {
    father_name: response.father_name,
    mother_name: response.mother_name,
    guardian: response.guardian,
    full_name: response.full_name,
    nickname: response.nickname,
    date_of_birth: response.date_of_birth,
    age: response.age,
  };
};
