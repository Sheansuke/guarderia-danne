import short from "short-uuid"

export default {
  name: 'pagos',
  title: 'Pagos',
  type: 'document',
  preview: {
    select: {
      title: 'pago_de.nombre_completo',
      subtitle: 'estado'
    },
  },
  fields: [
    {
      name: 'id_pago',
      title: 'ID de Pago',
      type: 'string', 
      readOnly: true,
      initialValue: () => `P${short.generate()}`,
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'pago_de',
      title: 'Registrar pago para: ',
      description: 'Selecciona el niño al que se le hará el pago.',
      type: 'reference',
      to: [{type: 'hijos'}],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'estado',
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
      name: 'cantidad',
      title: 'Cantidad',
      type: 'string',

      validation: (Rule) => Rule.required(),
    },
    {
      name: 'concepto',
      title: 'Concepto de pago',
      type: 'text',
    },
  ],
}
