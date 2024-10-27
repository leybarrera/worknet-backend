import { User } from '../../lib/conn.js'

const getAll = async () => {
  const users = await User.findAll({})
  return { code: 200, users }
}
const getNotActive = async () => {
  const users = await User.findAll({ where: { isActive: false } })
  return { code: 200, users }
}
const getById = async (id) => {
  const user = await User.findOne({
    where: {
      id,
      isDeleted: false,
    },
  })
  return user
    ? { code: 200, user }
    : { code: 404, message: 'Usuario no encontrado' }
}

export { getAll, getById, getNotActive }
