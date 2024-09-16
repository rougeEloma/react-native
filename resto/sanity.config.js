import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Resto',

  projectId: 'uwag4t3g',
  dataset: 'restoset',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
