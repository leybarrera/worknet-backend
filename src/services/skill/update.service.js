import { Skill } from '../../lib/conn.js'

const existOtherSkill = async (id, name) => {
  const skill = await Skill.findOne({
    where: {
      name,
      isDeleted: false,
    },
  })
  return skill
}

const update = async (id, data) => {
  if (await existOtherSkill(id, data.name))
    return { code: 400, message: 'Ya existe una habilidad con ese nombre' }

  const skill = await Skill.findOne({
    where: {
      id,
      isDeleted: false,
    },
  })

  if (!skill) return { code: 404, message: 'Habilidad no encontrada' }

  const [rows] = await skill.update(data)
  return rows > 0
    ? { code: 200, message: 'Habilidad actualizada con éxito' }
    : {
        code: 400,
        message:
          'No se pudo actualizar la habilidad. Por favor, inténtelo más tarde',
      }
}

export default update
