const RoomType = require('./room_type')
const Room = require('./room')
const { sequelize, syncAll, syncOneToMany } = require('./database')

module.exports = {
  sequelize,
  syncAll,
  syncOneToMany,
  RoomType,
  Room,
}
