export default {
  name: 'reportes',
  title: 'Reportes',
  type: 'document',
  preview: {
    select: {
      title: 'reporte_para.nombre_completo',
    },
  },
  fields: [
    {
      name: 'reporte_para',
      title: 'Reporte para',
      type: 'reference',
      to: [{ type: 'hijos' }],
      validation: Rule => Rule.required(),
    },
    {
      name: 'hoy_estuve',
      title: 'Hoy estuve',
      type: 'array',
      validation: Rule => Rule.required(),
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Activo', value: 'Activo' },
          { title: 'Alegre', value: 'Alegre' },
          { title: 'Amistoso', value: 'Amistoso' },
          { title: 'Animado', value: 'Animado' },
          { title: 'Colaborador', value: 'Colaborador' },
          { title: 'Comunicativo', value: 'Comunicativo' },
          { title: 'Curioso', value: 'Curioso' },
          { title: 'Desanimado', value: 'Desanimado' },
          { title: 'Desinteresado', value: 'Desinteresado' },
          { title: 'Dinamico', value: 'Dinamico' },
          { title: 'Entusiasta', value: 'Entusiasta' },
          { title: 'Expresivo', value: 'Expresivo' },
          { title: 'Inquieto', value: 'Inquieto' },
          { title: 'Lloroso', value: 'Lloroso' },
          { title: 'Tranquilo', value: 'Tranquilo' },
          { title: 'Sin Especificar', value: 'Sin Especificar' }
        ],
      },
    },
    {
      name: 'en_hora_de_trabajo_me_mostre',
      title: 'En hora de trabajo me mostré',
      type: 'array',
      validation: Rule => Rule.required(),
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Concentrado', value: 'Concentrado' },
          { title: 'Creativo', value: 'Creativo' },
          { title: 'Curioso', value: 'Curioso' },
          { title: 'Desinteresado', value: 'Desinteresado' },
          { title: 'Distraido', value: 'Distraido' },
          { title: 'Interesado', value: 'Interesado' },
          { title: 'Motivado', value: 'Motivado' },
          { title: 'Participativo', value: 'Participativo' },
          { title: 'Resistente', value: 'Resistente' },
          { title: 'Sin Especificar', value: 'Sin Especificar' }
        ],
      },
    },
    {
      name: 'comentario_extra_hora_trabajo',
      title: 'Comentario extra hora de trabajo',
      type: 'text',
    },
    {
      name: 'hoy_comi',
      title: 'Hoy comí',
      type: 'array',
      of: [{ type: 'string' }],
      validation: Rule => Rule.required(),
      options: {
        list: [
          { title: 'Todo', value: 'Todo' },
          { title: 'Una parte', value: 'Una parte' },
          { title: 'Nada', value: 'Nada' },
          { title: 'Sin Especificar', value: 'Sin Especificar' }
        ],
      },
    },
    {
      name: 'comentario_extra_hoy_comi',
      title: 'Comentario extra hoy comí',
      type: 'text',
    },
    {
      name: 'en_el_sanitario',
      title: 'En el sanitario',
      type: 'array',
      validation: Rule => Rule.required(),
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Orine', value: 'Orine' },
          { title: 'Evacue', value: 'Evacue' },
          { title: 'Sin Especificar', value: 'Sin Especificar' }
        ],
      },
    },
    {
      name: 'comentario_extra_sanitario',
      title: 'Comentario extra baño',
      type: 'text',
    },
    {
      name: 'se_necesita',
      title: 'Se necesita',
      type: 'array',
      validation: Rule => Rule.required(),
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Pañales', value: 'Pañales' },
          { title: 'Muda de ropa', value: 'Muda de ropa' },
          { title: 'Leche', value: 'Leche' },
          { title: 'Toallitas humedas', value: 'Toallitas humedas' },
          { title: 'Actualmente Nada', value: 'Actualmente Nada' }
        ],
      },
    },
    {
      name: 'comentario_extra_necesita',
      title: 'Comentario extra necesita',
      type: 'text',
    },
    // {
    //   name: 'fecha_creacion',
    //   title: 'Fecha de creación',
    //   type: 'datetime',
    //   readOnly: true,
    //   initialValue: () => Date.now(),
    //   validation: (Rule) => Rule.required(),
    // },
    // {
    //   name: 'fecha_ultima_actualizacion',
    //   title: 'Fecha de última actualización',
    //   type: 'datetime',
    // },
  ],
};
