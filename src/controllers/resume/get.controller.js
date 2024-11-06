import { resumeService } from '../../services/index.services.js'

const getAll = async (req, res) => {
  try {
    const { code, resumes } = await resumeService.getAll()
    return res.status(code).json({ resumes })
  } catch (error) {
    return res.status(500).json({
      message: 'Error interno en el servidor. ' + error,
    })
  }
}

const getById = async (req, res) => {
  try {
    const { id } = req.params
    const { code, message, resume } = await resumeService.getById(id)
    return res.status(code).json(message ? { message } : { resume })
  } catch (error) {
    return res.status(500).json({
      message: 'Error interno en el servidor. ' + error,
    })
  }
}

const getByUser = async (req, res) => {
  try {
    const { id } = req.params
    const { code, message, resume } = await resumeService.getByUser(id)
    return res.status(code).json(message ? { message } : { resume })
  } catch (error) {
    return res.status(500).json({
      message: 'Error interno en el servidor. ' + error,
    })
  }
}

export { getAll, getById, getByUser }
