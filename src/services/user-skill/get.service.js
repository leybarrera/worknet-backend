import { Skill, User, UserSkill } from '../../lib/conn.js'

const getAll = async () => {
  const userSkills = await UserSkill.findAll({})
  return { code: 200, userSkills }
}
const getByUser = async (UserId) => {
  const userSkills = await UserSkill.findAll({
    where: {
      UserId,
    },
  })
  return userSkills.length > 0
    ? { code: 200, userSkills }
    : { code: 404, userSkills: [] }
}
const getBySkill = async (SkillId) => {
  const userSkills = await UserSkill.findAll({
    where: {
      SkillId,
    },
  })
  return { code: 200, userSkills }
}

export { getAll, getByUser, getBySkill }
