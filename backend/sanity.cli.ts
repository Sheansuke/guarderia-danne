import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: '9k7dl08d',
    dataset: process.env.SANITY_ENVIROMENT || 'development'
  },
  
})
