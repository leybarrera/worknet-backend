import { Op } from 'sequelize'
import { User } from '../../lib/conn.js'

const existOtherUser = async (id, phone) => {
  const user = await User.findOne({
    where: {
      phone,
      [Op.not]: { id },
    },
  })
  return user
}

const updateUser = async (id, data) => {
  const { phone, password } = data
  const user = await User.findOne({
    where: {
      id,
      isActive: true,
      isDeleted: false,
    },
  })

  if (!user) return { code: 400, message: 'Usuario no encontrado' }

  if (phone && (await existeOtherUser(id, phone)))
    return { code: 400, message: 'Ya existe un usuario con ese telefono' }

  if (password) {
    data.password = await bcryptUtil.hashPassword(password)
  }

  await user.update(data)
  return { code: 200, message: 'Usuario actualizado exitosamente' }
}

const enableUser = async (id) => {
  const user = await User.findOne({
    where: {
      id,
      isActive: false,
      isDeleted: false,
    },
  })

  if (!user) return { code: 400, message: 'Usuario no encontrado' }
  user.isActive = true
  await user.save()
  return { code: 200, message: 'Usuario habilitado exitosamente' }
}

const disableUser = async (id) => {
  const user = await User.findOne({
    where: {
      id,
      isActive: true,
      isDeleted: false,
    },
  })

  if (!user) return { code: 400, message: 'Usuario no encontrado' }
  user.isActive = false
  await user.save()
  return { code: 200, message: 'Usuario deshabilitado exitosamente' }
}

export { updateUser, enableUser, disableUser }
