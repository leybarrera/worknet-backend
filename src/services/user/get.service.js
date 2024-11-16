import { User } from '../../lib/conn.js'

const getAll = async () => {
  const users = await User.findAll({})
  return { code: 200, users }
}
const getOnlyInactives = async () => {
  const users = await User.findAll({
    where: { isActive: false, isDeleted: false },
  })
  return { code: 200, users }
}

const getOnlyActives = async () => {
  const users = await User.findAll({
    where: { isActive: true, isDeleted: false },
  })
  return { code: 200, users }
}

const getOnlyValids = async () => {
  const users = await User.findAll({
    where: { isActive: true, isDeleted: false },
  })
  return { code: 200, users }
}

const getById = async (id) => {
  const user = await User.findOne({
    where: {
      id,
      isActive: true,
      isDeleted: false,
    },
  })
  return user
    ? { code: 200, user }
    : { code: 404, message: 'Usuario no encontrado' }
}

const getByEmail = async (email) => {
  const user = await User.findOne({
    where: {
      email,
      isActive: true,
      isDeleted: false,
    },
  })
  return user
    ? { code: 200, user }
    : { code: 404, message: 'Usuario no encontrado' }
}

export {
  getAll,
  getById,
  getOnlyActives,
  getOnlyInactives,
  getOnlyValids,
  getByEmail,
}
