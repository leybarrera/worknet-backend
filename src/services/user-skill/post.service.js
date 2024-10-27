import { Skill, User, UserSkill } from '../../lib/conn.js'

const userExists = async (id) => {
  const user = await User.findOne({
    where: {
      id,
      isDeleted: false,
    },
  })
  return user
}
const skillExists = async (id) => {
  const skill = await Skill.findOne({
    where: {
      id,
      isDeleted: false,
    },
  })
  return skill
}

const register = async (data) => {
  const { UserId, SkillId } = data

  if (!(await userExists(UserId)))
    return { code: 400, message: 'Usuario no encontrado' }

  if (!(await skillExists(SkillId)))
    return { code: 400, message: 'Skill no encontrada' }

  const userSkill = await UserSkill.create(data)
  return userSkill
    ? { code: 201, message: 'Habilidad creada con éxito' }
    : {
        code: 400,
        message:
          'No se pudo crear la habilidad. Por favor, inténtelo más tarde',
      }
}
export default register
