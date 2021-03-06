const { RoomType, Room, Customer, Authority } = require('./controllers')

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

const CustomerRoutes = (app) => {
  app.get('/customers', Customer.getCustomers)
  app.get('/customers/:id', Customer.getCustomer)
  app.post('/customers', Customer.addCustomer)
  app.put('/customers/:id', Customer.editCustomer)
  app.delete('/customers/:id', Customer.deleteCustomer)
}

const AuthorityRoutes = (app) => {
  app.get('/authorities', Authority.getAuthories)
  app.get('/authorities/:id', Authority.getAuthority)
  app.post('/authorities', Authority.addAuthority)
  app.put('/authorities/:id', Authority.editAuthority)
  app.delete('/authorities/:id', Authority.deleteAuthority)
}

module.exports = {
  RoomTypeRoutes,
  RoomRoutes,
  CustomerRoutes,
  AuthorityRoutes,
}
