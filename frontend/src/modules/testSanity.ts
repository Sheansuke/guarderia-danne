"use server";
import "server-only";

import { sanityClient } from "@/infrastructure/sanity/sanityClient";

export const testSanity = async ({ code }: any): Promise<any> => {
  const report = await sanityClient.fetch(`*[_type == "report" && *[_type == "child" && references(^._id) && parent_consultation_code == "F2mru9NYgLJ95Q74FzM7pKS"] != []] {
    today_i_felt,
    during_work_hours_i_was,
    extra_comment_work_hour,
    today_i_ate,
    extra_comment_today_i_ate,
    in_the_bathroom,
    extra_comment_bathroom,
    needs,
    extra_comment_needs
  }`);

  console.log("🚀 ~ testSanity ~ reportes:", report);

  return "";
};
