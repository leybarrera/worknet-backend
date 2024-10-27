import { Skill } from '../../lib/conn'

const skillExists = async (name) => {
  const skill = await Skill.findOne({
    where: {
      name: {
        [Op.iLike]: name,
      },
    },
  })
  return skill
}

const register = async (data) => {
  if (await skillExists(data.name))
    return { code: 400, message: 'Ya existe una habilidad con ese nombre' }

  const skill = await Skill.create(data)
  return skill
    ? { code: 201, message: 'Habilidad creada con éxito' }
    : {
        code: 400,
        message:
          'No se pudo crear la habilidad. Por favor, inténtelo más tarde',
      }
}
export default register
