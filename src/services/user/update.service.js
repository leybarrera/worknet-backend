import { User } from '../../lib/conn.js'
import { bcryptUtil } from '../../utils/index.utils.js'

const existOtherUser = async (id, email) => {
  const user = await User.findOne({
    where: {
      email: {
        [Op.iLike]: email,
      },
      id: {
        [Op.not]: id,
      },
    },
  })
  return user
}
const update = async (id, data) => {
  const user = await User.findOne({
    where: {
      id,
      isDeleted: false,
    },
  })

  if (!user) return { code: 404, message: 'Usuario no encontrado' }

  const { email, password } = data
  if (email && (await existOtherUser(id, email)))
    return { code: 400, message: 'Ya existe otro usuario con este email' }

  if (password) data.password = await bcryptUtil.hashPassword(password)

  const [rows] = await user.update(data)
  return rows > 0
    ? { code: 200, message: 'Usuario actualizado con éxito' }
    : {
        code: 400,
        message:
          'No se pudo actualizar el usuario. Por favor, inténtelo más tarde',
      }
}

export default update
