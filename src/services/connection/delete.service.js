import { Connection } from '../../lib/conn.js'

const remove = async (UserSourceId, UserTargetId) => {
  const connection = await Connection.findOne({
    where: {
      UserSourceId,
      UserTargetId,
    },
  })
  if (!connection) return { code: 400, message: 'Solicitud no existe' }

  const rowsDeleted = await Connection.destroy({
    where: {
      UserSourceId,
      UserTargetId,
    },
  })

  return rowsDeleted > 0
    ? { code: 200, message: 'Ya no sigues a este usuario' }
    : {
        code: 400,
        message: 'No se pudo dejar de seguir. Inténtelo más tarde',
      }
}

export default remove
