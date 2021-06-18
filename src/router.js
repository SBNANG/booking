const { RoomType, Room } = require('./controllers')

const RoomTypeRoutes = (app) => {
  app.get('/room_types', RoomType.getRoomTypes)
  app.get('/room_types/:id', RoomType.getRoomType)
  app.post('/room_types', RoomType.addRoomType)
  app.put('/room_types/:id', RoomType.editRoomType)
  app.delete('/room_types/:id', RoomType.deleteRoomType)
}

const RoomRoutes = (app) => {
  app.get('/rooms', Room.getRooms)
  app.get('/rooms/:id', Room.getRoom)
  app.post('/rooms', Room.addRoom)
  app.put('/rooms/:id', Room.editRoom)
  app.delete('/rooms/:id', Room.deleteRoom)
}

module.exports = {
  RoomTypeRoutes,
  RoomRoutes,
}
