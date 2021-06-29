const Fastify = require('fastify')
const router = require('./router')

const buildApp = async (options = {}) => {
  const app = Fastify(options)

  app.register(require('fastify-cors'))

  router.RoomTypeRoutes(app)
  router.RoomRoutes(app)
  router.CustomerRoutes(app)

  return app
}

module.exports = buildApp
