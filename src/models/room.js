const { DataTypes } = require('sequelize')
const { sequelize } = require('./database')

const Room = sequelize.define('room', {
  detail: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  bed_size: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  room_type_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
})

module.exports = Room
