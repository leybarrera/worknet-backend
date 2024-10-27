import { User } from '../../lib/conn.js'

const userTargetExists = async (id) => {
  const user = await User.findOne({
    where: { id, isActive: true, isDeleted: false },
  })
  return user
}
const userSourceExists = async (id) => {
  const user = await User.findOne({
    where: { id, isActive: true, isDeleted: false },
  })
  return user
}
const register = async (data) => {
  const { UserSourceId, UserTargetId } = data

  if (!(await userSourceExists(UserSourceId)))
    return { code: 400, message: 'Usuario fuente no encontrado' }

  if (!(await userTargetExists(UserTargetId)))
    return { code: 400, message: 'Usuario destino no encontrado' }

  const connection = await User.create(data)
  return connection
    ? { code: 201, message: 'Solicitud enviada.' }
    : {
        code: 400,
        message:
          'No se pudo enviar la solicitud. Por favor, inténtelo más tarde',
      }
}
export default register
