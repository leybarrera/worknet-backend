import { Op } from 'sequelize'
import { User } from '../../lib/conn.js'
const userExsists = async (email, phone, dni, username) => {
  const user = await User.findOne({
    where: {
      [Op.or]: [{ email }, { phone }, { dni }, { username }],
    },
  })
  return user
}

// Registrar nuevo usuario
const registerUser = async (user) => {
  const { email, phone, username, password, rol_id } = user
  const userFound = await userExsists(email, phone, dni, username)

  if (userFound)
    return {
      code: 400,
      message: 'Ya existe un usuario con ese email, telefono o dni',
    }

  const user = await User.create({
    ...user,
    password: await bcryptUtil.hashPassword(password),
  })

  return user
    ? { code: 201, message: 'Usuario registrado exitosamente' }
    : { code: 400, message: 'Error al registrar el usuario' }
}

export default registerUser
