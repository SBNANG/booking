const { Customer } = require('../models')
const bcrypt = require('bcrypt')

const getCustomers = async (req, reply) => {
  const customers = await Customer.findAll()

  reply.send({
    data: customers,
  })
}

const getCustomer = async (req, reply) => {
  const id = req.params.id
  const customer = await Customer.findByPk(id)

  reply.send({
    data: customer,
  })
}

const addCustomer = async (req, reply) => {
  const { email, password, name, surname, phone } = req.body

  const hashPassword = await bcrypt.hash(password, 10)

  const customer = await Customer.create({
    email: email,
    password: hashPassword,
    name: name,
    surname: surname,
    phone: phone,
  })

  reply.send({
    data: customer,
  })
}

const editCustomer = async (req, reply) => {
  const id = req.params.id
  const { email, password, name, surname, phone } = req.body

  const customer = await Customer.findByPk(id)
  if (customer === null) {
    reply.code(400).send({
      status: 'fail',
      message: 'ไม่มี',
    })
  }

  const hashPassword = await bcrypt.hash(password, 10)

  await Customer.update(
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

const deleteCustomer = async (req, reply) => {
  const id = req.params.id

  const customer = await Customer.findByPk(id)
  if (customer === null) {
    reply.code(400).send({
      status: 'fail',
      message: 'ไม่มี',
    })
  }

  await Customer.destroy({ where: { id: id } })

  reply.code(204)
}

module.exports = {
  getCustomers,
  getCustomer,
  addCustomer,
  editCustomer,
  deleteCustomer,
}
