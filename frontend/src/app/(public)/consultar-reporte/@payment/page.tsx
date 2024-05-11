import { PaymentPagination } from "@/app/(public)/consultar-reporte/@payment/components/PaymentPagination";
import { TablePayment } from "@/app/(public)/consultar-reporte/@payment/components/TablePayment";
import { getPaymentByCodeUseCase } from "@/modules/Payment/domain/usecase/getPaymentByCodeUseCase";
import { Suspense } from "react";

export default async function Payment({
  searchParams,
}: {
  searchParams?: {
    parentCode?: string;
    paymentPage?: string;
  };
}) {
  const parentCode = searchParams?.parentCode || "";
  const paymentPage = searchParams?.paymentPage || "";

  const { data, error } = await getPaymentByCodeUseCase({
    paymentEndpoint: "payment",
    code: parentCode,
    pagination: {
      limit: 5,
      page: Number(paymentPage),
    },
  });


  if (data == null) {
    return <p className="text-error text-center text-[2rem]">{error?.message}</p>;
  }


  return (
    <div className="container">
      {parentCode !== "" && (
        <>
          <div>
            <h1 className="text-orange-950 md:text-[2rem] text-[1.5rem] font-bold text-opacity-90">Pagos</h1>
          </div>

          <Suspense fallback={"loading..."}>
            <TablePayment payments={data} />
          </Suspense>
          <PaymentPagination page={paymentPage} />

          <h1 className="text-orange-950 md:text-[2rem] text-[1.5rem] font-bold text-opacity-90 p-16">{""}</h1>
        </>
      )}
    </div>
  );
}
