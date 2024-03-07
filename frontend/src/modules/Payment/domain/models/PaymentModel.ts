export interface PaymentModel {
    payment_id: string;
    status: 'PAGADO' | 'PENDIENTE' | 'ANULADO';
    amount: string;
    payment_concept?: string;
}
