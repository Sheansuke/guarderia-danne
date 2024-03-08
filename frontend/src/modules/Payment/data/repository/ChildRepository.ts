import { PaymentService } from "@/modules/Payment/config/services/PaymentService";
import { IGetPaymentRequest } from "@/modules/Payment/data/models/request/IGetPaymentRequest";


export namespace PaymentRepository {
    export function getPaymentByCode(getPaymentRequest: IGetPaymentRequest) {
        return PaymentService.getPaymentByCode(getPaymentRequest);
    }
}