import { userSkillService } from '../../services/index.services.js'

const getAll = async (req, res) => {
  try {
    const { code, userSkills } = await userSkillService.getAll()
    return res.status(code).json({ userSkills })
  } catch (error) {
    return res.status(500).json({
      message: 'Error interno en el servidor. ' + error,
    })
  }
}

const getByUser = async (req, res) => {
  try {
    const { user_id } = req.query
    const { code, userSkills } = await userSkillService.getByUser(user_id)
    return res.status(code).json({ userSkills })
  } catch (error) {
    return res.status(500).json({
      message: 'Error interno en el servidor. ' + error,
    })
  }
}

const getBySkill = async (req, res) => {
  try {
    const { skill_id } = req.query
    const { code, userSkills } = await userSkillService.getBySkill(skill_id)
    return res.status(code).json({ userSkills })
  } catch (error) {
    return res.status(500).json({
      message: 'Error interno en el servidor. ' + error,
    })
  }
}

export { getAll, getBySkill, getByUser }
