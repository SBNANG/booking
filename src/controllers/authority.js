const { Authority } = require('../models')
const bcrypt = require('bcrypt')

const getAuthories = async (req, reply) => {
  const authorities = await Authority.findAll()

  reply.send({
    data: authorities,
  })
}

const getAuthority = async (req, reply) => {
  const id = req.params.id
  const authority = await Authority.findByPk(id)

  reply.send({
    data: authority,
  })
}

const addAuthority = async (req, reply) => {
  const { email, password, name, surname, phone } = req.body

  const hashPassword = await bcrypt.hash(password, 10)

  const authority = await Authority.create({
    email: email,
    password: hashPassword,
    name: name,
    surname: surname,
    phone: phone,
  })

  reply.send({
    data: authority,
  })
}

const editAuthority = async (req, reply) => {
  const id = req.params.id
  const { email, password, name, surname, phone } = req.body

  const authority = await Authority.findByPk(id)
  if (authority === null) {
    reply.code(400).send({
      status: 'fail',
      message: 'ไม่มี',
    })
  }

  const hashPassword = await bcrypt.hash(password, 10)

  await Authority.update(
    {
      email: email,
      password: hashPassword,
      name: name,
      surname: surname,
      phone: phone,
    },
    { where: { id: id } }
  )

  reply.send({
    status: 'success',
    data: {
      email,
      name,
      surname,
      phone,
    },
  })
}

const deleteAuthority = async (req, reply) => {
  const id = req.params.id

  const authority = await Authority.findByPk(id)
  if (authority === null) {
    reply.code(400).send({
      status: 'fail',
      message: 'ไม่มี',
    })
  }

  await Authority.destroy({ where: { id: id } })

  reply.code(204)
}

module.exports = {
  getAuthories,
  getAuthority,
  addAuthority,
  editAuthority,
  deleteAuthority,
}
