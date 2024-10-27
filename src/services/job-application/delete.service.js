import { JobApplication } from '../../lib/conn.js'

const remove = async (id) => {
  const rowsDeleted = await JobApplication.destroy({
    where: {
      id,
    },
  })

  return rowsDeleted > 0
    ? { code: 200, message: 'Solicitud de trabajo eliminada con éxito' }
    : { code: 404, message: 'Solicitud de trabajo no encontrada' }
}

export default remove
