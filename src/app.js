const Fastify = require('fastify')
const router = require('./router')

const buildApp = async (options = {}) => {
  const app = Fastify(options)

  router.RoomTypeRoutes(app)
  router.RoomRoutes(app)

  return app
}

module.exports = buildApp
