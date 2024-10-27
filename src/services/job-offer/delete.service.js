import { JobOffer } from '../../lib/conn.js'

const remove = async (id) => {
  const rowsDeleted = await JobOffer.destroy({
    where: {
      id,
    },
  })

  return rowsDeleted > 0
    ? { code: 200, message: 'Oferta de trabajo eliminada con éxito' }
    : { code: 404, message: 'Oferta de trabajo no encontrada' }
}

export default remove
