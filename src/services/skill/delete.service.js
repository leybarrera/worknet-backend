import { Skill } from '../../lib/conn'

const remove = async (id) => {
  const skill = await Skill.findOne({
    where: {
      id,
      isDeleted: false,
    },
  })

  if (!skill) return { code: 404, message: 'Habilidad no encontrada' }

  skill.isDeleted = true
  await skill.save()
  return { code: 200, message: 'Habilidad eliminada con éxito' }
}

export default remove
