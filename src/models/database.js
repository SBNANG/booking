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

async function syncAll(force = false) {
  await sequelize.sync({ force: force })
}

async function syncOneToMany(One, Many, fieldName) {
  One.hasMany(Many, {
    foreignKey: {
      name: fieldName,
      field: fieldName,
      allowNull: false,
    },
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE',
  })
}

module.exports = { sequelize, syncAll, syncOneToMany }
