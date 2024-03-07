import short from "short-uuid"
import {CreditCardIcon} from '@sanity/icons'


export default {
  name: 'payment',
  title: 'Pagos',
  type: 'document',
  icon: CreditCardIcon,
  preview: {
    select: {
      title: 'payment_for.full_name',
      subtitle: 'status'
    },
  },
  fields: [
    {
      name: 'payment_id',
      title: 'ID de Pago',
      type: 'string', 
      readOnly: true,
      initialValue: () => `P${short.generate()}`,
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'payment_for',
      title: 'Registrar pago para: ',
      description: 'Selecciona el niño al que se le hará el pago.',
      type: 'reference',
      to: [{type: 'child'}],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'status',
      title: 'Estado',
      type: 'string',
      options: {
        list: [
          {title: 'PAGADO', value: 'PAGADO'},
          {title: 'PENDIENTE', value: 'PENDIENTE'},
          {title: 'ANULADO', value: 'ANULADO'},
        ],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'amount',
      title: 'Cantidad',
      type: 'string',

      validation: (Rule) => Rule.required(),
    },
    {
      name: 'payment_concept',
      title: 'Concepto de pago',
      type: 'text',
    },
  ],
}
