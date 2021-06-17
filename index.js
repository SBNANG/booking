require('dotenv').config()
const buildApp = require('./src/app')
const config = require('./src/config')

const startApp = async () => {
  const appOptions = {
    logger: true,
  }

  const app = await buildApp(appOptions)

  try {
    await app.listen(config.serverport, config.serverHost)
    console.log('Server is running')
  } catch (error) {
    throw error
  }
}

startApp()
