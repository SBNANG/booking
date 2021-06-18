const { RoomType } = require('../models')

const getRoomTypes = async (req, reply) => {
  const roomTypes = await RoomType.findAll()

  reply.send({
    data: roomTypes,
  })
}

const getRoomType = async (req, reply) => {
  const id = req.params.id
  const roomTypes = await RoomType.findByPk(id)

  reply.send({
    data: roomTypes,
  })
}

const addRoomType = async (req, reply) => {
  const name = req.body.name

  const roomTypes = await RoomType.create({
    name: name,
  })

  reply.statusCode = 201
  reply.send({
    data: roomTypes,
  })
}

const editRoomType = async (req, reply) => {
  const id = req.params.id
  const name = req.body.name

  let roomTypes = await RoomType.findByPk(id)
  roomTypes.name = name

  await RoomType.update({ name: name }, { where: { id: id } })

  reply.send({
    data: roomTypes,
  })
}

const deleteRoomType = async (req, reply) => {
  const id = req.params.id

  await RoomType.findByPk(id)

  await RoomType.destroy({ where: { id: id } })

  reply.statusCode = 204
}

module.exports = {
  getRoomTypes,
  getRoomType,
  addRoomType,
  editRoomType,
  deleteRoomType,
}
