require('dotenv').config()
const buildApp = require('./src/app')
const config = require('./src/config')
const { syncAll, syncOneToMany, Room, RoomType } = require('./src/models')

const startApp = async () => {
  const appOptions = {
    logger: true,
  }

  const app = await buildApp(appOptions)

  await syncOneToMany(RoomType, Room, 'room_type_id')

  await syncAll()

  try {
    await app.listen(config.serverport, config.serverHost)
    console.log('Server is running')
  } catch (error) {
    throw error
  }
}

startApp()
