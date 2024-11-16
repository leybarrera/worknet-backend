import { Role, User } from '../../lib/conn.js'
import { bcryptUtil } from '../../utils/index.utils.js'

const userExistsByEmail = async (email) => {
  const user = await User.findOne({
    where: {
      email,
    },
  })
  return user
}

const validateRole = async (id) => {
  const role = await Role.findOne({
    where: {
      id,
      isDeleted: false,
    },
  })
  return role
}

const register = async (data) => {
  const { email, password } = data

  if (await userExistsByEmail(email))
    return { code: 400, message: 'Ya existe otro usuario con este email' }

  const hash = await bcryptUtil.hashPassword(password)

  const user = await User.create({
    ...data,
    password: hash,
  })

  return user
    ? { code: 201, message: 'Usuario registrado con éxito' }
    : {
        code: 400,
        message:
          'No se pudo registrar el usuario. Por favor, inténtelo más tarde',
      }
}
export default register
