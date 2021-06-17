const { roomTypes } = require('./controllers')

const roomTypesRoutes = (app) => {
  app.get('/room_types', roomTypes.getRoomTypes)
  app.get('/room_types/:id', roomTypes.getRoomType)
  app.post('/room_types', roomTypes.addRoomType)
  app.put('/room_types/:id', roomTypes.editRoomType)
  app.delete('/room_types/:id', roomTypes.deleteRoomType)
}

module.exports = {
  roomTypesRoutes,
}
