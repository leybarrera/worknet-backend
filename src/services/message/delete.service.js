import { Message } from '../../lib/conn.js'

const remove = async (id) => {
  const rowsDeleted = await Message.destroy({
    where: {
      id,
    },
  })

  return rowsDeleted > 0
    ? { code: 200, message: 'Mensaje eliminado con éxito' }
    : { code: 404, message: 'Mensaje no encontrado' }
}

export default remove
