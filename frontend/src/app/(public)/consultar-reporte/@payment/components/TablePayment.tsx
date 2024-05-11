import { IPaymentModel } from "@/modules/Payment/domain/models/IPaymentModel";
import clsx from "clsx";

export const TablePayment = ({ payments }: { payments?: IPaymentModel[] }) => {
  return (
    <div className="overflow-x-auto mt-4">
      {payments?.length === 0 ? (
        <TableError />
      ) : (
        <table className="table bg-bianca-200">
          {/* head */}
          <thead>
            <tr className="bg-gray-200 text-gray-900">
              <th className="text-[1.5rem]">ID de pago</th>
              <th className="text-[1.5rem]">Fecha Creacion</th>
              <th className="text-[1.5rem]">Fecha Ultima Actualizacion</th>
              <th className="text-[1.5rem]">Monto</th>
              <th className="text-[1.5rem]">Estado</th>
              <th className="text-[1.5rem]">Concepto</th>
            </tr>
          </thead>

          {payments && (
            <tbody>
              {payments?.map((payment, index) => {
                const createAt = new Date(payment._createdAt);
                const updateAt = new Date(payment._updatedAt);

                const formattedNumber = new Intl.NumberFormat("en-US").format(Number(payment.amount));

                var formatter = new Intl.DateTimeFormat("en-US", {
                  year: "numeric",
                  month: "2-digit",
                  day: "2-digit",
                });

                return (
                  <tr key={index} className="text-lg text-bianca-900 font-semibold">
                    <td>{payment.payment_id}</td>
                    <td>{formatter.format(createAt)}</td>
                    <td>{formatter.format(updateAt)}</td>
                    <td>{`${formattedNumber} RD$`}</td>
                    <td className={clsx({ "text-green-500": payment.status === "PAGADO" }, { "text-orange-500": payment.status === "PENDIENTE" }, { "text-gray-500": payment.status === "ANULADO" })}>
                      {payment.status}
                    </td>
                    <td>{payment.payment_concept ?? "Ninguno"}</td>
                  </tr>
                );
              })}
            </tbody>
          )}
        </table>
      )}
    </div>
  );
};

export const TableError = () => (
  <table className="table bg-bianca-200">
    {/* head */}
    <thead>
      <tr className="bg-gray-200 text-gray-900">
        <th className="text-[1.5rem]">ID de pago</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="text-center text-[1.5rem] text-orange-500">No se encontraron datos</td>
      </tr>
    </tbody>
  </table>
);
