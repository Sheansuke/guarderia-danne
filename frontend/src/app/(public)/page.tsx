import { getChildByCodeUseCase } from "@/modules/Child/domain/usecase/getChildByCodeUseCase";
import { cookies } from "next/headers";

export default async function Home() {
  cookies();
  // const response = await getChildByCodeUseCase({ code: "F2mru9NYgLJ95Q74FzM7pKS" });

  return (
    <main>
      <h1>GUARDERIA DE DANNE</h1>
    </main>
  );
}
