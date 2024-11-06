import { Recommendation } from '../../lib/conn.js'

const remove = async (id) => {
  const recommendation = await Recommendation.findOne({
    where: {
      id,
    },
  })

  if (!recommendation)
    return { code: 404, message: 'Recomendacion no encontrada' }

  const rowsDeleted = await recommendation.destroy()
  return rowsDeleted > 0
    ? { code: 200, message: 'Recomendacion eliminada con éxito' }
    : {
        code: 400,
        message:
          'No se pudo eliminar la recomendación. Por favor, inténtelo más tarde',
      }
}

export default remove
