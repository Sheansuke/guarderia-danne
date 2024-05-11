"use client";

import { SearchButton } from "@/app/(public)/consultar-reporte/components/SearchButton";
import { SearchInput } from "@/app/(public)/consultar-reporte/components/SearchInput";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export const SearchForm = () => {
  const [search, setSearch] = useState<string>("");

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  function handleSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const params = new URLSearchParams(searchParams);
    if (search !== "") {
      params.set("parentCode", search.trim());
    } else {
      params.delete("parentCode");
    }
    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <form onSubmit={handleSearch} className="flex flex-col items-center md:flex-row gap-4 ">
      <div className="flex-1 w-full">
        <SearchInput search={search} setSearch={setSearch} />
      </div>
      <SearchButton />
    </form>
  );
};
