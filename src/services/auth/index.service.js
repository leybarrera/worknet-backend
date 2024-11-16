import { User } from '../../lib/conn.js'
import { jwtUtil, bcryptUtil } from '../../utils/index.utils.js'

const login = async (email, password) => {
  const user = await User.findOne({
    where: {
      email,
    },
  })

  if (!user) return { code: 401, message: 'Credenciales incorrectas.' }

  if (user.isDeleted)
    return {
      code: 401,
      message: 'Credenciales incorrectas. Usuario no encontrado',
    }

  if (!user.isActive)
    return {
      code: 401,
      message: 'Credenciales incorrectas. Cuenta no activada.',
    }

  const { password: passwordUser, ...userFound } = user.toJSON()
  const isValidPassword = await bcryptUtil.comparePassword(
    password,
    passwordUser
  )

  if (!isValidPassword)
    return { code: 401, message: 'Credenciales incorrectas.' }

  const token = jwtUtil.generateToken({
    id: userFound.id,
    email: userFound.email,
    role: userFound.RoleId,
  })

  return { code: 200, token, user: userFound }
}

export default { login }
