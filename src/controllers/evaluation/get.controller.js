import { evaluationService } from '../../services/index.services.js'

const getAll = async (req, res) => {
  try {
    const { code, evaluations } = await evaluationService.getAll()
    return res.status(code).json({ evaluations })
  } catch (error) {
    return res.status(500).json({
      message: 'Error interno en el servidor. ' + error,
    })
  }
}

const getById = async (req, res) => {
  try {
    const { id } = req.params
    const { code, message, evaluations } = await evaluationService.getById(id)
    return res.status(code).json(message ? { message } : { evaluations })
  } catch (error) {
    return res.status(500).json({
      message: 'Error interno en el servidor. ' + error,
    })
  }
}

export { getAll, getById }
