import { userSkillService } from '../../services/index.services.js'

const deleteUserSkill = async (req, res) => {
  try {
    const { id } = req.params
    const { code, message } = await userSkillService.deleteUserSKill(id)
    return res.status(code).json({ message })
  } catch (error) {
    return res.status(500).json({
      message: 'Error interno. Intente de nuevo.',
    })
  }
}

export default deleteUserSkill
