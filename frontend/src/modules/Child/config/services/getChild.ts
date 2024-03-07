import { sanityClient } from "@/infrastructure/sanity/sanityClient";
import { IGetChildRequest } from "@/modules/Child/data/models/request/IGetChildRequest";
import { ChildResponseModel } from "@/modules/Child/data/models/response/ChildResponseModel";

export const getChild = async ({ code }: IGetChildRequest): Promise<any> => {
  const childResponseModel: ChildResponseModel = await sanityClient.fetch(`*[_type == "child" && parent_consultation_code == "${code}"]{
    father_name,
    mother_name,
    guardian,
    full_name,
    nickname,
    date_of_birth,
    age,
  }`);

  return childResponseModel;
};
