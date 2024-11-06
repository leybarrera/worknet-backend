import { Recommendation } from '../../lib/conn'

const update = async (id, data) => {
  const recommendation = await Recommendation.findOne({
    where: {
      id,
    },
  })

  if (!recommendation)
    return { code: 404, message: 'Recomendacion no encontrada' }

  const [rows] = await Recommendation.update(data, {
    where: {
      id,
    },
  })
  return rows > 0
    ? { code: 200, message: 'Recomendacion actualizada con éxito' }
    : {
        code: 400,
        message:
          'No se pudo actualizar la recomendación. Por favor, inténtelo más tarde',
      }
}

export default update
