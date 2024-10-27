import { Message } from '../../lib/conn'

const updateIsRead = async (id) => {
  const message = await Message.findOne({
    where: {
      id,
    },
  })

  if (!message) return { code: 400, message: 'Mensaje no existe' }

  const [rows] = await message.update({ isRead: true })
  return rows > 0
    ? { code: 200, message: 'Mensaje actualizado con éxito' }
    : {
        code: 400,
        message:
          'No se pudo actualizar el mensaje. Por favor, inténtelo más tarde',
      }
}

export default updateIsRead
