import { User } from '../../lib/conn.js'

const getActiveUsers = async () => {
  const users = await User.findAll({
    where: {
      isActive: true,
      isDeleted: false,
    },
  })
  return { code: 200, users }
}

const getAll = async () => {
  const users = await User.findAll()
  return { code: 200, users }
}

const getById = async (id) => {
  if (!id) return { code: 400, message: 'El id es requerido' }
  const user = await User.findOne({
    where: {
      id,
    },
    exclude: ['password'],
  })

  if (!user) return { code: 400, message: 'El usuario no existe' }

  if (!user.isActive) return { code: 400, message: 'El usuario no esta activo' }

  if (user.isDeleted) return { code: 400, message: 'El usuario esta eliminado' }
  return { code: 200, user }
}
const getByEmail = async (email) => {
  if (!email) return { code: 400, message: 'El email es requerido' }
  const user = await User.findOne({
    where: {
      email,
    },
    exclude: ['password'],
  })

  if (!user) return { code: 400, message: 'El usuario no existe' }

  if (!user.isActive) return { code: 400, message: 'El usuario no esta activo' }

  if (user.isDeleted) return { code: 400, message: 'El usuario esta eliminado' }
  return { code: 200, user }
}
const getByDni = async (dni) => {
  if (!dni) return { code: 400, message: 'El dni es requerido' }
  const user = await User.findOne({
    where: {
      dni,
    },
    exclude: ['password'],
  })

  if (!user) return { code: 400, message: 'El usuario no existe' }

  if (!user.isActive) return { code: 400, message: 'El usuario no esta activo' }

  if (user.isDeleted) return { code: 400, message: 'El usuario esta eliminado' }
  return { code: 200, user }
}

export { getActiveUsers, getAll, getById, getByEmail, getByDni }
