import { Recommendation } from '../../lib/conn.js'

const getAll = async () => {
  const recommendations = await Recommendation.findAll()
  return { code: 200, recommendations }
}

const getById = async (id) => {
  const recommendation = await Recommendation.findOne({
    where: {
      id,
    },
  })

  return recommendation
    ? { code: 200, recommendation }
    : { code: 404, message: 'Recomendacion no encontrada' }
}

export { getAll, getById }
