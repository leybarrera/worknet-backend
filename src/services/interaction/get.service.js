import { Interaction } from '../../lib/conn.js'

const getAll = async () => {
  const interactions = await Interaction.findAll({})
  return { code: 200, interactions }
}
const getById = async (id) => {
  const interaction = await Interaction.findOne({
    where: { id },
  })
  return interaction
    ? { code: 200, interaction }
    : { code: 404, message: 'Interacción no encontrada' }
}
const getByType = async (interaction_type) => {
  const interactions = await Interaction.findAll({
    where: { interaction_type },
  })
  return interactions
    ? { code: 200, interactions }
    : { code: 404, message: 'Interacción no encontrada' }
}
export { getAll, getById, getByType }
