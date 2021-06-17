const { Sequelize } = require('sequelize')
const config = require('../config')

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    host: config.databaseHost,
    dialect: 'mysql',
    logging: false,
  }
)

async function syncAll() {
  await sequelize.sync({ force: true })
}

module.exports = { sequelize, syncAll }
