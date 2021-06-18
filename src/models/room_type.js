const { DataTypes } = require('sequelize')
const { sequelize } = require('./database')

const RoomType = sequelize.define('room_type', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
})

module.exports = RoomType
