const { Room } = require('../models')

const getRooms = async (req, reply) => {
  const rooms = await Room.findAll()

  reply.send({
    data: rooms,
  })
}

const getRoom = async (req, reply) => {
  const id = req.params.id
  const room = await Room.findByPk(id)

  reply.send({
    data: room,
  })
}

const addRoom = async (req, reply) => {
  const { detail, bed_size, price, room_type_id } = req.body

  const room = await Room.create({
    detail,
    bed_size,
    price,
    room_type_id,
  })

  reply.send({
    data: room,
  })
}

const editRoom = async (req, reply) => {
  const id = req.params.id
  const { detail, bed_size, price, room_type_id } = req.body

  let room = await Room.findByPk(id)
  room = {
    detail,
    bed_size,
    price,
    room_type_id,
  }

  await Room.update(
    {
      detail,
      bed_size,
      price,
      room_type_id,
    },
    { where: { id: id } }
  )

  reply.send({
    data: room,
  })
}

const deleteRoom = async (req, reply) => {
  const id = req.params.id

  await Room.findByPk(id)

  await Room.destroy({ where: { id: id } })

  reply.statusCode = 204
}

module.exports = {
  getRooms,
  getRoom,
  addRoom,
  editRoom,
  deleteRoom,
}
