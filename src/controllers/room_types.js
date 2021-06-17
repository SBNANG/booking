const { database, roomType } = require('../models')

const getRoomTypes = async (req, reply) => {
  const roomTypes = await roomType.findAll()

  reply.send({
    data: roomTypes,
  })
}

const getRoomType = async (req, reply) => {
  const id = req.params.id
  const roomTypes = await roomType.findByPk(id)

  reply.send({
    data: roomTypes,
  })
}

const addRoomType = async (req, reply) => {
  const name = req.body.name

  const roomTypes = await roomType.create({
    name: name,
  })

  reply.send({
    data: roomTypes,
  })
}

const editRoomType = async (req, reply) => {
  const id = req.params.id
  const name = req.body.name

  let roomTypes = await roomType.findByPk(id)
  roomTypes.name = name

  await roomType.update({ name: name }, { where: { id: id } })

  reply.send({
    data: roomTypes,
  })
}

const deleteRoomType = async (req, reply) => {
  const id = req.params.id

  await roomType.findByPk(id)

  await roomType.destroy({ where: { id: id } })

  reply.statusCode = 204
}

module.exports = {
  getRoomTypes,
  getRoomType,
  addRoomType,
  editRoomType,
  deleteRoomType,
}
