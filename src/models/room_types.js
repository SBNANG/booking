const { DataTypes } = require('sequelize')
const { sequelize } = require('./database')

const RoomTypes = sequelize.define('RoomType', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
})

module.exports = RoomTypes
