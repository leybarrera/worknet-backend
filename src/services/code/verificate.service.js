import { Code, User } from '../../lib/conn.js'

const verificateCode = async (code, email) => {
  const user = await User.findOne({
    where: {
      email,
    },
  })

  const codeFound = await Code.findOne({
    where: {
      code,
      email,
    },
  })

  if (!codeFound) return { code: 400, message: 'Código no válido' }

  if (codeFound.isUsed)
    return { code: 400, message: 'Este código ya fue utlizado' }

  codeFound.isUsed = true
  user.isActive = true
  await codeFound.save()
  await user.save()
  return { code: 200, user, message: 'Cuenta activada con éxito' }
}

export default verificateCode
