import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {esESLocale} from '@sanity/locale-es-es'


export default defineConfig({
  name: 'default',
  title: 'Guarderia Danne',

  projectId: '9k7dl08d',
  dataset: process.env.SANITY_ENVIROMENT || 'development',

  plugins: [structureTool(), visionTool(),esESLocale()],

  schema: {
    types: schemaTypes,
  },
})
