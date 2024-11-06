import { Recommendation, User } from '../../lib/conn.js'

const userExists = async (id) => {
  const user = await User.findOne({
    where: {
      id,
      isActive: true,
      isDeleted: false,
    },
  })
  return user
}

const register = async (data) => {
  const { UserId } = recommendation

  if (!(await userExists(UserId)))
    return { code: 400, message: 'Usuario no encontrado' }
  const recommendation = await Recommendation.create(data)

  if (!recommendation) return { code: 400, message: 'No se pudo registrar' }
  return { code: 200, data: recommendation }
}
export default register
