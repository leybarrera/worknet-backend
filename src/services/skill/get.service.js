import { Skill } from '../../lib/conn.js'

const getAll = async () => {
  const skills = await Skill.findAll()
  return { code: 200, skills }
}
const getById = async (id) => {
  const skill = await Skill.findOne({
    where: {
      id,
      isDeleted: false,
    },
  })
  return skill
    ? { code: 200, skill }
    : { code: 404, message: 'Habilidad no encontrada' }
}

export { getAll, getById }
