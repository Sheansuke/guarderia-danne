import { sanityClient } from "@infrastructure/sanity/sanityClient";
import { CHILD_ENDPOINTS } from "@modules/Child/config/ChildEndpoints";
import type { IGetChildRequest } from "@modules/Child/data/models/request/IGetChildRequest";
import type { ChildResponseModel } from "@modules/Child/data/models/response/ChildResponseModel";

export const getChild = async ({ code }: IGetChildRequest): Promise<ChildResponseModel> => {
  const childResponseModel = await sanityClient.fetch<ChildResponseModel[]>(`*[_type == "${CHILD_ENDPOINTS.CHILD}" && parent_consultation_code == "${code}"]{
    father_name,
    mother_name,
    guardian,
    full_name,
    nickname,
    date_of_birth,
    age,
  }`);
  return childResponseModel[0];
};
