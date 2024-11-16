import { workExperienceService } from '../../services/index.services.js'

const getByUser = async (req, res) => {
  try {
    const { user_id } = req.params
    const { code, message, workExperiences } =
      await workExperienceService.getByUser(user_id)
    return res.status(code).json(message ? { message } : { workExperiences })
  } catch (error) {
    return res.status(500).json({
      message: 'Error interno en el servidor. ' + error,
    })
  }
}

export { getByUser }
