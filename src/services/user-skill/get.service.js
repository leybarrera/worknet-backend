import { Skill, User, UserSkill } from '../../lib/conn.js'

const getAll = async () => {
  const userSkills = await UserSkill.findAll({
    include: [User, Skill],
  })
  return { code: 200, userSkills }
}
const getByUser = async (UserId) => {
  const userSkills = await UserSkill.findAll({
    where: {
      UserId,
    },
    include: [User, Skill],
  })
  return { code: 200, userSkills }
}
const getBySkill = async (SkillId) => {
  const userSkills = await UserSkill.findAll({
    where: {
      SkillId,
    },
    include: [User, Skill],
  })
  return { code: 200, userSkills }
}

export { getAll, getByUser, getBySkill }
