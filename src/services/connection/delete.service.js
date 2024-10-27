import { Connection } from '../../lib/conn'

const remove = async (id) => {
  const connection = await Connection.findOne({
    where: {
      id,
    },
  })
  if (!connection) return { code: 400, message: 'Solicitud no existe' }

  const rowsDeleted = await Connection.destroy({
    where: {
      id,
    },
  })

  return rowsDeleted > 0
    ? { code: 200, message: 'Solicitud eliminada con éxito' }
    : {
        code: 400,
        message: 'No se pudo eliminar la solicitud. Inténtelo más tarde',
      }
}

export default remove
