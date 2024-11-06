import { skillService } from '../../services/index.services.js'

const getAll = async (req, res) => {
  try {
    const { code, skills } = await skillService.getAll()
    return res.status(code).json({
      skills,
    })
  } catch (error) {
    return res.status(500).json({
      message: 'Error interno en el servidor. ' + error,
    })
  }
}

const getById = async (req, res) => {
  try {
    const { id } = req.params
    const { code, message, skill } = await skillService.getById(id)
    return res.status(code).json(message ? { message } : { skill })
  } catch (error) {
    return res.status(500).json({
      message: 'Error interno en el servidor. ' + error,
    })
  }
}

export { getAll, getById }
