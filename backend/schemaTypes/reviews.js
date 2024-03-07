import {CommentIcon} from '@sanity/icons'


export default {
    name: 'review',
    title: 'Opiniones',
    type: 'document',
    icon: CommentIcon,
    fields: [
      {
        name: 'name',
        title: 'Nombre',
        type: 'string',
        validation: Rule => Rule.required()
      },
      {
        name: 'description',
        title: 'Descripción',
        type: 'text',
        validation: Rule => Rule.required()
      },
      {
        name: 'score',
        title: 'Puntuación',
        type: 'number',
        validation: Rule => Rule.required().min(1).max(5)
      }
    ]
  }
