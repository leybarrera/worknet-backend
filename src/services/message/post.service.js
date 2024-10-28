import { User } from '../../lib/conn.js'

const userReciṕientExists = async (id) => {
  const user = await User.findOne({
    where: { id, isActive: true, isDeleted: false },
  })
  return user
}
const userSenderExists = async (id) => {
  const user = await User.findOne({
    where: { id, isActive: true, isDeleted: false },
  })
  return user
}

const register = async (data) => {
  const { RecipientId, SenderId } = data

  if (!(await userReciṕientExists(RecipientId)))
    return { code: 400, message: 'Usuario destinatario no encontrado' }

  if (!(await userSenderExists(SenderId)))
    return { code: 400, message: 'Usuario remitente no encontrado' }

  const message = await User.create(data)
  return message
    ? { code: 201, message: 'Mensaje enviado.' }
    : {
        code: 400,
        message: 'No se pudo enviar la oferta. Por favor, inténtelo más tarde',
      }
}
export default register
