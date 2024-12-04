import { Company, User } from '../../lib/conn.js'
import { jwtUtil, bcryptUtil } from '../../utils/index.utils.js'

const login = async (email, password) => {
  try {
    // Buscar primero en usuarios
    const user = await User.findOne({ where: { email } })

    if (user) {
      if (user.isDeleted) {
        return {
          code: 401,
          message: 'Credenciales incorrectas. Usuario no encontrado.',
        }
      }

      if (!user.isActive) {
        return {
          code: 401,
          message: 'Credenciales incorrectas. Cuenta no activada.',
        }
      }

      const isValidPassword = await bcryptUtil.comparePassword(
        password,
        user.password
      )

      console.log(isValidPassword)

      if (!isValidPassword) {
        return { code: 401, message: 'Credenciales incorrectas.' }
      }

      const { password: _, ...userFound } = user.toJSON()
      const token = jwtUtil.generateToken({
        id: userFound.id,
        email: userFound.email,
        role: userFound.role,
      })

      return { code: 200, token, user: userFound }
    }

    // Si no está en usuarios, buscar en empresas
    const company = await Company.findOne({ where: { email } })

    if (!company) {
      return {
        code: 401,
        message: 'Credenciales incorrectas. Empresa y/o usuario no encontrado.',
      }
    }

    if (company.isDeleted) {
      return {
        code: 401,
        message: 'Credenciales incorrectas. Empresa no encontrada.',
      }
    }

    if (!company.isActive) {
      return {
        code: 401,
        message: 'Credenciales incorrectas. Empresa no activada.',
      }
    }

    const isValidPassword = await bcryptUtil.comparePassword(
      password,
      company.password
    )
    if (!isValidPassword) {
      return { code: 401, message: 'Credenciales incorrectas.' }
    }

    const { password: _, ...companyFound } = company.toJSON()
    const token = jwtUtil.generateToken({
      id: companyFound.id,
      email: companyFound.email,
      ruc: companyFound.ruc,
    })

    return { code: 200, token, company: companyFound }
  } catch (error) {
    console.error('Error during login:', error)
    return { code: 500, message: 'Error interno del servidor.' }
  }
}

const accountActivation = async (token) => {
  const { id } = jwtUtil.verifyToken(token)
  const user = await User.findOne({ where: { id } })
  if (user) {
    user.isActive = true
    await user.save()
    return { code: 200, user, message: 'Cuenta activada con éxito' }
  }

  const company = await Company.findOne({ where: { id } })
  if (company) {
    company.isActive = true
    await company.save()
    return { code: 200, company, message: 'Cuenta activada con éxito' }
  }

  return { code: 404, message: 'Cuenta no encontrada' }
}

export default { login, accountActivation }
