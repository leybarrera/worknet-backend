import { JobApplication } from '../../lib/conn.js'

const deleteByID = async (id) => {
  const rowsDeleted = await JobApplication.destroy({
    where: {
      id,
    },
  })
  return rowsDeleted > 0
    ? { code: 200, message: 'Solicitud de trabajo eliminada con éxito' }
    : { code: 404, message: 'Solicitud de trabajo no encontrada' }
}

const remove = async (data) => {
  const { UserId, JobOfferId } = data
  const rowsDeleted = await JobApplication.destroy({
    where: {
      UserId,
      JobOfferId,
    },
  })

  return rowsDeleted > 0
    ? { code: 200, message: 'Solicitud de trabajo eliminada con éxito' }
    : { code: 404, message: 'Solicitud de trabajo no encontrada' }
}

export { deleteByID, remove }
