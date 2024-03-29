import {DocumentSheetIcon} from '@sanity/icons'

export default {
  name: 'report',
  title: 'Reportes',
  type: 'document',
  icon: DocumentSheetIcon,
  preview: {
    select: {
      title: 'report_for.full_name',
    },
  },
  fields: [
    {
      name: 'report_for',
      title: 'Reporte para',
      type: 'reference',
      to: [{ type: 'child' }],
      validation: Rule => Rule.required(),
    },
    {
      name: 'today_i_felt',
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
      name: 'during_work_hours_i_was',
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
      name: 'extra_comment_work_hour',
      title: 'Comentario extra hora de trabajo',
      type: 'text',
    },
    {
      name: 'today_i_ate',
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
      name: 'extra_comment_today_i_ate',
      title: 'Comentario extra hoy comí',
      type: 'text',
    },
    {
      name: 'in_the_bathroom',
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
      name: 'extra_comment_bathroom',
      title: 'Comentario extra baño',
      type: 'text',
    },
    {
      name: 'needs',
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
      name: 'extra_comment_needs',
      title: 'Comentario extra necesita',
      type: 'text',
    },
  ],
};
