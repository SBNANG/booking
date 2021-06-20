const RoomType = require('./room_type')
const Room = require('./room')
const Customer = require('./customer')
const Authority = require('./authority')
const { sequelize, syncAll, syncOneToMany } = require('./database')

module.exports = {
  sequelize,
  syncAll,
  syncOneToMany,
  RoomType,
  Room,
  Customer,
  Authority,
}
