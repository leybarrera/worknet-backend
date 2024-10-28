import { Evaluation, JobOffer, User } from '../../lib/conn.js'

const getAll = async () => {
  const evaluations = await Evaluation.findAll({
    include: [User, JobOffer],
  })
  return { code: 200, evaluations }
}

const getById = async (id) => {
  const evaluation = await Evaluation.findOne({
    where: {
      id,
    },
    include: [User, JobOffer],
  })
  return evaluation
    ? { code: 200, evaluation }
    : { code: 404, message: 'Evaluación no encontrada' }
}

export { getAll, getById }
