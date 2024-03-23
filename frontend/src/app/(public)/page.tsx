import { ENDPOINTS } from "@/infrastructure/sanity/constants/endpoints";
import { getPaymentByCodeUseCase } from "@/modules/Payment/domain/usecase/getPaymentByCodeUseCase";
import { getReportByCodeUseCase } from "@/modules/Report/domain/usecase/getReportByCodeUseCase";
import { getReviewsUseCase } from "@/modules/Review/domain/usecase/getReviewsUseCase";
import Image from "next/image";

export default async function Home() {
  // const response = await getChildByCodeUseCase({ code: "F2mru9NYgLJ95Q74FzM7pKS"});

  // const response = await getReportByCodeUseCase({
  //   code: "F2mru9NYgLJ95Q74FzM7pKS",
  //   childEndpoint: ENDPOINTS.CHILD_ENDPOINT,
  //   pagination: {
  //     page: 1,
  //     limit: 10,
  //   },
  // });

  // const response = await getPaymentByCodeUseCase({ code: "F2mru9NYgLJ95Q74FzM7pKS", childEndpoint: ENDPOINTS.CHILD_ENDPOINT, pagination: { page: 1, limit: 10 }});


  // const response = await getReviewsUseCase({
  //   page: 1,
  //   limit: 10
  // });

  return (
    <main>
      <h1 className="text-2xl font-bold md:text-orange-400">GUARDERIA DE DANNE</h1>
    </main>
  );
}
