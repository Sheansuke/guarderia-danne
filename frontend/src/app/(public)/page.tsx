import { HomeFirstSection } from "@/app/(public)/_components/first-section/HomeFirstSection";
import { HomeHero } from "@/app/(public)/_components/first-section/HomeHero";
import { HomeSecondSection } from "@/app/(public)/_components/second-section/HomeSecondSection";
import { ReviewSection } from "@/app/(public)/_components/review-section/ReviewSection";
import { ReviewFormSection } from "@/app/(public)/_components/ReviewFormSection/ReviewFormSection";

// import { ENDPOINTS } from "@/infrastructure/sanity/constants/endpoints";
// import { getPaymentByCodeUseCase } from "@/modules/Payment/domain/usecase/getPaymentByCodeUseCase";
// import { getReportByCodeUseCase } from "@/modules/Report/domain/usecase/getReportByCodeUseCase";
// import { getReviewsUseCase } from "@/modules/Review/domain/usecase/getReviewsUseCase";


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
      <section>
        <HomeHero />
      </section>

      <section className="w-full">
        <HomeFirstSection />
      </section>

      <section className="mt-36 w-full md:container">
        <HomeSecondSection />
      </section>

      <section className="mt-36 w-full ">
        <ReviewSection />
      </section>

      <section className="mt-16 w-full ">
        <ReviewFormSection />
      </section>
    </main>
  );
}
