import { Connection } from '../../lib/conn.js'

const updateStatus = async (id, data) => {
  const connection = await Connection.findOne({
    where: {
      id,
    },
  })

  if (!connection) return { code: 400, message: 'Solicitud no existe' }

  const [rows] = await connection.update(data)

  return rows > 0
    ? { code: 200, message: 'Solicitud actualizada con éxito' }
    : {
        code: 400,
        message: 'No se pudo actualizar la solicitud. Inténtelo más tarde',
      }
}

export default updateStatus
