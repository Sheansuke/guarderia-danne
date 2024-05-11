"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export const PaymentPagination = ({ page }: { page: string }) => {
  const searchParams: any = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  function handlePreviousSearch(nexPage: number) {
    const params: any = new URLSearchParams(searchParams);
    const currentPage = params.get("paymentPage");

    if (currentPage  != 1) {
      params.set("paymentPage", nexPage);
    }

    replace(`${pathname}?${params.toString()}`, {
      scroll: false,
    });
  }

  function handleNextSearch(nexPage: number) {
    const params: any = new URLSearchParams(searchParams);

    params.set("paymentPage", nexPage);

    replace(`${pathname}?${params.toString()}`, {
      scroll: false,
    });
  }

  return (
    <div className="flex justify-end mt-4 ">
      <div className="join ">
        <button className="join-item btn bg-bianca-200 border-none" onClick={() => handlePreviousSearch(Number(page) - 1)}>
          «
        </button>
        <button className="join-item btn bg-bianca-200 border-none">{`Pagina: ${page || 1}`}</button>
        <button className="join-item btn bg-bianca-200 border-none" onClick={() => handleNextSearch(Number(page == "" ? 1 : page) + 1)}>
          »
        </button>
      </div>
    </div>
  );
};
